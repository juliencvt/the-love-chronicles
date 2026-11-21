{
const $=id=>document.getElementById(id);
const MEM={};
const store={get(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):(MEM[k]??null)}catch(e){return MEM[k]??null}},set(k,v){MEM[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let OPT=Object.assign({mus:60,sfx:70,lang:'fr',speed:1},store.get('ssl_opts')||{});
const saveOpt=()=>store.set('ssl_opts',OPT);
const T={
fr:{title:'The Love Chronicles',sub:'Une romance de la Régence',cont:'Continuer',newg:'Nouvelle partie',saves:'Sauvegardes',opts:'Options',ver:'Chapitres 1 à 7',confirmNew:'Ta partie en cours sera effacée. Commencer une nouvelle histoire ?',yes:'Oui, recommencer',no:'Annuler',back:'Retour',next:'Suivant',start:'Commencer',stepT:{id:'Qui es-tu ?',look:'Choisis ton personnage',app:'Ton apparence',out:'Ta tenue',sum:'Prêt·e pour le bal ?'},first:'Prénom',last:'Nom de famille',pron:'Pronoms',pres:'Apparence',attr:'Tu es attiré·e par',men:'Les hommes',women:'Les femmes',fem:'Féminine',masc:'Masculine',prons:['Il','Elle','Iel'],final:'Ces choix sont définitifs : ils ne pourront plus être modifiés une fois l\'histoire commencée.',needName:'Choisis un prénom et un nom de famille.',tabs:['Peau','Coiffure','Couleur','Yeux','Nez','Bouche','Silhouette'],shape:'Forme',color:'Couleur',eyeShapes:['Ronds','En amande'],mouthShapes:['Fine','Pulpeuse'],noses:['Petit','Droit','Large'],bodies:['Très mince','Normale','En surpoids','Obèse'],hairF:{kinky:'Crépus',curly:'Bouclés',long:'Lisses longs',bob:'Carré lisse',bun:'Chignon'},hairM:{mlong:'Longs',mshort:'Courts',braids:'Tresses afro'},random:'Au hasard',save:'Sauver',load:'Charger',empty:'Emplacement vide',auto:'Sauvegarde auto',slot:'Emplacement',close:'Fermer',music:'Musique',sfxl:'Effets sonores',lang:'Langue',speed:'Vitesse du texte',speeds:['Lente','Normale','Rapide'],resume:'Reprendre',mainmenu:'Menu principal',paused:'Pause',saved:'Partie sauvegardée',major:'✦ Choix important ✦',choose:'Que fais-tu ?',conseq:'Ce choix aura des conséquences…',likes:'♥ {n} a apprécié',dislikes:'{n} n\'a pas apprécié',repUp:'Réputation +',repDown:'Réputation −',bessUp:'♥ Bess vous apprécie',endT:'Fin du chapitre {n}',nextCh:'Commencer le chapitre {n}',soon:'La suite arrive bientôt…',rel:'Relations',rep:'Réputation',majors:'Tes choix importants',ch2:'Le chapitre 2 arrive bientôt…',replay:'Recommencer l\'histoire',tapc:'Touche pour continuer',noSave:'Aucune sauvegarde pour le moment.',summary:'Pronoms {p} · attiré·e par {a}',cards:'Tenue'},
en:{title:'The Love Chronicles',sub:'A Regency romance',cont:'Continue',newg:'New game',saves:'Saves',opts:'Settings',ver:'Chapters 1 to 7',confirmNew:'Your current game will be erased. Start a new story?',yes:'Yes, start over',no:'Cancel',back:'Back',next:'Next',start:'Begin',stepT:{id:'Who are you?',look:'Choose your character',app:'Your appearance',out:'Your outfit',sum:'Ready for the ball?'},first:'First name',last:'Surname',pron:'Pronouns',pres:'Presentation',attr:'You are attracted to',men:'Men',women:'Women',fem:'Feminine',masc:'Masculine',prons:['He','She','They'],final:'These choices are final: they can\'t be changed once the story begins.',needName:'Choose a first name and a surname.',tabs:['Skin','Hairstyle','Colour','Eyes','Nose','Mouth','Body'],shape:'Shape',color:'Colour',eyeShapes:['Round','Almond'],mouthShapes:['Thin','Full'],noses:['Small','Straight','Wide'],bodies:['Very slim','Average','Overweight','Obese'],hairF:{kinky:'Coily',curly:'Curly',long:'Long & straight',bob:'Straight bob',bun:'Bun'},hairM:{mlong:'Long',mshort:'Short',braids:'Afro braids'},random:'Random',save:'Save',load:'Load',empty:'Empty slot',auto:'Autosave',slot:'Slot',close:'Close',music:'Music',sfxl:'Sound effects',lang:'Language',speed:'Text speed',speeds:['Slow','Normal','Fast'],resume:'Resume',mainmenu:'Main menu',paused:'Paused',saved:'Game saved',major:'✦ Important choice ✦',choose:'What do you do?',conseq:'This choice will have consequences…',likes:'♥ {n} liked that',dislikes:'{n} didn\'t like that',repUp:'Reputation +',repDown:'Reputation −',bessUp:'♥ Bess likes you',endT:'End of Chapter {n}',nextCh:'Start Chapter {n}',soon:'More coming soon…',rel:'Relationships',rep:'Reputation',majors:'Your important choices',ch2:'Chapter 2 is coming soon…',replay:'Restart the story',tapc:'Tap to continue',noSave:'No saves yet.',summary:'Pronouns {p} · attracted to {a}',cards:'Outfit'}};
const tr=k=>T[OPT.lang][k];
const L2=a=>Array.isArray(a)?a[OPT.lang=='en'?1:0]:(a||'');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- characters ---------- */
const OUT_F=[{n:['Bleu Bridgerton','Bridgerton blue'],fill:'#a9c9ee',sleeve:'#c3daf4',trim:'#ffffff',acc:'pearls'},{n:['Rose poudré','Powder rose'],fill:'#f2b5c6',sleeve:'#f7cad6',trim:'#d9b25c',acc:'flowers'},{n:['Émeraude','Emerald'],fill:'#3e8a6a',sleeve:'#5aa383',trim:'#e3c46b',acc:'pendant'}];
const OUT_M=[{n:['Bleu nuit','Midnight blue'],coat:'#24305c',vest:'#c9a54b',btn:'#f2d67a'},{n:['Bordeaux','Burgundy'],coat:'#6a1f30',vest:'#efe3c6',btn:'#d4af37'}];
const PRE={f:[
 {src:'assets/f1.webp',w:843,h:1453,eye:[308,203,58],waist:.4},
 {src:'assets/f2.webp',w:842,h:1496,eye:[307,178,70],waist:.4},
 {src:'assets/f3.webp',w:833,h:1500,eye:[303,186,60],waist:.4},
 {src:'assets/f4.webp',w:842,h:1483,eye:[318,186,60],waist:.4},
 {src:'assets/f5.webp',w:843,h:1451,eye:[311,203,60],waist:.4}],m:[
 {src:'assets/m1.webp',w:567,h:1465,eye:[208,88,50],waist:.4},
 {src:'assets/m2.webp',w:579,h:1455,eye:[221,116,50],waist:.4},
 {src:'assets/m3.webp',w:464,h:1163,eye:[174,105,40],waist:.4},
 {src:'assets/m4.webp',w:579,h:1458,eye:[222,87,52],waist:.4}]};
const PICS={
 father:{src:'assets/father.webp',w:321,h:930,eye:[116,74,24],waist:.42},
 mother:{src:'assets/mother.webp',w:735,h:1100,eye:[367,115,50],waist:.44},
 edmund:{src:'assets/edmund.webp',w:567,h:1475,eye:[204,171,65],waist:.4},
 rosalind:{src:'assets/rosalind.webp',w:430,h:1164,eye:[172,117,38],waist:.4},
 mateo:{src:'assets/mateo.webp',w:464,h:1161,eye:[181,104,38],waist:.4},
 nell:{src:'assets/nell.webp',w:429,h:1166,eye:[172,117,38],waist:.4},
 guard:{src:'assets/guard.webp',w:529,h:1500,eye:[276,180,45],waist:.38},
 duchess:{src:'assets/duchess.webp',w:1184,h:1500,eye:[345,150,54],waist:.42},
 prudence:{src:'assets/prudence.webp',w:884,h:1499,eye:[324,180,60],waist:.4},
 peregrine:{src:'assets/peregrine.webp',w:894,h:1500,eye:[357,180,60],waist:.4},
 perceval:{src:'assets/perceval.webp',w:495,h:1461,eye:[233,126,54],waist:.4},
 philippe:{src:'assets/philippe.webp',w:507,h:1500,eye:[215,156,50],waist:.4},
 queen:{src:'assets/queen.webp',w:1447,h:1500,eye:[423,156,48],waist:.42},
 bess:{src:'assets/bess.webp',w:644,h:1500,eye:[270,165,48],waist:.42},
 theo:{src:'assets/theo.webp',w:624,h:1500,eye:[215,170,48],waist:.42},
 clem:{src:'assets/clem.webp',w:980,h:1500,eye:[419,180,48],waist:.42},
 cordelia:{src:'assets/cordelia.webp',w:982,h:1500,eye:[442,180,48],waist:.42},
 georgie:{src:'assets/georgie.webp',w:977,h:1500,eye:[435,180,48],waist:.42}};
const preOf=P=>(PRE[P.body]&&PRE[P.body].length&&P.look!=null)?PRE[P.body][P.look]:null;
const MASKSVG=(fill,trim)=>`<svg viewBox="-65 -26 130 52"><path fill-rule="evenodd" d="M-65 -4 C-58 -26 -12 -24 0 -10 C12 -24 58 -26 65 -4 C58 20 14 22 0 10 C-14 22 -58 20 -65 -4 Z M-39 0 a14 9 0 1 0 28 0 a14 9 0 1 0 -28 0 Z M11 0 a14 9 0 1 0 28 0 a14 9 0 1 0 -28 0 Z" fill="${fill}" stroke="${trim}" stroke-width="2"/><path d="M58 -10 C76 -30 74 -48 60 -60 C64 -40 60 -22 58 -10 Z" fill="${trim}" opacity=".9" transform="scale(.8)"/></svg>`;
const MK={"f1": {"src": "assets/mk_mcf.webp", "l": 29.785, "t": 0.903, "w": 26.137, "ox": 24.69, "oy": 69.9, "r": -3.34}, "f2": {"src": "assets/mk_mcf.webp", "l": 28.121, "t": 2.348, "w": 30.886, "ox": 24.69, "oy": 69.9, "r": -3.2}, "f3": {"src": "assets/mk_mcf.webp", "l": 29.188, "t": 4.863, "w": 27.401, "ox": 24.69, "oy": 69.9, "r": -6.94}, "f4": {"src": "assets/mk_mcf.webp", "l": 29.092, "t": 1.946, "w": 29.6, "ox": 24.69, "oy": 69.9, "r": -3.23}, "f5": {"src": "assets/mk_mcf.webp", "l": 29.39, "t": -0.097, "w": 30.859, "ox": 24.69, "oy": 69.9, "r": -3.99}, "m1": {"src": "assets/mk_mcm.webp", "l": 18.158, "t": 2.163, "w": 45.636, "ox": 40.98, "oy": 64.74, "r": -6.65}, "m2": {"src": "assets/mk_mcm.webp", "l": 19.446, "t": 1.681, "w": 48.848, "ox": 40.98, "oy": 64.74, "r": -7.53}, "m3": {"src": "assets/mk_mcm.webp", "l": 21.763, "t": 1.998, "w": 44.447, "ox": 40.98, "oy": 64.74, "r": -8.25}, "m4": {"src": "assets/mk_mcm.webp", "l": 20.469, "t": 2.259, "w": 47.194, "ox": 40.98, "oy": 64.74, "r": -7.6}, "edmund": {"src": "assets/mk_greengold.webp", "l": 28.237, "t": 4.292, "w": 33.006, "ox": 28.0, "oy": 62.41, "r": -2.68}, "philippe": {"src": "assets/mk_greengold.webp", "l": 28.046, "t": 5.074, "w": 43.186, "ox": 28.0, "oy": 62.41, "r": -4.34}, "perceval": {"src": "assets/mk_bluegold.webp", "l": 28.79, "t": 5.428, "w": 47.059, "ox": 27.9, "oy": 62.51, "r": -8.91}, "mateo": {"src": "assets/mk_bluegold.webp", "l": 29.506, "t": 2.49, "w": 35.607, "ox": 27.9, "oy": 62.51, "r": -5.96}, "rosalind": {"src": "assets/mk_pink.webp", "l": 30.424, "t": 0.638, "w": 45.312, "ox": 24.73, "oy": 69.87, "r": -3.52}, "nell": {"src": "assets/mk_pink.webp", "l": 31.196, "t": -0.177, "w": 45.41, "ox": 24.73, "oy": 69.87, "r": -2.46}, "mother": {"src": "assets/mk_mother.webp", "l": 46.874, "t": 0.849, "w": 24.133, "ox": 21.41, "oy": 62.25, "r": 2.18}, "prudence": {"src": "assets/mk_prudence.webp", "l": 27.089, "t": 2.342, "w": 35.431, "ox": 24.27, "oy": 63.65, "r": -7.81}, "peregrine": {"src": "assets/mk_peregrine.webp", "l": 26.743, "t": 1.745, "w": 36.537, "ox": 24.31, "oy": 63.67, "r": -4.33}, "queen": {"src": "assets/mk_queen.webp", "l": 22.167, "t": 3.978, "w": 20.839, "ox": 31.09, "oy": 58.2, "r": -9.83}, "duchess": {"src": "assets/mk_duchess.webp", "l": 22.511, "t": 4.849, "w": 22.47, "ox": 31.19, "oy": 58.52, "r": -6.57}};
function picHTML(pr,mask){const k=pr.src.slice(7,-5),q=MK[k];return `<img src="${pr.src}" alt="" draggable="false">${mask&&q?`<img class="pm" src="${q.src}" alt="" style="left:${q.l}%;top:${q.t}%;width:${q.w}%;transform-origin:${q.ox}% ${q.oy}%;transform:rotate(${q.r}deg)">`:''}`}
let S=null;
function mcArt(P,outfit){return {sex:P.body,skin:P.skin,hair:P.hair,hc:ART.HAIRC[P.hc],es:P.es,ec:ART.EYEC[P.ec],nose:P.nose,mouth:P.mouth,lip:ART.LIPC[P.lip],body:P.bt,out:(P.body=='f'?OUT_F:OUT_M)[outfit??P.outfit]}}
function charDef(id){
 const P=S.p,twm=P.body=='m',am=P.attr=='m',mk=S.masked;
 switch(id){
 case 'mc':{const pr=preOf(P);if(pr)return {img:pr,acc:{mask:mk?'#fff3f6':null}};return {p:mcArt(P),acc:{mask:mk?'#fff3f6':null}}}
 case 'father':return {img:PICS.father,acc:{}};
 case 'father_old':return {p:{sex:'m',skin:0,hair:'mshort',hc:'#b8b1aa',es:0,ec:'#3d6fa8',nose:1,mouth:0,lip:'#c98a88',body:2,age:1,out:{coat:'#34363f',vest:'#8a1f2a',btn:'#d4af37'}},acc:{side:1}};
 case 'mother':return {img:PICS.mother,acc:{mask:mk?1:null}};
 case 'mother_old':return {p:{sex:'f',skin:0,hair:'bun',hc:'#7a4a2a',es:1,ec:'#76828c',nose:1,mouth:0,lip:'#b0646e',body:1,age:1,out:{fill:'#8a9cc6',sleeve:'#a6b5d8',trim:'#f1ede4',acc:'pearls'}},acc:{}};
 case 'bess_old':return {p:{sex:'f',skin:1,hair:'bun',hc:'#a8502b',es:0,ec:'#3f7d4e',nose:0,mouth:1,lip:'#d77b80',body:2,out:{fill:'#77708a',sleeve:'#8d86a0',trim:'#fbf8f2',apron:1}},acc:{cap:1,freck:1}};
 case 'duchess':return {img:PICS.duchess,acc:{mask:mk?1:null}};
 case 'queen':return {img:PICS.queen,acc:{mask:mk?1:null}};
 case 'bess':return {img:PICS.bess,acc:{}};
 case 'theo':case 'clem':case 'cordelia':case 'georgie':return {img:PICS[id],acc:{}};
 case 'guard':return {img:PICS.guard,acc:{}};
 case 'queen_old':return {p:{sex:'f',skin:3,hair:'bun',hc:'#e2ddd8',es:1,ec:'#4e2f1c',nose:2,mouth:1,lip:'#874349',body:2,age:1,out:{fill:'#f4ecd8',sleeve:'#fffaf0',trim:'#d4af37',acc:'jewels'}},acc:{crown:1}};
 case 'duchess_old':return {p:{sex:'f',skin:0,hair:'bun',hc:'#cfc8c2',es:1,ec:'#76828c',nose:1,mouth:0,lip:'#a8606a',body:1,age:1,out:{fill:'#6d3d8a',sleeve:'#87579f',trim:'#e6c66a',acc:'jewels'}},acc:{tiara:1}};
 case 'twinA':return {img:twm?PICS.perceval:PICS.prudence,acc:{mask:mk?1:null}};
 case 'twinA_old':return twm?{p:{sex:'m',skin:0,hair:'mshort',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:0,out:{coat:'#93bf2e',vest:'#ff8a3d',btn:'#fff176',cravat:'#ffe0ee'}},acc:{freck:1}}:{p:{sex:'f',skin:0,hair:'kinky',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:0,out:{fill:'#b5d334',sleeve:'#d0e86a',trim:'#ff8a3d',acc:'flowers'}},acc:{plume:1,freck:1}};
 case 'twinB':return {img:twm?PICS.philippe:PICS.peregrine,acc:{mask:mk?1:null}};
 case 'twinB_old':return twm?{p:{sex:'m',skin:0,hair:'mlong',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:2,out:{coat:'#ff8a3d',vest:'#9bc33a',btn:'#fff176',cravat:'#e8f7ff'}},acc:{freck:1}}:{p:{sex:'f',skin:0,hair:'bun',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:2,out:{fill:'#ff9a3d',sleeve:'#ffb86b',trim:'#b5d334',acc:'pearls'}},acc:{plume:1,freck:1}};
 case 'li1':return {img:am?PICS.edmund:PICS.rosalind,acc:{mask:mk?(am?'#1b2a4a':'#efe4fa'):null}};
 case 'li1_old':return am?{p:{sex:'m',skin:0,hair:'mshort',hc:'#7a4f2e',es:0,ec:'#3d6fa8',nose:1,mouth:0,lip:'#c98a88',body:1,out:{coat:'#1f4a3c',vest:'#e9dcc0',btn:'#d4af37'}},acc:{mask:mk?'#1b2a4a':null}}:{p:{sex:'f',skin:0,hair:'long',hc:'#100c0c',es:1,ec:'#3a2418',nose:0,mouth:1,lip:'#c0525e',body:1,out:{fill:'#c8b6e8',sleeve:'#ddd0f2',trim:'#ffffff',acc:'pearls'}},acc:{tiara:mk?0:1,mask:mk?'#efe4fa':null,trim:'#b9b9cc'}};
 case 'li2':return {img:am?PICS.mateo:PICS.nell,acc:{mask:mk?1:null}};
 case 'li2_old':return am?{p:{sex:'m',skin:2,hair:'mlong',hc:'#2e1c12',es:0,ec:'#4e2f1c',nose:1,mouth:1,lip:'#a8606a',body:1,out:{coat:'#4f4636',vest:'#a88a5a',btn:'#8a8a8a',cravat:'#ece6d6'}},acc:{mask:'#151515',trim:'#c0c0c8',feather:'#555'}}:{p:{sex:'f',skin:0,hair:'curly',hc:'#e0bd70',es:0,ec:'#3f7d4e',nose:0,mouth:1,lip:'#e8a19c',body:1,out:{fill:'#e8d7b5',sleeve:'#f2e6cc',trim:'#c9a46a'}},acc:{mask:'#ffffff',feather:'#f2b5c6'}};
 case 'guard_old':return {p:{sex:'m',skin:1,hair:'mshort',hc:'#43281a',es:0,ec:'#4e2f1c',nose:2,mouth:0,lip:'#c98a88',body:2,out:{coat:'#b3262f',vest:'#f0e6d0',btn:'#d9b54a',belts:1}},acc:{shako:1,side:1}};
 }}
const TAGC={mc:'#b07a2a',father:'#5b4a3a',mother:'#5b6e9a',bess:'#8a6a9a',queen:'#a8801f',duchess:'#6d3d8a',twinA:'#6f9a1a',twinB:'#d9762a',li1:'#2f5d8a',li2:'#3a3036',guard:'#b3262f',fleury:'#a0527a',iris:'#1e1a24',bailiff:'#6b6b6b',clem:'#d4a017',theo:'#3f6e5a',cordelia:'#9b7fc4',georgie:'#d9733a'};
const tw=()=>S.p.body=='m'?[OPT.lang=='en'?'Percival':'Perceval','Philippe']:['Prudence',OPT.lang=='en'?'Peregrine':'Pérégrine'];
const li1n=()=>S.p.attr=='m'?'Edmund':'Rosalind';
const li2n=()=>S.f&&S.f.li2named?(S.p.attr=='m'?'Mateo':'Nell'):(OPT.lang=='en'?'Masked stranger':(S.p.attr=='m'?'L\'inconnu masqué':'L\'inconnue masquée'));
function nameOf(id){const P=S.p;return {mc:P.first,father:L2(['Père','Father']),mother:L2(['Mère','Mother']),bess:'Bess',queen:L2(['La Reine','The Queen']),duchess:L2(['La Duchesse','The Duchess']),twinA:tw()[0],twinB:tw()[1],li1:li1n(),li2:li2n(),guard:L2(['Garde','Guard']),fleury:'Madame Fleury',iris:S.f.irisNamed?'Iris de Valcourt':L2(['La dame en noir','The lady in black']),bailiff:L2(['L\'huissier','The bailiff']),clem:L2(['Clémentine','Clementine']),theo:L2(['Théo','Theo']),cordelia:'Cordelia',georgie:'Georgie'}[id]||''}
function fmt(s){const P=S.p,en=OPT.lang=='en',gi={m:0,f:1,n:2}[P.pron],ai=P.attr=='m'?0:1,ti=P.body=='m'?0:1;
 return s.replace(/\{(\w+)(?::([^}]*))?\}/g,(m,k,a)=>{
  if(a!=null){const p=a.split('|'),i=k=='g'?gi:k=='a'?ai:ti;return p[Math.min(i,p.length-1)]}
  switch(k){case 'first':return P.first;case 'last':return P.last;case 'e':return en?'':['','e','·e'][gi];
   case 'title':return en?[`Mr ${P.last}`,`Miss ${P.last}`,`${P.first} ${P.last}`][gi]:[`Monsieur ${P.last}`,`Mademoiselle ${P.last}`,`${P.first} ${P.last}`][gi];
   case 'li1':return li1n();case 'li1full':return P.attr=='m'?'Lord Edmund Ashbury':'Lady Rosalind Ashbury';case 'li2':return li2n();case 'tA':return tw()[0];case 'tB':return tw()[1]}return m})}

/* ---------- audio ---------- */
let AC=null,MG,SG,curM=null,want=null,nextT=0,stepN=0;
function initAudio(){if(AC)return;try{AC=new(window.AudioContext||window.webkitAudioContext)();MG=AC.createGain();const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2600;MG.connect(lp);lp.connect(AC.destination);SG=AC.createGain();SG.connect(AC.destination);setVol();setInterval(tick,90);if(want){const w=want;want=null;setMusic(w)}}catch(e){AC=null}}
document.addEventListener('pointerdown',()=>{initAudio();if(AC&&AC.state=='suspended')AC.resume().catch(()=>{})},true);
document.addEventListener('keydown',()=>{initAudio()},true);
function setVol(){if(!AC)return;MG.gain.value=OPT.mus/100*.16;SG.gain.value=OPT.sfx/100*.3}
const mf=m=>440*Math.pow(2,(m-69)/12);
function note(m,t,d,v,dest,type){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.value=mf(m);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.008);g.gain.exponentialRampToValueAtTime(.0005,t+d);o.connect(g);g.connect(dest);o.start(t);o.stop(t+d+.05)}
function pluck(m,t,d,v){note(m,t,d,v,MG,'triangle');note(m,t,d*.5,v*.2,MG,'square')}
const MUS={calm:{bpm:84,b:8,ch:[[55,59,62],[52,55,59],[48,52,55],[50,54,57]]},ball:{bpm:132,b:3,ch:[[62,66,69],[57,61,64],[59,62,66],[55,59,62]]},mystery:{bpm:64,b:8,ch:[[57,60,64],[53,57,60],[50,53,57],[52,56,59]]},tender:{bpm:96,b:3,ch:[[53,57,60],[50,53,57],[46,50,53],[48,52,55]]}};
const MEL=[[2,1,0],[1,2,1],[0,1,2],[2,0,1]];
function tick(){if(!AC||!curM)return;const m=MUS[curM],spb=60/m.bpm;
 while(nextT<AC.currentTime+.3){const t=nextT;
  if(m.b==8){const bar=Math.floor(stepN/8)%4,e=stepN%8,c=m.ch[bar],seq=[c[0],c[1],c[2],c[0]+12,c[2],c[1],c[2]+12,c[1]];pluck(seq[e]+12,t,1.1,curM=='mystery'?.28:.35);if(e==0||e==4)note(c[0]-12,t,1.8,.5,MG,'sine');nextT+=spb/2}
  else{const bar=Math.floor(stepN/3)%4,b=stepN%3,c=m.ch[bar];if(b==0)note(c[0]-12,t,1,.55,MG,'sine');else c.forEach(x=>pluck(x,t,.35,.12));pluck(c[MEL[bar][b]]+12,t,.5,.32);nextT+=spb}
  stepN++}}
