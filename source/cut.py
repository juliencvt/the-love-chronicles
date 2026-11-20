import numpy as np, sys
from PIL import Image, ImageFilter
from scipy import ndimage
def cut(src,dst,erode=0):
    im=np.asarray(Image.open(src).convert('RGB')).astype(np.int16)
    mn=im.min(2); mx=im.max(2)
    bgish=(mn>232)&((mx-mn)<20)
    lab,n=ndimage.label(bgish)
    border=set(np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]])))-{0}
    bg=np.isin(lab,list(border))
    # holes: pure-white enclosed areas (background seen through hair)
    pure=(mn>246)&((mx-mn)<10)
    hl,hn=ndimage.label(pure&~bg)
    if hn:
        sz=ndimage.sum(np.ones_like(hl),hl,range(1,hn+1))
        big=[i+1 for i,v in enumerate(sz) if v>im.shape[0]*im.shape[1]*0.00015]
        bg|=np.isin(hl,big)  # holes
    # soft edge: pixels near bg get alpha based on whiteness
    if erode: bg=ndimage.binary_dilation(bg,iterations=erode)
    near=ndimage.binary_dilation(bg,iterations=2)&~bg
    alpha=np.where(bg,0,255).astype(np.float32)
    w=(mn[near].astype(np.float32)-200)/55  # whiteness 0..1
    alpha[near]=np.clip(255*(1-w*0.9),40,255)
    a=Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))
    A=np.asarray(a); solid=A>200
    idx=ndimage.distance_transform_edt(~solid,return_distances=False,return_indices=True)
    rgb=im[idx[0],idx[1]].astype(np.uint8)
    out=Image.fromarray(rgb).convert('RGBA'); out.putalpha(a)
    # largest: keep main figure (+ pieces >0.5% of it), drop stray fragments
    A2=np.asarray(out)[...,3]>20; lb,nb=ndimage.label(A2)
    if nb>1:
        sz=ndimage.sum(A2,lb,range(1,nb+1)); keep=np.isin(lb,[i+1 for i,v in enumerate(sz) if v>sz.max()*0.005])
        arr=np.asarray(out).copy(); arr[...,3]=np.where(keep,arr[...,3],0); out=Image.fromarray(arr)
    bbox=out.getbbox(); out=out.crop(bbox)
    # unify height 1100 px tall? keep native, save webp
    out.save(dst,'WEBP',quality=90,method=6,exact=True)
    print(dst,out.size)
for i in range(1,6): cut(f'src/f{i}.jpg',f'assets/f{i}.webp')
