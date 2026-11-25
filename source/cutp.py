import numpy as np, sys
from PIL import Image, ImageFilter
from scipy import ndimage
def cut(src,dst,H=1500,tol=22,holes=True):
    img=Image.open(src).convert('RGB'); im=np.asarray(img).astype(np.int16)
    corners=np.concatenate([im[:20,:20].reshape(-1,3),im[:20,-20:].reshape(-1,3),im[-20:,:20].reshape(-1,3),im[-20:,-20:].reshape(-1,3)])
    bgc=np.median(corners,0)
    # background may have gradient: compare to local row/col-smoothed? use distance to bgc plus brightness
    dist=np.abs(im-bgc).max(2)
    mn=im.min(2); mx=im.max(2)
    bgish=(dist<tol)|((mn>235)&((mx-mn)<16))
    lab,n=ndimage.label(bgish)
    border=set(np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]])))-{0}
    bg=np.isin(lab,list(border))
    pure=(dist<10)
    hl,hn=ndimage.label(pure&~bg)
    if hn and holes:
        sz=ndimage.sum(np.ones_like(hl),hl,range(1,hn+1))
        big=[i+1 for i,v in enumerate(sz) if v>im.shape[0]*im.shape[1]*0.0002]
        bg|=np.isin(hl,big)
    near=ndimage.binary_dilation(bg,iterations=2)&~bg
    alpha=np.where(bg,0,255).astype(np.float32)
    w=np.clip(1-dist[near].astype(np.float32)/60,0,1)
    alpha[near]=np.clip(255*(1-w*0.9),40,255)
    a=Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))
    A=np.asarray(a); solid=A>200
    idx=ndimage.distance_transform_edt(~solid,return_distances=False,return_indices=True)
    rgb=im[idx[0],idx[1]].astype(np.uint8)
    out=Image.fromarray(rgb).convert('RGBA'); out.putalpha(a)
    A2=np.asarray(out)[...,3]>20; lb,nb=ndimage.label(A2)
    if nb>1:
        sz=ndimage.sum(A2,lb,range(1,nb+1)); keep=np.isin(lb,[i+1 for i,v in enumerate(sz) if v>sz.max()*0.005])
        arr=np.asarray(out).copy(); arr[...,3]=np.where(keep,arr[...,3],0); out=Image.fromarray(arr)
    out=out.crop(out.getbbox())
    w0,h0=out.size; out=out.resize((round(w0*H/h0),H),Image.LANCZOS)
    out.save(dst,'WEBP',quality=88,method=6,exact=True)
    return out
if __name__=='__main__':
    import json
    res={}
    for n in sys.argv[1:]:
        o=cut(f'src/pirate/{n}.png',f'assets/{n}.webp'); res[n]=o.size; print(n,o.size)
