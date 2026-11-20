s=open('shell.html').read()
for k,f in [('ART','art.js'),('STORY','story.js'),('STORY2','story2.js'),('MAIN','main.js')]:
    s=s.replace('/*%s*/'%k,open(f).read())
open('index.html','w').write(s)
print(len(s))