function setMusic(n){if(!AC){want=n;return}if(curM===n)return;curM=n;stepN=0;nextT=AC.currentTime+.2}
function sfx(k){if(!AC||!OPT.sfx)return;const t=AC.currentTime;const P={click:[[84,0,.08]],choice:[[76,0,.18],[83,.08,.3]],major:[[72,0,.3],[76,.09,.3],[79,.18,.3],[84,.27,.6]],heart:[[88,0,.2],[91,.07,.3]]}[k];P.forEach(([m,d,l])=>note(m,t+d,l,.45,SG,'sine'))}

/* ---------- screens ---------- */
let screen='menu';
function show(n){screen=n;document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id==n));if(n!='game')setMusic('calm')}
let menuBgDone=false;
function renderMenu(){if(!menuBgDone){$('mbg').innerHTML=ART.bg('ball');menuBgDone=true}
 $('mTitle').textContent=tr('title');$('mSub').textContent=tr('sub');document.documentElement.lang=OPT.lang;
 const has=!!saves().auto;
 $('mList').innerHTML=`<button class="btn pri" data-a="cont" ${has?'':'disabled'}>${tr('cont')}</button><button class="btn" data-a="new">${tr('newg')}</button><button class="btn" data-a="saves">${tr('saves')}</button><button class="btn" data-a="opts">${tr('opts')}</button><div class="ver">${tr('ver')}</div>`}
