import re,shutil,os,glob
R='/home/claude/the-love-chronicles'
h=open('index.html').read()
h=h.replace('<title>The Love Chronicles</title>','<title>The Love Chronicles</title>\n<link rel="icon" href="icons/favicon.png">\n<link rel="manifest" href="manifest.webmanifest">\n<meta name="theme-color" content="#5b2f5e">\n<link rel="apple-touch-icon" href="icons/icon-192.png">\n<meta name="mobile-web-app-capable" content="yes">')
h=h.replace('</body>','<script>try{if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{})}catch(e){}</script>\n</body>')
open(R+'/index.html','w').write(h)
for f in glob.glob('assets/*.webp'): shutil.copy(f,R+'/assets/')
sw=open(R+'/sw.js').read(); v=int(re.search(r"tlc-v(\d+)",sw).group(1))+1
files=['./','index.html','manifest.webmanifest']+['icons/'+f for f in sorted(os.listdir(R+'/icons'))]+['assets/'+f for f in sorted(os.listdir(R+'/assets'))]
sw=re.sub(r"tlc-v\d+","tlc-v%d"%v,sw); sw=re.sub(r"const F=\[.*?\];","const F=%s;"%str(files).replace("'",'"'),sw,flags=re.S)
open(R+'/sw.js','w').write(sw)
for f in ['art.js','story.js','story2.js','main.js','shell.html','build.py','cut.py','deploy.py']: shutil.copy(f,R+'/source/')
print('cache v',v)
