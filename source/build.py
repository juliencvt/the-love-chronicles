s=open('shell.html').read()
extra=''.join(open('story%d.js'%n).read()+'\n' for n in list(range(8,90))+list(range(101,200)) if __import__('os').path.exists('story%d.js'%n))
for k,f in [('ART','art.js'),('STORY','story.js'),('STORY2','story2.js'),('STORY3','story3.js'),('STORY4','story4.js'),('STORY5','story5.js'),('STORY6','story6.js')]:
    s=s.replace('/*%s*/'%k,open(f).read())
s=s.replace('/*STORY7*/',open('story7.js').read()+'\n'+extra)
import glob,os
cgl=sorted(os.path.basename(f)[:-5] for f in glob.glob('assets/cg/*.webp'))
s=s.replace('/*MAIN*/',open('main.js').read().replace('/*CGLIST*/[]',repr(cgl)))
open('index.html','w').write(s)
print(len(s))