$('mList').addEventListener('click',e=>{const a=e.target.closest('button')?.dataset.a;if(!a)return;sfx('click');
 if(a=='cont'){loadState(saves().auto)}
 if(a=='new'){if(saves().auto)confirmBox(tr('confirmNew'),()=>{const sv=saves();delete sv.auto;store.set('ssl_saves',sv);startCreate()});else startCreate()}
 if(a=='saves')savesModal(false);if(a=='opts')optsModal()});

/* ---------- modal helpers ---------- */
function modal(html,cls=''){$('sheet').className='sheet '+cls;$('sheet').innerHTML=html;$('modal').classList.add('on')}
function closeModal(){$('modal').classList.remove('on')}
$('modal').addEventListener('click',e=>{if(e.target.id=='modal'&&!$('sheet').classList.contains('end'))closeModal()});
function confirmBox(msg,ok){modal(`<h3>${tr('newg')}</h3><p style="text-align:center">${esc(msg)}</p><div class="stack"><button class="btn pri" id="mOk">${tr('yes')}</button><button class="btn" id="mNo">${tr('no')}</button></div>`);$('mOk').onclick=()=>{closeModal();ok()};$('mNo').onclick=closeModal}
const saves=()=>store.get('ssl_saves')||{};
function savesModal(canSave){const sv=saves();const keys=canSave?['s1','s2','s3']:['auto','s1','s2','s3'];
 const row=k=>{const s=sv[k];const nm=k=='auto'?tr('auto'):`${tr('slot')} ${k.slice(1)}`;
  return `<div class="slot"><div><b>${nm}</b><span>${s?esc(s.p.first+' '+s.p.last)+' · '+esc(L2(s.where)||'')+'<br>'+new Date(s.ts).toLocaleString(OPT.lang):tr('empty')}</span></div><div class="acts">${canSave?`<button data-s="${k}">${tr('save')}</button>`:''}${s?`<button class="${canSave?'alt':''}" data-l="${k}">${tr('load')}</button>`:''}</div></div>`};
 modal(`<h3>${tr('saves')}</h3><div class="stack">${keys.map(row).join('')}<button class="btn" id="mClose">${tr('close')}</button></div>`);
 $('mClose').onclick=closeModal;
 $('sheet').querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const v=saves();v[b.dataset.s]=snap();store.set('ssl_saves',v);toast(tr('saved'));savesModal(true)});
 $('sheet').querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{closeModal();loadState(saves()[b.dataset.l])})}
