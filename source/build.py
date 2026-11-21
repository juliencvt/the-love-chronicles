s=open('shell.html').read()
for k,f in [('ART','art.js'),('STORY','story.js'),('STORY2','story2.js'),('STORY3','story3.js'),('STORY4','story4.js'),('STORY5','story5.js'),('STORY6','story6.js'),('STORY7','story7.js'),('MAIN','main.js')]:
    s=s.replace('/*%s*/'%k,open(f).read())
open('index.html','w').write(s)
print(len(s))