function optsModal(){
 modal(`<h3>${tr('opts')}</h3><div class="stack"><div><span class="lab">${tr('music')}</span><div class="rng"><input type="range" min="0" max="100" id="oMus" value="${OPT.mus}"><b id="oMusV">${OPT.mus}</b></div></div>
 <div><span class="lab">${tr('sfxl')}</span><div class="rng"><input type="range" min="0" max="100" id="oSfx" value="${OPT.sfx}"><b id="oSfxV">${OPT.sfx}</b></div></div>
 <div><span class="lab">${tr('lang')}</span><div class="seg" id="oLang"><button data-v="fr" class="${OPT.lang=='fr'?'on':''}">Français</button><button data-v="en" class="${OPT.lang=='en'?'on':''}">English</button></div></div>
 <div><span class="lab">${tr('speed')}</span><div class="seg" id="oSpd">${tr('speeds').map((s,i)=>`<button data-v="${i}" class="${OPT.speed==i?'on':''}">${s}</button>`).join('')}</div></div>
 <button class="btn pri" id="mClose">${tr('close')}</button></div>`);
 $('oMus').oninput=e=>{OPT.mus=+e.target.value;$('oMusV').textContent=OPT.mus;setVol();saveOpt()};
 $('oSfx').oninput=e=>{OPT.sfx=+e.target.value;$('oSfxV').textContent=OPT.sfx;setVol();saveOpt()};
 $('oSfx').onchange=()=>sfx('choice');
 $('oLang').onclick=e=>{const v=e.target.dataset.v;if(!v)return;OPT.lang=v;saveOpt();relang();optsModal()};
 $('oSpd').onclick=e=>{const v=e.target.dataset.v;if(v==null)return;OPT.speed=+v;saveOpt();optsModal()};
 $('mClose').onclick=closeModal}
function relang(){document.documentElement.lang=OPT.lang;renderMenu();if(screen=='create')renderCreate();if(screen=='game'&&S){$('where').textContent=L2(S.where);if(mode=='line'){showLine(STORY[S.i]);finishType()}else if(mode=='choice')showChoice(STORY[S.i].ch)}}

/* ---------- creation ---------- */
let P=null,cstep=0,ctab=0,cerr='';
function startCreate(){P={look:0,first:'',last:'',pron:'f',body:'f',attr:'m',skin:1,hair:'long',hc:1,es:0,ec:0,nose:0,mouth:1,lip:0,bt:1,outfit:0};cstep=0;ctab=0;cerr='';show('create');renderCreate()}
const seg=(key,vals,labels)=>`<div class="seg" data-k="${key}">${vals.map((v,i)=>`<button data-v="${v}" class="${P[key]==v?'on':''}">${labels[i]}</button>`).join('')}</div>`;
const chips=(key,vals,labels)=>`<div class="chips" data-k="${key}">${vals.map((v,i)=>`<button data-v="${v}" class="${P[key]==v?'on':''}">${labels[i]}</button>`).join('')}</div>`;
const sws=(key,cols)=>`<div class="sw" data-k="${key}">${cols.map((c,i)=>`<button data-v="${i}" aria-label="${i+1}" style="background:${c}" class="${P[key]==i?'on':''}"></button>`).join('')}</div>`;
function hairOpts(){return P.body=='f'?T[OPT.lang].hairF:T[OPT.lang].hairM}
function preview(o){return ART.draw(mcArt(P,o),'h',{})}
function tabPanel(){const t=tr;switch(ctab){
 case 0:return sws('skin',ART.SKINS);
 case 1:{const h=hairOpts();return chips('hair',Object.keys(h),Object.values(h))}
 case 2:return sws('hc',ART.HAIRC);
 case 3:return `<span class="lab">${t('shape')}</span>${chips('es',[0,1],t('eyeShapes'))}<span class="lab" style="margin-top:12px">${t('color')}</span>${sws('ec',ART.EYEC)}`;
 case 4:return chips('nose',[0,1,2],t('noses'));
 case 5:return `<span class="lab">${t('shape')}</span>${chips('mouth',[0,1],t('mouthShapes'))}<span class="lab" style="margin-top:12px">${t('color')}</span>${sws('lip',ART.LIPC)}`;
 case 6:return chips('bt',[0,1,2,3],t('bodies'));}}
const steps=()=>PRE[P.body].length?['id','look','sum']:['id','app','out','sum'];
function renderCreate(){const t=tr,SL=steps(),sid=SL[cstep];$('cTitle').textContent=t('stepT')[sid];$('cDots').innerHTML=SL.map((x,i)=>`<i class="${i<=cstep?'on':''}"></i>`).join('');
 $('cBack').textContent=t('back');$('cNext').textContent=sid=='sum'?t('start'):t('next');
 let h='';const pr=preOf(P);
 if(sid=='id')h=`<div class="fld"><label for="fFirst">${t('first')}</label><input id="fFirst" maxlength="16" autocomplete="off" value="${esc(P.first)}"></div><div class="fld"><label for="fLast">${t('last')}</label><input id="fLast" maxlength="18" autocomplete="off" value="${esc(P.last)}"></div>
  <div class="fld"><span class="lab">${t('pron')}</span>${seg('pron',['f','m','n'],[t('prons')[1],t('prons')[0],t('prons')[2]])}</div>
  <div class="fld"><span class="lab">${t('pres')}</span>${seg('body',['f','m'],[t('fem'),t('masc')])}</div>
  <div class="fld"><span class="lab">${t('attr')}</span>${seg('attr',['m','f'],[t('men'),t('women')])}</div>
  <div class="note">${t('final')}</div><div class="err">${cerr}</div>`;
 if(sid=='look')h=`<div class="looks">${PRE[P.body].map((x,i)=>`<button data-look="${i}" class="${P.look==i?'on':''}" aria-label="${i+1}"><img src="${x.src}" alt=""></button>`).join('')}</div>`;
 if(sid=='app')h=`<div class="prev" id="pv">${preview()}</div><div class="tabs" id="tabs">${t('tabs').map((x,i)=>`<button data-t="${i}" class="${i==ctab?'on':''}">${x}</button>`).join('')}<button data-t="r">${t('random')}</button></div><div id="panel">${tabPanel()}</div>`;
 if(sid=='out'){const L=P.body=='f'?OUT_F:OUT_M;h=`<div class="outs">${L.map((o,i)=>`<button data-o="${i}" class="${P.outfit==i?'on':''}"><div class="pv">${preview(i)}</div>${L2(o.n)}</button>`).join('')}</div>`}
 if(sid=='sum'){const prn=t('prons')[{m:0,f:1,n:2}[P.pron]],at=P.attr=='m'?t('men'):t('women');h=`<div class="prev${pr?' full':''}">${pr?`<img src="${pr.src}" alt="">`:preview()}</div><div class="sum"><b class="serif" style="font-size:24px">${esc(P.first)} ${esc(P.last)}</b><br>${t('summary').replace('{p}',prn).replace('{a}',at.toLowerCase())}${pr?'':`<br>${t('cards')} : ${L2((P.body=='f'?OUT_F:OUT_M)[P.outfit].n)}`}</div><div class="note">${t('final')}</div>`}
 $('cBody').innerHTML=h;$('cBody').scrollTop=0;
 if(sid=='id'){$('fFirst').oninput=e=>P.first=e.target.value.trim();$('fLast').oninput=e=>P.last=e.target.value.trim()}}
$('cBody').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;sfx('click');
 const box=b.parentElement;
 if(b.dataset.t!=null){if(b.dataset.t=='r'){const r=n=>Math.floor(Math.random()*n);const hk=Object.keys(hairOpts());Object.assign(P,{skin:r(5),hair:hk[r(hk.length)],hc:r(6),es:r(2),ec:r(5),nose:r(3),mouth:r(2),lip:r(5),bt:r(4)})}else ctab=+b.dataset.t;
  $('pv').innerHTML=preview();$('tabs').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.t==String(ctab)));$('panel').innerHTML=tabPanel();return}
 if(b.dataset.o!=null){P.outfit=+b.dataset.o;renderCreate();return}
 if(b.dataset.look!=null){P.look=+b.dataset.look;b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x==b));return}
 const k=box.dataset.k;if(!k)return;let v=b.dataset.v;if(!['pron','body','attr','hair'].includes(k))v=+v;
 P[k]=v;if(k=='body'){P.hair=v=='m'?'mshort':'long';P.outfit=0;P.look=0}
 if(steps()[cstep]=='app'){$('pv').innerHTML=preview();$('panel').innerHTML=tabPanel()}else box.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.v==String(v)))});
$('cBack').onclick=()=>{sfx('click');if(cstep==0){show('menu');renderMenu()}else{cstep--;renderCreate()}};
$('cNext').onclick=()=>{sfx('click');if(cstep==0&&(!P.first||!P.last)){cerr=tr('needName');renderCreate();return}cerr='';
 if(cstep<steps().length-1){cstep++;renderCreate();return}
 S=newState(JSON.parse(JSON.stringify(P)));startGame()};

/* ---------- engine ---------- */
STORY.splice(0,STORY.length,...STORY.flat(9));
const LBL={};STORY.forEach((n,i)=>{if(n.lb)LBL[n.lb]=i});
function newState(p){return {p,i:0,v:{li1:0,li2:0,rep:0,bess:0},f:{},bg:null,mus:null,st:[],ex:{},masked:false,where:null,maj:[],ts:Date.now()}}
const snap=()=>Object.assign(JSON.parse(JSON.stringify(S)),{ts:Date.now()});
function autosave(){const v=saves();v.auto=snap();store.set('ssl_saves',v)}
let mode=null,curBg=null,front='A';
function loadState(s){if(!s)return;S=JSON.parse(JSON.stringify(s));startGame()}
function startGame(){closeModal();show('game');curBg=null;$('stage').innerHTML='';$('choices').className='';$('box').className='hide';
 ['card','item'].forEach(x=>$(x).classList.remove('on'));if(S.bg)setBg(S.bg,1);if(S.mus)setMusic(S.mus);$('where').textContent=L2(S.where);run()}
function setBg(name,instant){if(curBg===name)return;curBg=name;const a=$('bgA'),b=$('bgB'),[on,off]=front=='A'?[b,a]:[a,b];on.innerHTML=ART.bg(name);
 if(instant){on.style.transition=off.style.transition='none'}on.style.opacity=1;off.style.opacity=0;front=front=='A'?'B':'A';
 if(instant)requestAnimationFrame(()=>requestAnimationFrame(()=>{on.style.transition=off.style.transition=''}))}
function run(){for(let g=0;g<400;g++){const n=STORY[S.i];if(!n)return;
 if(n.bg){if(n.chap)S.chap=n.chap;if(S.bg!==n.bg)S.ex={};S.bg=n.bg;setBg(n.bg);if(n.mus){S.mus=n.mus;setMusic(n.mus)}if('mask' in n)S.masked=!!n.mask;if(n.where){S.where=n.where;$('where').textContent=L2(n.where)}
  if(n.card){mode='card';$('box').classList.add('hide');renderStage([],null);$('cardT').textContent=L2(n.card);$('cardS').textContent=L2(n.sub);$('card').classList.add('on');autosave();clearTimeout(cardT);cardT=setTimeout(endCard,2800);return}S.i++;continue}
 if(n.top){S.f.topLi1=S.v.li1>=S.v.li2?1:0;S.i++;continue}
 if(n.st){S.st=n.st;S.i++;continue}
 if(typeof n.set=='string'&&!n.sp&&!n.ch){S.f[n.set]=1;S.i++;continue}
 if('mask' in n){S.masked=!!n.mask;S.i++;continue}
 if(n.lb){S.i++;continue}
 if(n.if){S.i=S.f[n.if]?LBL[n.go]:S.i+1;continue}
 if(n.go){S.i=LBL[n.go];continue}
 if(n.fx){applyFx(n.fx);S.i++;continue}
 if(n.sp){mode='line';showLine(n);autosave();return}
 if(n.ch){mode='choice';showChoice(n.ch);autosave();return}
 if(n.item){mode='item';showItem();return}
 if(n.end){mode='end';autosave();showEnd(n.end);return}
 S.i++}}
let cardT=0;function endCard(){if(mode!='card')return;clearTimeout(cardT);$('card').classList.remove('on');S.i++;run()}
$('card').onclick=endCard;
const svgCache=new Map();
function renderStage(st,speaker){const el=$('stage'),pres=new Set(st);
 [...el.children].forEach(c=>{if(!pres.has(c.dataset.id)){c.classList.remove('in');c.dataset.id='_';setTimeout(()=>c.remove(),420)}});
 st.forEach((id,k)=>{let c=[...el.children].find(x=>x.dataset.id==id);
  if(!c){c=document.createElement('div');c.className='ch';c.dataset.id=id;el.appendChild(c);requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.add('in')))}
  const d=charDef(id);if(!d){c.innerHTML='';c.dataset.key='';c.classList.toggle('on',id===speaker);return}const ex=S.ex[id]||'n',key=id+ex+(d.acc.mask||'')+(id=='mc'?JSON.stringify(S.p):'')+S.p.attr+S.p.body;
  if(c.dataset.key!==key){if(d.img){c.classList.add('pic');c.style.setProperty('--ar',d.img.w+'/'+d.img.h);c.style.setProperty('--ax',(d.img.eye[0]/d.img.w*100)+'%');c.style.height=(72/(d.img.waist||.4))+'%';c.style.top='3%';c.innerHTML=picHTML(d.img,d.acc.mask)}else{c.classList.remove('pic');c.style.height='';c.style.top='';if(!svgCache.has(key))svgCache.set(key,ART.draw(d.p,ex,d.acc));c.innerHTML=svgCache.get(key)}c.dataset.key=key}
  c.style.left=st.length==1?'50%':(k?'71%':'29%');c.classList.toggle('on',id===speaker)})}
let tmr=0,full='',typing=false;
function showLine(n){$('choices').className='';$('veil').classList.remove('on');
 let st=S.st.slice();if(n.sp!='n'&&!st.includes(n.sp))st=[n.sp];if(n.ex)S.ex[n.sp]=n.ex;renderStage(st,n.sp=='n'?null:n.sp);
 const txt=fmt(L2([n.fr,n.en])),b=$('box');b.className=n.sp=='n'?'narr':(txt.startsWith('(')?'th':'');
 const tg=$('tag');tg.textContent=n.sp=='n'?'':nameOf(n.sp);tg.style.background=TAGC[n.sp]||'';type(txt)}
function type(s){clearInterval(tmr);full=s;let i=0;typing=true;$('box').classList.remove('done');$('txt').textContent='';const sp=[42,22,7][OPT.speed];
 tmr=setInterval(()=>{i+=OPT.speed==2?3:1;$('txt').textContent=full.slice(0,i);if(i>=full.length)finishType()},sp)}
function finishType(){clearInterval(tmr);$('txt').textContent=full;typing=false;$('box').classList.add('done')}
function advance(){if(mode!='line')return;if(typing){finishType();return}sfx('click');S.i++;run()}
$('game').addEventListener('click',e=>{if(e.target.closest('#choices,#top,#card,#item'))return;advance()});
document.addEventListener('keydown',e=>{if(screen!='game'||$('modal').classList.contains('on'))return;if(e.key==' '||e.key=='Enter'){e.preventDefault();if(mode=='card')endCard();else if(mode=='item')endItem();else advance()}});
function showChoice(ch){$('box').className='hide';$('veil').classList.add('on');
 let st=S.st.slice();if(!st.includes('mc'))st=st.length>1?[st[0],'mc']:[...st,'mc'];renderStage(st,'mc');
 const c=$('choices');c.className='on'+(ch.major?' major':'');
 c.innerHTML=`<div class="hd">${ch.major?tr('major'):tr('choose')}</div>`+ch.o.map((o,k)=>`<button class="opt" data-k="${k}" style="animation-delay:${k*.07}s">${esc(fmt(L2(o.t)))}</button>`).join('');
 if(ch.major)sfx('major')}
$('choices').addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b||mode!='choice')return;const ch=STORY[S.i].ch,o=ch.o[+b.dataset.k];
 mode=null;sfx('choice');$('choices').className='';$('veil').classList.remove('on');
 if(o.set)S.f[o.set]=1;applyFx(o.fx);if(ch.major){S.maj.push({c:S.chap||1,t:o.t});toast(tr('conseq'))}
 S.i=LBL[o.go];run()});
function applyFx(fx){for(const k in fx){S.v[k]=(S.v[k]||0)+fx[k];const v=fx[k];
 if(k=='li1')toast((v>0?tr('likes'):tr('dislikes')).replace('{n}',li1n()),v>0);
 if(k=='li2')toast((v>0?tr('likes'):tr('dislikes')).replace('{n}',li2n()),v>0);
 if(k=='rep')toast(v>0?tr('repUp'):tr('repDown'));
 if(k=='bess'&&v>0)toast(tr('bessUp'),1)}}
function toast(msg,heart){const d=document.createElement('div');d.textContent=msg;if(heart){d.className='heart';sfx('heart')}$('toast').appendChild(d);setTimeout(()=>d.remove(),2700)}
function showItem(){const p=S.p;$('box').className='hide';const pr=preOf(p);if(pr){const [cx,cy,d]=pr.eye,s=120/(2.2*d);$('locket').innerHTML=`<img src="${pr.src}" alt="" style="position:absolute;height:${pr.h*s}px;left:${103-cx*s}px;top:${125-cy*s}px">`}else $('locket').innerHTML=ART.draw({sex:'f',skin:p.skin,hair:'bun',hc:ART.HAIRC[p.hc],es:p.es,ec:ART.EYEC[p.ec],nose:p.nose,mouth:p.mouth,lip:ART.LIPC[p.lip],body:1,out:{fill:'#8c5a7a',sleeve:'#a87394',trim:'#e8cf8a',acc:'pendant'}},'n',{});$('itemP').textContent=tr('tapc');$('item').classList.add('on')}
function endItem(){if(mode!='item')return;$('item').classList.remove('on');S.i++;run()}
$('item').onclick=endItem;
function showEnd(num){num=num||1;$('box').className='hide';const h=v=>{const n=Math.max(0,Math.min(5,Math.round(v)));return '♥'.repeat(n)+'♡'.repeat(5-n)};
 const hasNext=S.i+1<STORY.length,majs=S.maj.filter(x=>Array.isArray(x)?num==1:x.c==num).map(x=>Array.isArray(x)?x:x.t);
 modal(`<h3>${tr('endT').replace('{n}',num)}</h3><p style="text-align:center;margin:0;font:italic 20px 'Cormorant Garamond',serif">${hasNext?'':tr('soon')}</p>
 <span class="lab" style="margin-top:14px">${tr('rel')}</span><div class="hearts"><div class="row">${li1n()}<i>${h(S.v.li1)}</i></div><div class="row">${esc(li2n())}<i>${h(Math.max(0,S.v.li2+1))}</i></div><div class="row">${tr('rep')}<i>${h(S.v.rep+2)}</i></div></div>
 <span class="lab">${tr('majors')}</span><ul>${majs.map(t=>`<li>${esc(fmt(L2(t)))}</li>`).join('')}</ul>
 <div class="stack">${hasNext?`<button class="btn pri" id="eNext">${tr('nextCh').replace('{n}',num+1)}</button>`:''}<button class="btn ${hasNext?'':'pri'}" id="eRe">${tr('replay')}</button><button class="btn" id="eMenu">${tr('mainmenu')}</button></div>`,'end');
 if(hasNext)$('eNext').onclick=()=>{closeModal();S.i++;run()};
 $('eRe').onclick=()=>{S=newState(S.p);startGame()};$('eMenu').onclick=()=>{closeModal();show('menu');renderMenu()}}
$('pauseBtn').onclick=()=>{sfx('click');modal(`<h3>${tr('paused')}</h3><div class="stack"><button class="btn pri" id="pR">${tr('resume')}</button><button class="btn" id="pS">${tr('saves')}</button><button class="btn" id="pO">${tr('opts')}</button><button class="btn" id="pM">${tr('mainmenu')}</button></div>`);
 $('pR').onclick=closeModal;$('pS').onclick=()=>savesModal(true);$('pO').onclick=optsModal;$('pM').onclick=()=>{autosave();closeModal();clearInterval(tmr);mode=null;show('menu');renderMenu()}};

renderMenu();setMusic('calm');
window.__dbg={get S(){return S},run,LBL,STORY};
}
