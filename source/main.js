{
const $=id=>document.getElementById(id);
const MEM={};
const store={get(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):(MEM[k]??null)}catch(e){return MEM[k]??null}},set(k,v){MEM[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let OPT=Object.assign({mus:60,sfx:70,lang:'fr',speed:1},store.get('ssl_opts')||{});
const saveOpt=()=>store.set('ssl_opts',OPT);
const T={
fr:{title:'Le Secret de Valcourt',sub:'The Love Chronicles',lib:'Bibliothèque',libSec:'Toutes les histoires',libBack:'‹ Histoires',gal:'Galerie',galN:'illustration(s) débloquée(s)',cgNew:'✨ Illustration débloquée ! Touche pour continuer',cgSec:'✨ Scène secrète débloquée ! Touche pour continuer',close:'Fermer',play:'Jouer',soonT:'Nouvelle histoire',soonD:'Une nouvelle romance arrive bientôt…',soonP:'Bientôt',cont:'Continuer',newg:'Nouvelle partie',saves:'Sauvegardes',opts:'Options',ver:'Saisons 1 à 4 · 88 chapitres',confirmNew:'Ta partie en cours sera effacée. Commencer une nouvelle histoire ?',yes:'Oui, recommencer',no:'Annuler',back:'Retour',next:'Suivant',start:'Commencer',stepT:{id:'Qui es-tu ?',look:'Choisis ton personnage',app:'Ton apparence',out:'Ta tenue',sum:'Prêt·e pour le bal ?'},first:'Prénom',last:'Nom de famille',pron:'Pronoms',pres:'Apparence',attr:'Tu es attiré·e par',men:'Les hommes',women:'Les femmes',fem:'Féminine',masc:'Masculine',prons:['Il','Elle','Iel'],final:'Ces choix sont définitifs : ils ne pourront plus être modifiés une fois l\'histoire commencée.',needName:'Choisis un prénom et un nom de famille.',tabs:['Peau','Coiffure','Couleur','Yeux','Nez','Bouche','Silhouette'],shape:'Forme',color:'Couleur',eyeShapes:['Ronds','En amande'],mouthShapes:['Fine','Pulpeuse'],noses:['Petit','Droit','Large'],bodies:['Très mince','Normale','En surpoids','Obèse'],hairF:{kinky:'Crépus',curly:'Bouclés',long:'Lisses longs',bob:'Carré lisse',bun:'Chignon'},hairM:{mlong:'Longs',mshort:'Courts',braids:'Tresses afro'},random:'Au hasard',save:'Sauver',load:'Charger',empty:'Emplacement vide',auto:'Sauvegarde auto',slot:'Emplacement',close:'Fermer',music:'Musique',sfxl:'Effets sonores',lang:'Langue',speed:'Vitesse du texte',speeds:['Lente','Normale','Rapide'],resume:'Reprendre',mainmenu:'Menu principal',paused:'Pause',saved:'Partie sauvegardée',major:'✦ Choix important ✦',choose:'Que fais-tu ?',conseq:'Ce choix aura des conséquences…',likes:'♥ {n} a apprécié',dislikes:'{n} n\'a pas apprécié',repUp:'Réputation +',repDown:'Réputation −',bessUp:'♥ Bess vous apprécie',endT:'Fin du chapitre {n}',nextCh:'Commencer le chapitre {n}',soon:'La suite arrive bientôt…',s1end:'Fin de la saison 1',s1sub:'La saison 2 arrive bientôt…',s2end:'Fin de la saison 2',s2sub:'La saison 3 arrive bientôt…',startS2:'Commencer la saison 2',startS3:'Commencer la saison 3',startS4:'Commencer la saison 4',s4end:'Fin de la saison 4',s4sub:'Fin de l\'histoire. Merci d\'avoir vécu Valcourt.',s3end:'Fin de la saison 3',s3sub:'La suite arrive bientôt…',rel:'Relations',rep:'Réputation',majors:'Tes choix importants',ch2:'Le chapitre 2 arrive bientôt…',replay:'Recommencer l\'histoire',tapc:'Touche pour continuer',noSave:'Aucune sauvegarde pour le moment.',summary:'Pronoms {p} · attiré·e par {a}',cards:'Tenue'},
en:{title:'The Valcourt Secret',sub:'The Love Chronicles',lib:'Library',libSec:'All stories',libBack:'‹ Stories',gal:'Gallery',galN:'illustration(s) unlocked',cgNew:'✨ Illustration unlocked! Tap to continue',cgSec:'✨ Secret scene unlocked! Tap to continue',close:'Close',play:'Play',soonT:'New story',soonD:'A new romance is coming soon…',soonP:'Coming soon',cont:'Continue',newg:'New game',saves:'Saves',opts:'Settings',ver:'Seasons 1 to 4 · 88 chapters',confirmNew:'Your current game will be erased. Start a new story?',yes:'Yes, start over',no:'Cancel',back:'Back',next:'Next',start:'Begin',stepT:{id:'Who are you?',look:'Choose your character',app:'Your appearance',out:'Your outfit',sum:'Ready for the ball?'},first:'First name',last:'Surname',pron:'Pronouns',pres:'Presentation',attr:'You are attracted to',men:'Men',women:'Women',fem:'Feminine',masc:'Masculine',prons:['He','She','They'],final:'These choices are final: they can\'t be changed once the story begins.',needName:'Choose a first name and a surname.',tabs:['Skin','Hairstyle','Colour','Eyes','Nose','Mouth','Body'],shape:'Shape',color:'Colour',eyeShapes:['Round','Almond'],mouthShapes:['Thin','Full'],noses:['Small','Straight','Wide'],bodies:['Very slim','Average','Overweight','Obese'],hairF:{kinky:'Coily',curly:'Curly',long:'Long & straight',bob:'Straight bob',bun:'Bun'},hairM:{mlong:'Long',mshort:'Short',braids:'Afro braids'},random:'Random',save:'Save',load:'Load',empty:'Empty slot',auto:'Autosave',slot:'Slot',close:'Close',music:'Music',sfxl:'Sound effects',lang:'Language',speed:'Text speed',speeds:['Slow','Normal','Fast'],resume:'Resume',mainmenu:'Main menu',paused:'Paused',saved:'Game saved',major:'✦ Important choice ✦',choose:'What do you do?',conseq:'This choice will have consequences…',likes:'♥ {n} liked that',dislikes:'{n} didn\'t like that',repUp:'Reputation +',repDown:'Reputation −',bessUp:'♥ Bess likes you',endT:'End of Chapter {n}',nextCh:'Start Chapter {n}',soon:'More coming soon…',s1end:'End of Season 1',s1sub:'Season 2 is coming soon…',s2end:'End of Season 2',s2sub:'Season 3 is coming soon…',startS2:'Start Season 2',startS3:'Start Season 3',startS4:'Start Season 4',s4end:'End of Season 4',s4sub:'The end. Thank you for living Valcourt.',s3end:'End of Season 3',s3sub:'More coming soon…',rel:'Relationships',rep:'Reputation',majors:'Your important choices',ch2:'Chapter 2 is coming soon…',replay:'Restart the story',tapc:'Tap to continue',noSave:'No saves yet.',summary:'Pronouns {p} · attracted to {a}',cards:'Outfit'}};
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
 alistair:{src:'assets/alistair.webp',w:495,h:1500,eye:[175,110,45],waist:.42},
 fleury:{src:'assets/fleury.webp',w:714,h:1500,eye:[280,190,40],waist:.42},
 beppe:{src:'assets/beppe.webp',w:746,h:1500,eye:[440,150,45],waist:.42},
 kid:{src:'assets/kid.webp',w:552,h:1500,eye:[262,175,50],waist:.6,top:24},
 kid2:{src:'assets/kid2.webp',w:636,h:1500,eye:[300,175,50],waist:.6,top:24},
 cordeliam:{src:'assets/cordeliam.webp',w:500,h:1500,eye:[234,120,40],waist:.42},
 jules:{src:'assets/jules.webp',w:425,h:1500,eye:[214,190,45],waist:.52,top:12},
 camille:{src:'assets/camille.webp',w:587,h:1500,eye:[268,125,42],waist:.42},
 lucian:{src:'assets/lucian.webp',w:448,h:1500,eye:[226,120,40],waist:.42},
 agathe:{src:'assets/agathe.webp',w:473,h:1500,eye:[228,130,40],waist:.42},
 volkov:{src:'assets/volkov.webp',w:594,h:1500,eye:[245,120,40],waist:.42},
 clem:{src:'assets/clem.webp',w:980,h:1500,eye:[419,180,48],waist:.42},
 cordelia:{src:'assets/cordelia.webp',w:982,h:1500,eye:[442,180,48],waist:.42},
 georgie:{src:'assets/georgie.webp',w:977,h:1500,eye:[435,180,48],waist:.42},
 ladyp:{src:'assets/ladyp.webp',w:561,h:1500,eye:[254,180,48],waist:.40},
 lordp:{src:'assets/lordp.webp',w:645,h:1500,eye:[302,170,48],waist:.42},
 iris:{src:'assets/iris.webp',w:553,h:1500,eye:[240,180,48],waist:.40},
 dorval:{src:'assets/dorval.webp',w:579,h:1500,eye:[244,170,48],waist:.42},
 judge:{src:'assets/judge.webp',w:677,h:1500,eye:[345,170,48],waist:.42},
 roux:{src:'assets/roux.webp',w:554,h:1500,eye:[277,170,48],waist:.40},
 gabriel:{src:'assets/gabriel.webp',w:674,h:1500,eye:[288,170,48],waist:.42},
 scarlett:{src:'assets/scarlett.webp',w:724,h:1500,eye:[349,190,48],waist:.42},
 henry:{src:'assets/henry.webp',w:683,h:1500,eye:[320,170,48],waist:.42},
 eleanor:{src:'assets/eleanor.webp',w:906,h:1500,eye:[380,170,48],waist:.42},
 fanchon:{src:'assets/fanchon.webp',w:807,h:1500,eye:[379,170,48],waist:.42},
 thomas:{src:'assets/thomas.webp',w:781,h:1500,eye:[346,170,48],waist:.42},
 lettie:{src:'assets/lettie.webp',w:592,h:1500,eye:[282,170,48],waist:.42},
 kit:{src:'assets/kit.webp',w:609,h:1500,eye:[265,170,48],waist:.46,top:8},
 matthias:{src:'assets/matthias.webp',w:658,h:1500,eye:[277,170,48],waist:.42}};
const PREP=[{gown:{src:'assets/pmc1_gown.webp',w:1029,h:1500,eye:[412,182,64],waist:.42},pirate:{src:'assets/pmc1_pirate.webp',w:841,h:1500,eye:[376,145,62],waist:.42}},{gown:{src:'assets/pmc2_gown.webp',w:1030,h:1500,eye:[376,146,60],waist:.42},pirate:{src:'assets/pmc2_pirate.webp',w:893,h:1500,eye:[385,134,60],waist:.42}},{gown:{src:'assets/pmc3_gown.webp',w:1055,h:1500,eye:[412,164,60],waist:.42},pirate:{src:'assets/pmc3_pirate.webp',w:840,h:1500,eye:[335,140,60],waist:.42}},{gown:{src:'assets/pmc4_gown.webp',w:997,h:1500,eye:[393,158,60],waist:.42},pirate:{src:'assets/pmc4_pirate.webp',w:812,h:1500,eye:[372,164,60],waist:.42}},{gown:{src:'assets/pmc5_gown.webp',w:1042,h:1500,eye:[405,158,60],waist:.42},pirate:{src:'assets/pmc5_pirate.webp',w:839,h:1500,eye:[334,140,60],waist:.42}}];
const PIRX={nan:'fanchon',gov:'thomas',lettie:'lettie',kit:'kit',matthias:'matthias'};
const preOf=P=>{if(CUR=='pirate'){if(P.look==null)return null;const L=PREP[Math.min(P.look,PREP.length-1)];const g=S&&P===S.p&&S.sid=='pirate'&&S.chap&&(S.chap>=106||(S.chap>=104&&S.f.pBreeches));return g?L.pirate:L.gown}return (PRE[P.body]&&PRE[P.body].length&&P.look!=null)?PRE[P.body][P.look]:null};
const LOOKS=P=>CUR=='pirate'?PREP.map(x=>x.gown):PRE[P.body];
const MASKSVG=(fill,trim)=>`<svg viewBox="-65 -26 130 52"><path fill-rule="evenodd" d="M-65 -4 C-58 -26 -12 -24 0 -10 C12 -24 58 -26 65 -4 C58 20 14 22 0 10 C-14 22 -58 20 -65 -4 Z M-39 0 a14 9 0 1 0 28 0 a14 9 0 1 0 -28 0 Z M11 0 a14 9 0 1 0 28 0 a14 9 0 1 0 -28 0 Z" fill="${fill}" stroke="${trim}" stroke-width="2"/><path d="M58 -10 C76 -30 74 -48 60 -60 C64 -40 60 -22 58 -10 Z" fill="${trim}" opacity=".9" transform="scale(.8)"/></svg>`;
const MK={"f1": {"src": "assets/mk_mcf.webp", "l": 29.785, "t": 0.903, "w": 26.137, "ox": 24.69, "oy": 69.9, "r": -3.34}, "f2": {"src": "assets/mk_mcf.webp", "l": 28.121, "t": 2.348, "w": 30.886, "ox": 24.69, "oy": 69.9, "r": -3.2}, "f3": {"src": "assets/mk_mcf.webp", "l": 29.188, "t": 4.863, "w": 27.401, "ox": 24.69, "oy": 69.9, "r": -6.94}, "f4": {"src": "assets/mk_mcf.webp", "l": 29.092, "t": 1.946, "w": 29.6, "ox": 24.69, "oy": 69.9, "r": -3.23}, "f5": {"src": "assets/mk_mcf.webp", "l": 29.39, "t": -0.097, "w": 30.859, "ox": 24.69, "oy": 69.9, "r": -3.99}, "m1": {"src": "assets/mk_mcm.webp", "l": 18.158, "t": 2.163, "w": 45.636, "ox": 40.98, "oy": 64.74, "r": -6.65}, "m2": {"src": "assets/mk_mcm.webp", "l": 19.446, "t": 1.681, "w": 48.848, "ox": 40.98, "oy": 64.74, "r": -7.53}, "m3": {"src": "assets/mk_mcm.webp", "l": 21.763, "t": 1.998, "w": 44.447, "ox": 40.98, "oy": 64.74, "r": -8.25}, "m4": {"src": "assets/mk_mcm.webp", "l": 20.469, "t": 2.259, "w": 47.194, "ox": 40.98, "oy": 64.74, "r": -7.6}, "edmund": {"src": "assets/mk_greengold.webp", "l": 28.237, "t": 4.292, "w": 33.006, "ox": 28.0, "oy": 62.41, "r": -2.68}, "philippe": {"src": "assets/mk_greengold.webp", "l": 28.046, "t": 5.074, "w": 43.186, "ox": 28.0, "oy": 62.41, "r": -4.34}, "perceval": {"src": "assets/mk_bluegold.webp", "l": 28.79, "t": 5.428, "w": 47.059, "ox": 27.9, "oy": 62.51, "r": -8.91}, "mateo": {"src": "assets/mk_bluegold.webp", "l": 29.506, "t": 2.49, "w": 35.607, "ox": 27.9, "oy": 62.51, "r": -5.96}, "rosalind": {"src": "assets/mk_pink.webp", "l": 30.424, "t": 0.638, "w": 45.312, "ox": 24.73, "oy": 69.87, "r": -3.52}, "nell": {"src": "assets/mk_pink.webp", "l": 31.196, "t": -0.177, "w": 45.41, "ox": 24.73, "oy": 69.87, "r": -2.46}, "mother": {"src": "assets/mk_mother.webp", "l": 46.874, "t": 0.849, "w": 24.133, "ox": 21.41, "oy": 62.25, "r": 2.18}, "prudence": {"src": "assets/mk_prudence.webp", "l": 27.089, "t": 2.342, "w": 35.431, "ox": 24.27, "oy": 63.65, "r": -7.81}, "peregrine": {"src": "assets/mk_peregrine.webp", "l": 26.743, "t": 1.745, "w": 36.537, "ox": 24.31, "oy": 63.67, "r": -4.33}, "queen": {"src": "assets/mk_queen.webp", "l": 22.167, "t": 3.978, "w": 20.839, "ox": 31.09, "oy": 58.2, "r": -9.83}, "duchess": {"src": "assets/mk_duchess.webp", "l": 22.511, "t": 4.849, "w": 22.47, "ox": 31.19, "oy": 58.52, "r": -6.57}};
function picHTML(pr,mask){const k=pr.src.slice(7,-5),q=MK[k];return `<img src="${pr.src}" alt="" draggable="false">${mask&&q?`<img class="pm" src="${q.src}" alt="" style="left:${q.l}%;top:${q.t}%;width:${q.w}%;transform-origin:${q.ox}% ${q.oy}%;transform:rotate(${q.r}deg)">`:''}`}
let S=null;
function mcArt(P,outfit){return {sex:P.body,skin:P.skin,hair:P.hair,hc:ART.HAIRC[P.hc],es:P.es,ec:ART.EYEC[P.ec],nose:P.nose,mouth:P.mouth,lip:ART.LIPC[P.lip],body:P.bt,out:(P.body=='f'?OUT_F:OUT_M)[outfit??P.outfit]}}
function charDef(id){
 const P=S.p,twm=P.body=='m',am=P.attr=='m',mk=S.masked;
 if(S.sid=='pirate'&&PIRX[id])return {img:PICS[PIRX[id]],acc:{}};
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
 case 'cordelia':if(S.chap>=52&&S.chap<=62)return {img:PICS.cordeliam,acc:{}};
 case 'theo':case 'clem':case 'georgie':case 'ladyp':case 'lordp':case 'iris':case 'dorval':case 'judge':case 'roux':case 'alistair':case 'fleury':case 'beppe':case 'camille':case 'lucian':case 'agathe':case 'volkov':case 'jules':return {img:PICS[id],acc:{}};
 case 'kid':return {img:S.chap>=59?PICS.kid2:PICS.kid,acc:{}};
 case 'guard':return {img:PICS.guard,acc:{}};
 case 'queen_old':return {p:{sex:'f',skin:3,hair:'bun',hc:'#e2ddd8',es:1,ec:'#4e2f1c',nose:2,mouth:1,lip:'#874349',body:2,age:1,out:{fill:'#f4ecd8',sleeve:'#fffaf0',trim:'#d4af37',acc:'jewels'}},acc:{crown:1}};
 case 'duchess_old':return {p:{sex:'f',skin:0,hair:'bun',hc:'#cfc8c2',es:1,ec:'#76828c',nose:1,mouth:0,lip:'#a8606a',body:1,age:1,out:{fill:'#6d3d8a',sleeve:'#87579f',trim:'#e6c66a',acc:'jewels'}},acc:{tiara:1}};
 case 'twinA':return {img:twm?PICS.perceval:PICS.prudence,acc:{mask:mk?1:null}};
 case 'twinA_old':return twm?{p:{sex:'m',skin:0,hair:'mshort',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:0,out:{coat:'#93bf2e',vest:'#ff8a3d',btn:'#fff176',cravat:'#ffe0ee'}},acc:{freck:1}}:{p:{sex:'f',skin:0,hair:'kinky',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:0,out:{fill:'#b5d334',sleeve:'#d0e86a',trim:'#ff8a3d',acc:'flowers'}},acc:{plume:1,freck:1}};
 case 'twinB':return {img:twm?PICS.philippe:PICS.peregrine,acc:{mask:mk?1:null}};
 case 'twinB_old':return twm?{p:{sex:'m',skin:0,hair:'mlong',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:2,out:{coat:'#ff8a3d',vest:'#9bc33a',btn:'#fff176',cravat:'#e8f7ff'}},acc:{freck:1}}:{p:{sex:'f',skin:0,hair:'bun',hc:'#e0661f',es:0,ec:'#7fa65a',nose:2,mouth:0,lip:'#e8a19c',body:2,out:{fill:'#ff9a3d',sleeve:'#ffb86b',trim:'#b5d334',acc:'pearls'}},acc:{plume:1,freck:1}};
 case 'li1':if(S.sid=='pirate')return {img:am?PICS.gabriel:PICS.scarlett,acc:{}};return {img:am?PICS.edmund:PICS.rosalind,acc:{mask:mk?(am?'#1b2a4a':'#efe4fa'):null}};
 case 'li1_old':return am?{p:{sex:'m',skin:0,hair:'mshort',hc:'#7a4f2e',es:0,ec:'#3d6fa8',nose:1,mouth:0,lip:'#c98a88',body:1,out:{coat:'#1f4a3c',vest:'#e9dcc0',btn:'#d4af37'}},acc:{mask:mk?'#1b2a4a':null}}:{p:{sex:'f',skin:0,hair:'long',hc:'#100c0c',es:1,ec:'#3a2418',nose:0,mouth:1,lip:'#c0525e',body:1,out:{fill:'#c8b6e8',sleeve:'#ddd0f2',trim:'#ffffff',acc:'pearls'}},acc:{tiara:mk?0:1,mask:mk?'#efe4fa':null,trim:'#b9b9cc'}};
 case 'li2':if(S.sid=='pirate')return {img:am?PICS.henry:PICS.eleanor,acc:{}};return {img:am?PICS.mateo:PICS.nell,acc:{mask:mk?1:null}};
 case 'li2_old':return am?{p:{sex:'m',skin:2,hair:'mlong',hc:'#2e1c12',es:0,ec:'#4e2f1c',nose:1,mouth:1,lip:'#a8606a',body:1,out:{coat:'#4f4636',vest:'#a88a5a',btn:'#8a8a8a',cravat:'#ece6d6'}},acc:{mask:'#151515',trim:'#c0c0c8',feather:'#555'}}:{p:{sex:'f',skin:0,hair:'curly',hc:'#e0bd70',es:0,ec:'#3f7d4e',nose:0,mouth:1,lip:'#e8a19c',body:1,out:{fill:'#e8d7b5',sleeve:'#f2e6cc',trim:'#c9a46a'}},acc:{mask:'#ffffff',feather:'#f2b5c6'}};
 case 'guard_old':return {p:{sex:'m',skin:1,hair:'mshort',hc:'#43281a',es:0,ec:'#4e2f1c',nose:2,mouth:0,lip:'#c98a88',body:2,out:{coat:'#b3262f',vest:'#f0e6d0',btn:'#d9b54a',belts:1}},acc:{shako:1,side:1}};
 }}
const TAGC={mc:'#b07a2a',father:'#5b4a3a',mother:'#5b6e9a',bess:'#8a6a9a',queen:'#a8801f',duchess:'#6d3d8a',twinA:'#6f9a1a',twinB:'#d9762a',li1:'#2f5d8a',li2:'#3a3036',guard:'#b3262f',fleury:'#a0527a',iris:'#1e1a24',bailiff:'#6b6b6b',clem:'#d4a017',theo:'#3f6e5a',cordelia:'#9b7fc4',georgie:'#d9733a',ladyp:'#2c4a6e',lordp:'#24443a',dorval:'#4a4a5a',roux:'#8a5a3c',judge:'#7a1f2b',fairfax:'#6a7a3a',alistair:'#2f3b52',camille:'#d0607a',lucian:'#3d4a6b',agathe:'#5a5560',volkov:'#3f6b3a',jules:'#8a7a5a',dufresne:'#2a2a3a',vos:'#a0522d',nan:'#b5651d',gov:'#4a4a6a',blackwood:'#1f2f4f',lettie:'#c0708a',kit:'#5a8a3a',pell:'#8a2f2f',anne:'#c4462a',vandijk:'#6a5a2a',matthias:'#7a6a5a',beppe:'#2a6f8a',zanetti:'#c0562a',gaspard:'#6b5a3a'};
const tw=()=>S.p.body=='m'?[OPT.lang=='en'?'Percival':'Perceval','Philippe']:['Prudence',OPT.lang=='en'?'Peregrine':'Pérégrine'];
const li1n=()=>S.sid=='pirate'?(S.p.attr=='m'?'Gabriel Rook':'Scarlett Rook'):S.p.attr=='m'?'Edmund':'Rosalind';
const li2n=()=>S.sid=='pirate'?(S.p.attr=='m'?'Henry Wyndham':'Eleanor Wyndham'):S.f&&S.f.li2named?(S.p.attr=='m'?'Mateo':'Nell'):(OPT.lang=='en'?'Masked stranger':(S.p.attr=='m'?'L\'inconnu masqué':'L\'inconnue masquée'));
const LVI=()=>S.f.danceLi1?'li1':'li2',OTI=()=>S.f.danceLi1?'li2':'li1',RID=id=>id=='lv'?LVI():id=='ot'?OTI():id=='fi'?(S.f.fiOt?OTI():LVI()):id=='rj'?(S.f.fiOt?LVI():OTI()):id=='cx'?(S.f.topLi1?'li1':'li2'):id;
function nameOf(id){id=RID(id);const P=S.p;return {mc:P.first,father:L2(['Père','Father']),mother:L2(['Mère','Mother']),bess:'Bess',queen:L2(['La Reine','The Queen']),duchess:L2(['La Duchesse','The Duchess']),twinA:tw()[0],twinB:tw()[1],li1:li1n(),li2:li2n(),guard:L2(['Garde','Guard']),fleury:'Madame Fleury',iris:S.f.irisNamed?'Iris de Valcourt':L2(['La dame en noir','The lady in black']),bailiff:L2(['L\'huissier','The bailiff']),clem:L2(['Clémentine','Clementine']),theo:L2(['Théo','Theo']),cordelia:'Cordelia',georgie:'Georgie',ladyp:'Lady Pembroke',lordp:'Lord Pembroke',dorval:L2(['Maître Dorval','Mr Dorval']),roux:'Madame Roux',judge:L2(['Le juge','The judge']),fairfax:'Lord Fairfax',alistair:'Alistair',camille:'Camille',lucian:'Sir Lucian',agathe:L2(['Sœur Agathe','Sister Agathe']),volkov:L2(['Capitaine Volkov','Captain Volkov']),jules:'Jules',dufresne:L2(['Commissaire Dufresne','Superintendent Dufresne']),vos:L2(['Docteur Vos','Doctor Vos']),nan:'Fanchon Doucet',gov:L2(['Le gouverneur','The Governor']),blackwood:L2(['Commodore Blackwood','Commodore Blackwood']),lettie:'Lettie',kit:'Kit',pell:L2(['Enseigne Pell','Ensign Pell']),anne:'Anne',vandijk:'Van Dijk',matthias:'Matthias',beppe:'Beppe',zanetti:L2(['Maître Zanetti','Maestro Zanetti']),gaspard:'Gaspard'}[id]||''}
function fmt(s){const P=S.p,en=OPT.lang=='en',gi={m:0,f:1,n:2}[P.pron],ai=P.attr=='m'?0:1,ti=P.body=='m'?0:1;
 return s.replace(/\{(\w+)(?::([^}]*))?\}/g,(m,k,a)=>{
  if(k=='h'&&a!=null){const q=a.split('|');return '\u0001'+q[0]+'\u0002'+(q[1]||q[0])+'\u0003'}
  if(a!=null){const p=a.split('|'),i=k=='g'?gi:k=='a'?ai:ti;return p[Math.min(i,p.length-1)]}
  switch(k){case 'first':return P.first;case 'last':return P.last;case 'e':return en?'':['','e','·e'][gi];
   case 'title':return en?[`Mr ${P.last}`,`Miss ${P.last}`,`${P.first} ${P.last}`][gi]:[`Monsieur ${P.last}`,`Mademoiselle ${P.last}`,`${P.first} ${P.last}`][gi];
   case 'li1':return li1n();case 'li1full':return P.attr=='m'?'Lord Edmund Ashbury':'Lady Rosalind Ashbury';case 'li2':return li2n();case 'lv':return S.f.danceLi1?li1n():li2n();case 'cx':return S.f.topLi1?li1n():li2n();case 'ot':return S.f.danceLi1?li2n():li1n();case 'fi':return RID('fi')=='li1'?li1n():li2n();case 'rj':return RID('rj')=='li1'?li1n():li2n();case 'kid':return S.p.kid||(en?'the little one':'la petite');case 'tA':return tw()[0];case 'tB':return tw()[1]}return m})}

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
let screen='lib';
function show(n){screen=n;document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id==n));if(n!='game')setMusic('calm')}
let menuBgDone=false;
function renderMenu(){$('mBack').textContent=tr('libBack');if(!menuBgDone){$('mbg').innerHTML=ART.bg('ball');menuBgDone=true}
 $('mTitle').textContent=L2(STORIES.find(x=>x.id==CUR).title);$('mSub').textContent=tr('sub');document.documentElement.lang=OPT.lang;
 const has=!!saves().auto;
 $('mList').innerHTML=`<button class="btn pri" data-a="cont" ${has?'':'disabled'}>${tr('cont')}</button><button class="btn" data-a="new">${tr('newg')}</button><button class="btn" data-a="chaps" ${(store.get(CK())||saves().auto)?'':'disabled'}>${L2(['Chapitres','Chapters'])}</button><button class="btn" data-a="gal">${tr('gal')}</button><button class="btn" data-a="saves">${tr('saves')}</button><button class="btn" data-a="opts">${tr('opts')}</button><div class="ver">💎 ${gD()} · ${CUR=='valcourt'?tr('ver'):L2(STORIES.find(x=>x.id==CUR).status)}</div>`}



function gInf(){return !!store.get('tlc_inf')}
function gems(){if(gInf())return 1e9;const g=store.get('tlc_gems');return g==null?30:g}
function gD(){return gInf()?'∞':gems()}
function setGems(v){if(gInf())return;store.set('tlc_gems',Math.max(0,v))}
let verTap=0,verT=0;document.addEventListener('click',e=>{if(!e.target.closest('#mList .ver'))return;const n=Date.now();verTap=n-verT<1500?verTap+1:1;verT=n;if(verTap>=7){verTap=0;store.set('tlc_inf',!gInf());toast(gInf()?'💎 ∞ activé':'💎 ∞ désactivé');renderMenu()}});
function gemReward(n){const d=store.get('tlc_gemch')||[];if(d.includes(n))return 0;d.push(n);store.set('tlc_gemch',d);setGems(gems()+2);return 2}
(()=>{const st=document.createElement('style');st.textContent='.opt.prem{border:2px solid #d4a017!important;background:linear-gradient(135deg,#fff8e1,#fde7f0)!important}.gemTag{display:inline-block;background:#d4a017;color:#fff;border-radius:10px;padding:1px 8px;margin-right:8px;font-size:.85em;font-weight:700}.gemBal{float:right;font-size:.85em;opacity:.85}';document.head.appendChild(st)})();
const HIST={
portroyal:{t:['Port-Royal, en Jamaïque','Port Royal, Jamaica'],d:['La ville « la plus perverse du monde »','The "wickedest city on Earth"'],x:[`Port-Royal est une ville bâtie au bout d'une langue de sable, à l'entrée de la baie de Kingston, en Jamaïque, île anglaise depuis 1655. Au XVIIe siècle, c'est le repaire des boucaniers et des corsaires, si riche et si débauché qu'on l'appelait « la ville la plus perverse du monde ».
Le 7 juin 1692, un violent tremblement de terre fait glisser une grande partie de la ville dans la mer. Elle ne retrouvera jamais sa splendeur. La capitale de la Jamaïque est alors Spanish Town, et Port-Royal devient surtout une base de la Royal Navy, gardée par Fort Charles.`,`Port Royal is a town built at the tip of a sandspit at the entrance to Kingston harbour, in Jamaica, an English island since 1655. In the 17th century it is the haunt of buccaneers and privateers, so rich and so debauched that it was called "the wickedest city on Earth".
On 7 June 1692, a violent earthquake slides much of the town into the sea. It never regains its splendour. The capital of Jamaica is then Spanish Town, and Port Royal becomes mainly a Royal Navy base, guarded by Fort Charles.`]},
articles:{t:['Les articles des pirates','Pirate articles'],d:['XVIIe – XVIIIe siècles','17th – 18th centuries'],x:[`Beaucoup d'équipages pirates signaient un contrat avant de partir : les « articles ». On y fixait le partage du butin, souvent à parts presque égales, avec une part et demie ou deux parts pour le capitaine et le quartier-maître.
Certains articles prévoyaient même une indemnité pour les blessés, plus élevée pour la perte d'un bras ou d'une jambe. Le capitaine était souvent élu, et pouvait être déposé par un vote de l'équipage. Les articles du capitaine Bartholomew Roberts, vers 1720, sont parmi les plus connus.`,`Many pirate crews signed a contract before sailing: the "articles". They set out how plunder was shared, often in near-equal parts, with a share and a half or two shares for the captain and quartermaster.
Some articles even provided compensation for the wounded, higher for the loss of an arm or a leg. The captain was often elected, and could be deposed by a crew vote. The articles of Captain Bartholomew Roberts, around 1720, are among the best known.`]},
nassau:{t:['Nassau, la république des pirates','Nassau, the Republic of Pirates'],d:['Vers 1706 – 1718','Around 1706 – 1718'],x:[`Au début du XVIIIe siècle, l'île de New Providence, aux Bahamas, n'a plus vraiment de gouvernement. Les pirates en font leur base : un port naturel, des récifs qui gênent les gros navires de guerre, et des routes commerciales toutes proches.
On a surnommé cette période la « république des pirates ». Des capitaines célèbres comme Barbe Noire, Charles Vane ou Calico Jack Rackham y font escale. Tout change en juillet 1718, avec l'arrivée d'un nouveau gouverneur envoyé par Londres, Woodes Rogers.`,`In the early 18th century, the island of New Providence, in the Bahamas, has no real government. Pirates make it their base: a natural harbour, reefs that hinder large warships, and trade routes close by.
This period has been nicknamed the "Republic of Pirates". Famous captains such as Blackbeard, Charles Vane and Calico Jack Rackham call there. Everything changes in July 1718, with the arrival of a new governor sent from London, Woodes Rogers.`]},
pardon:{t:['Le pardon du roi','The King\'s pardon'],d:['1717 – 1718','1717 – 1718'],x:[`En septembre 1717, le roi George Ier publie une proclamation : tout pirate qui se rend aux autorités dans un délai d'un an recevra le pardon royal pour ses crimes passés.
Woodes Rogers, un ancien corsaire devenu gouverneur des Bahamas, arrive à Nassau en juillet 1718 pour l'appliquer. Beaucoup de pirates acceptent le pardon. D'autres le refusent et prennent la mer. Certains l'acceptent… puis reprennent la piraterie quelques mois plus tard.`,`In September 1717, King George I issues a proclamation: any pirate who surrenders to the authorities within a year will receive a royal pardon for past crimes.
Woodes Rogers, a former privateer who has become governor of the Bahamas, arrives in Nassau in July 1718 to enforce it. Many pirates accept the pardon. Others refuse and put to sea. Some accept it… then return to piracy a few months later.`]},
barbenoire:{t:['Barbe Noire','Blackbeard'],d:['Mort en 1718','Died 1718'],x:[`Edward Teach, dit Barbe Noire, est sans doute le pirate le plus célèbre de l'histoire. Il cultivait une image terrifiante, avec sa longue barbe noire et, dit-on, des mèches allumées sous son chapeau pendant les combats.
Au printemps 1718, avec son navire le Queen Anne's Revenge, il bloque le port de Charleston, en Caroline du Sud. Il est tué en novembre 1718 lors d'un combat contre la Royal Navy, en Caroline du Nord.`,`Edward Teach, known as Blackbeard, is probably the most famous pirate in history. He cultivated a terrifying image, with his long black beard and, it is said, lit fuses under his hat during fights.
In spring 1718, with his ship the Queen Anne's Revenge, he blockades the port of Charleston, South Carolina. He is killed in November 1718 in a fight against the Royal Navy, in North Carolina.`]},
bonnyread:{t:['Anne Bonny et Mary Read','Anne Bonny and Mary Read'],d:['Femmes pirates','Women pirates'],x:[`Anne Bonny et Mary Read sont les deux femmes pirates les plus célèbres de l'âge d'or de la piraterie. Elles naviguent avec le capitaine Jack Rackham, dit Calico Jack, et se battent aussi durement que les hommes de l'équipage.
En 1720, leur navire est capturé au large de la Jamaïque. Elles sont jugées et condamnées à mort, mais échappent à la pendaison parce qu'elles sont enceintes. Mary Read meurt en prison. On ne sait pas avec certitude ce qu'il est advenu d'Anne Bonny.`,`Anne Bonny and Mary Read are the two most famous women pirates of the golden age of piracy. They sail with Captain Jack Rackham, known as Calico Jack, and fight as hard as the men of the crew.
In 1720 their ship is captured off Jamaica. They are tried and sentenced to death, but escape hanging because they are pregnant. Mary Read dies in prison. It is not known for certain what became of Anne Bonny.`]},

batailleparis:{t:['La bataille de Paris','The Battle of Paris'],d:['30 mars 1814','30 March 1814'],x:[`À la fin de l'hiver 1814, Napoléon est en guerre contre une coalition européenne : la Russie, la Prusse, l'Autriche et le Royaume-Uni. Les armées alliées entrent en France et marchent sur Paris pendant que l'Empereur manœuvre plus à l'est.
Le 30 mars 1814, les troupes russes et prussiennes attaquent les hauteurs autour de la capitale, notamment Montmartre, Belleville et les barrières du nord-est. Les défenseurs, en sous-nombre, sont des soldats, des gardes nationaux et même des élèves de l'École polytechnique.
Paris capitule dans la nuit. Le 31 mars, le tsar Alexandre Ier et le roi de Prusse entrent dans la ville. Quelques jours plus tard, le 6 avril, Napoléon abdique à Fontainebleau et part en exil sur l'île d'Elbe. Louis XVIII, frère de Louis XVI, monte sur le trône : c'est la Première Restauration.`,`In late winter 1814, Napoleon is at war with a European coalition: Russia, Prussia, Austria and the United Kingdom. The allied armies enter France and march on Paris while the Emperor manoeuvres further east.
On 30 March 1814, Russian and Prussian troops attack the heights around the capital, notably Montmartre, Belleville and the north-eastern city gates. The outnumbered defenders are soldiers, national guardsmen and even students of the École polytechnique.
Paris capitulates during the night. On 31 March, Tsar Alexander I and the King of Prussia enter the city. A few days later, on 6 April, Napoleon abdicates at Fontainebleau and goes into exile on the island of Elba. Louis XVIII, brother of Louis XVI, takes the throne: this is the First Restoration.`]},
elbe:{t:['Le retour de l\'île d\'Elbe','The return from Elba'],d:['1er mars 1815','1 March 1815'],x:[`Après sa première abdication en 1814, Napoléon reçoit la souveraineté de l'île d'Elbe, une petite île entre la Corse et l'Italie. Il y vit moins d'un an.
Le 26 février 1815, il s'en échappe avec environ un millier de soldats et débarque le 1er mars à Golfe-Juan, près de Cannes. Il remonte vers Paris par les Alpes, par une route qu'on appelle aujourd'hui la « route Napoléon ».
Les troupes envoyées pour l'arrêter le rejoignent les unes après les autres. Le roi Louis XVIII doit fuir. C'est le début de la période qu'on appellera les « Cent-Jours ».`,`After his first abdication in 1814, Napoleon is given sovereignty over Elba, a small island between Corsica and Italy. He lives there for less than a year.
On 26 February 1815 he escapes with about a thousand soldiers and lands on 1 March at Golfe-Juan, near Cannes. He heads north to Paris through the Alps, along a route known today as the "Route Napoléon".
The troops sent to stop him join him one after another. King Louis XVIII has to flee. This is the beginning of the period later called the "Hundred Days".`]},
chappe:{t:['Le télégraphe Chappe','The Chappe telegraph'],d:['Inventé en 1794','Invented in 1794'],x:[`Inventé par Claude Chappe sous la Révolution, c'est un télégraphe optique : une chaîne de tours, posées sur des hauteurs, chacune équipée de grands bras articulés en bois. Un opérateur observe la tour précédente à la longue-vue et reproduit les signaux.
Un message pouvait ainsi traverser la France en quelques heures, au lieu de plusieurs jours à cheval. C'est par ce réseau que le gouvernement de Louis XVIII apprit, au début de mars 1815, le débarquement de Napoléon.`,`Invented by Claude Chappe during the Revolution, it is an optical telegraph: a chain of towers on high ground, each fitted with large articulated wooden arms. An operator watches the previous tower through a telescope and repeats its signals.
A message could cross France in a few hours instead of several days on horseback. It was through this network that Louis XVIII's government learned, in early March 1815, of Napoleon's landing.`]},
ney:{t:['Le maréchal Ney','Marshal Ney'],d:['Mars 1815','March 1815'],x:[`Michel Ney est l'un des plus célèbres maréchaux de Napoléon, surnommé « le brave des braves ». En 1814, il se rallie à Louis XVIII.
Quand Napoléon débarque en 1815, le roi l'envoie l'arrêter. Ney aurait promis de ramener l'Empereur « dans une cage de fer ». Mais le 14 mars, à Lons-le-Saunier, il lit une proclamation à ses troupes et passe du côté de Napoléon.
Après Waterloo, la monarchie revenue le fait juger pour trahison. Il est fusillé à Paris le 7 décembre 1815.`,`Michel Ney is one of Napoleon's most famous marshals, nicknamed "the bravest of the brave". In 1814 he rallies to Louis XVIII.
When Napoleon lands in 1815, the King sends him to arrest him. Ney is said to have promised to bring the Emperor back "in an iron cage". But on 14 March, at Lons-le-Saunier, he reads a proclamation to his troops and goes over to Napoleon.
After Waterloo, the restored monarchy tries him for treason. He is shot in Paris on 7 December 1815.`]},
fuiteroi:{t:['La fuite de Louis XVIII','Louis XVIII\'s flight'],d:['Nuit du 19 au 20 mars 1815','Night of 19–20 March 1815'],x:[`Alors que Napoléon approche de Paris sans avoir livré un seul combat, le roi Louis XVIII quitte le palais des Tuileries dans la nuit du 19 au 20 mars 1815, avec sa cour.
Il se réfugie à Gand, aux Pays-Bas (aujourd'hui en Belgique), où il attendra la suite des événements. Plusieurs ambassades étrangères quittent Paris en même temps.
Le lendemain soir, Napoléon entre aux Tuileries.`,`As Napoleon approaches Paris without having fought a single battle, King Louis XVIII leaves the Tuileries palace with his court on the night of 19–20 March 1815.
He takes refuge in Ghent, in the Netherlands (now Belgium), where he waits to see what happens. Several foreign embassies leave Paris at the same time.
The following evening, Napoleon enters the Tuileries.`]},
centjours:{t:['Les Cent-Jours','The Hundred Days'],d:['Mars – juillet 1815','March – July 1815'],x:[`On appelle « Cent-Jours » la période où Napoléon reprend le pouvoir en France, entre son retour à Paris le 20 mars 1815 et le retour du roi Louis XVIII en juillet.
L'Empereur est accueilli aux Tuileries par une foule enthousiaste. Mais les grandes puissances européennes, réunies au Congrès de Vienne, refusent de le reconnaître. Le Royaume-Uni, la Prusse, la Russie et l'Autriche forment une nouvelle coalition et mobilisent leurs armées.
La guerre reprend en juin, en Belgique. Elle s'achève à Waterloo.`,`The "Hundred Days" is the period when Napoleon takes power again in France, between his return to Paris on 20 March 1815 and King Louis XVIII's return in July.
The Emperor is welcomed at the Tuileries by an enthusiastic crowd. But the great European powers, meeting at the Congress of Vienna, refuse to recognise him. The United Kingdom, Prussia, Russia and Austria form a new coalition and mobilise their armies.
War resumes in June, in Belgium. It ends at Waterloo.`]},
decret1811:{t:['Le décret sur les enfants trouvés','The decree on foundlings'],d:['19 janvier 1811','19 January 1811'],x:[`Sous l'Empire, des milliers d'enfants sont abandonnés chaque année. Un décret de Napoléon du 19 janvier 1811 organise leur prise en charge : il distingue les enfants trouvés, les enfants abandonnés et les orphelins pauvres, et prévoit dans chaque arrondissement un hospice pour les accueillir, avec un « tour » où l'on pouvait déposer un bébé anonymement.
Le texte prévoit aussi que ces enfants, une fois grands, sont à la disposition de l'État. Selon le décret, les garçons pouvaient, à partir de douze ans, être mis à la disposition de la Marine. Dans l'histoire, l'administration abuse de ce texte en déclarant Jules plus âgé qu'il ne l'est.`,`Under the Empire, thousands of children are abandoned every year. A decree by Napoleon on 19 January 1811 organises their care: it distinguishes foundlings, abandoned children and poor orphans, and provides a hospice in each district to take them in, with a "turning box" where a baby could be left anonymously.
The text also states that these children, once older, are at the State's disposal. Under the decree, boys from the age of twelve could be placed at the Navy's disposal. In the story, the administration abuses the text by declaring Jules older than he is.`]},
fouche:{t:['Joseph Fouché','Joseph Fouché'],d:['Ministre de la Police','Minister of Police'],x:[`Joseph Fouché est l'un des hommes les plus redoutés de son époque. Ministre de la Police sous Napoléon, il dirige un vaste réseau d'agents et d'informateurs.
Il est réputé pour sa capacité à survivre à tous les régimes : il retrouve son ministère pendant les Cent-Jours, puis, après Waterloo, il dirige le gouvernement provisoire et sert brièvement Louis XVIII. Il est finalement exilé en 1816.
Dans l'histoire, le commissaire Dufresne est un personnage inventé, mais il ressemble beaucoup aux hommes de Fouché : prudents, discrets, fidèles à « la police » plus qu'à un régime.`,`Joseph Fouché is one of the most feared men of his time. As Napoleon's Minister of Police, he runs a vast network of agents and informers.
He is famous for surviving every regime: he gets his ministry back during the Hundred Days, then, after Waterloo, heads the provisional government and briefly serves Louis XVIII. He is finally exiled in 1816.
In the story, Commissaire Dufresne is an invented character, but he closely resembles Fouché's men: careful, discreet, loyal to "the police" rather than to any regime.`]},
vincennes:{t:['Le donjon de Vincennes','The keep at Vincennes'],d:['Prison d\'État','State prison'],x:[`Construit au XIVe siècle, à l'est de Paris, le donjon du château de Vincennes est l'un des plus hauts d'Europe, avec environ cinquante mètres. Pendant des siècles, les rois y enferment des prisonniers d'État : des princes, des ministres, des écrivains.
Sous Napoléon, il sert encore de prison politique. C'est aussi dans les fossés du château que le duc d'Enghien, un prince de la famille royale, fut fusillé en 1804.`,`Built in the 14th century east of Paris, the keep of the Château de Vincennes is one of the tallest in Europe, at about fifty metres. For centuries, kings imprisoned state prisoners there: princes, ministers, writers.
Under Napoleon it still serves as a political prison. It was also in the castle moat that the Duke of Enghien, a prince of the royal family, was shot in 1804.`]},
verdun:{t:['Les Anglais détenus à Verdun','The British detained at Verdun'],d:['1803 – 1814','1803 – 1814'],x:[`Quand la guerre reprend entre la France et le Royaume-Uni en 1803, Napoléon fait arrêter les civils britanniques présents en France. Des milliers d'hommes sont regroupés à Verdun, dans l'est de la France, où certains restent plus de dix ans, jusqu'à la paix de 1814.
Les plus riches y vivaient presque librement, sur parole, avec des bals et des courses de chevaux. D'autres étaient enfermés dans la citadelle. Dans l'histoire, être envoyé à Verdun sous un faux nom revient à disparaître.`,`When war resumes between France and the United Kingdom in 1803, Napoleon has British civilians in France arrested. Thousands of men are gathered at Verdun, in eastern France, where some remain more than ten years, until the peace of 1814.
The wealthiest lived there almost freely, on parole, with balls and horse races. Others were locked in the citadel. In the story, being sent to Verdun under a false name amounts to disappearing.`]},
pozzo:{t:['Pozzo di Borgo','Pozzo di Borgo'],d:['Diplomate au service de la Russie','Diplomat in Russia\'s service'],x:[`Charles-André Pozzo di Borgo est né en Corse, comme Napoléon, dont il devient l'un des ennemis les plus acharnés. Il entre au service de la Russie et devient un proche conseiller du tsar Alexandre Ier.
En 1815, il est le représentant du tsar auprès du duc de Wellington, et il est présent à Waterloo, où il est légèrement blessé. Il sera ensuite ambassadeur de Russie à Paris pendant de longues années.`,`Charles-André Pozzo di Borgo is born in Corsica, like Napoleon, and becomes one of his fiercest enemies. He enters Russian service and becomes a close adviser to Tsar Alexander I.
In 1815 he is the Tsar's representative with the Duke of Wellington, and he is present at Waterloo, where he is slightly wounded. He then serves for many years as Russian ambassador in Paris.`]},
wellington:{t:['Le duc de Wellington','The Duke of Wellington'],d:['Commandant de l\'armée alliée','Commander of the allied army'],x:[`Arthur Wellesley, duc de Wellington, est le général britannique le plus célèbre de son temps. Il s'est illustré contre les armées françaises en Espagne et au Portugal.
En 1815, il commande à Bruxelles une armée alliée composée de Britanniques, de Néerlandais, de Belges et d'Allemands. Avec les Prussiens du maréchal Blücher, il bat Napoléon à Waterloo. On le surnommait « le duc de fer ». Il deviendra plus tard Premier ministre du Royaume-Uni.`,`Arthur Wellesley, Duke of Wellington, is the most famous British general of his time. He made his name against the French armies in Spain and Portugal.
In 1815, in Brussels, he commands an allied army of British, Dutch, Belgian and German troops. Together with Marshal Blücher's Prussians, he defeats Napoleon at Waterloo. He was nicknamed "the Iron Duke". He later becomes Prime Minister of the United Kingdom.`]},
richmond:{t:['Le bal de la duchesse de Richmond','The Duchess of Richmond\'s ball'],d:['15 juin 1815, Bruxelles','15 June 1815, Brussels'],x:[`La duchesse de Richmond, épouse d'un général britannique, donne un grand bal à Bruxelles le soir du 15 juin 1815, dans la remise d'un carrossier attenante à la maison que sa famille loue rue de la Blanchisserie. Le duc de Wellington et la plupart de ses officiers y assistent.
Pendant la soirée, on apprend que Napoléon a franchi la frontière et avance beaucoup plus vite que prévu. Wellington donne ses ordres pendant le bal. Beaucoup d'officiers partent rejoindre leurs régiments au milieu de la nuit, certains sans avoir le temps de changer de tenue.
Le lendemain, plusieurs invités se battent à Quatre-Bras, et certains y meurent. C'est l'une des soirées les plus célèbres de l'histoire.`,`The Duchess of Richmond, wife of a British general, gives a great ball in Brussels on the evening of 15 June 1815, in a coach-builder's depot next to the house her family rents on the Rue de la Blanchisserie. The Duke of Wellington and most of his officers attend.
During the evening, news arrives that Napoleon has crossed the border and is advancing much faster than expected. Wellington gives his orders during the ball. Many officers leave in the middle of the night to join their regiments, some without time to change their clothes.
The next day, several guests fight at Quatre-Bras, and some die there. It is one of the most famous evenings in history.`]},
quatrebras:{t:['Quatre-Bras et Ligny','Quatre-Bras and Ligny'],d:['16 juin 1815','16 June 1815'],x:[`Deux jours avant Waterloo, Napoléon essaie de séparer les deux armées alliées pour les battre l'une après l'autre.
Le 16 juin 1815, il bat les Prussiens du maréchal Blücher à Ligny. Le même jour, au carrefour de Quatre-Bras, le maréchal Ney attaque les troupes de Wellington, sans parvenir à les déloger.
Le 17, Wellington se replie vers le nord, sous un violent orage, jusqu'au plateau de Mont-Saint-Jean, près du village de Waterloo.`,`Two days before Waterloo, Napoleon tries to split the two allied armies and beat them one after the other.
On 16 June 1815 he defeats Marshal Blücher's Prussians at Ligny. The same day, at the Quatre-Bras crossroads, Marshal Ney attacks Wellington's troops without managing to dislodge them.
On the 17th, Wellington withdraws north, in a violent storm, to the ridge of Mont-Saint-Jean, near the village of Waterloo.`]},
waterloo:{t:['La bataille de Waterloo','The Battle of Waterloo'],d:['18 juin 1815','18 June 1815'],x:[`Le dimanche 18 juin 1815, au sud de Bruxelles, l'armée de Napoléon affronte l'armée alliée du duc de Wellington, installée sur le plateau de Mont-Saint-Jean.
La bataille commence vers midi, sur un sol détrempé par l'orage de la veille. Les Français lancent assaut sur assaut, dont de grandes charges de cavalerie. Dans l'après-midi, les Prussiens du maréchal Blücher arrivent sur le flanc français. Le soir, l'armée de Napoléon est en déroute.
Les pertes sont immenses : des dizaines de milliers de morts et de blessés en une seule journée. Quatre jours plus tard, Napoléon abdique.`,`On Sunday 18 June 1815, south of Brussels, Napoleon's army faces the Duke of Wellington's allied army, positioned on the ridge of Mont-Saint-Jean.
The battle begins around noon, on ground soaked by the previous night's storm. The French launch attack after attack, including great cavalry charges. In the afternoon, Marshal Blücher's Prussians arrive on the French flank. By evening, Napoleon's army is in rout.
The losses are immense: tens of thousands killed and wounded in a single day. Four days later, Napoleon abdicates.`]},
abdication:{t:['La seconde abdication','The second abdication'],d:['22 juin 1815','22 June 1815'],x:[`Rentré à Paris après la défaite de Waterloo, Napoléon abdique pour la deuxième fois le 22 juin 1815.
Il espère partir pour l'Amérique, mais se rend aux Britanniques en juillet. Ils l'exilent sur l'île de Sainte-Hélène, au milieu de l'Atlantique sud, où il meurt en 1821.`,`Back in Paris after the defeat at Waterloo, Napoleon abdicates for the second time on 22 June 1815.
He hopes to leave for America, but surrenders to the British in July. They exile him to the island of Saint Helena, in the middle of the South Atlantic, where he dies in 1821.`]},
retourroi:{t:['Le retour de Louis XVIII','Louis XVIII\'s return'],d:['Juillet 1815','July 1815'],x:[`Après Waterloo, les armées alliées marchent sur Paris et y entrent au début de juillet 1815. Le 8 juillet, Louis XVIII fait son retour dans la capitale et retrouve son trône : c'est la Seconde Restauration.
La paix signée à la fin de l'année est beaucoup plus dure pour la France que celle de 1814 : la France perd des territoires et doit accueillir des troupes d'occupation pendant plusieurs années.`,`After Waterloo, the allied armies march on Paris and enter it in early July 1815. On 8 July, Louis XVIII returns to the capital and regains his throne: this is the Second Restoration.
The peace signed at the end of the year is much harsher for France than that of 1814: France loses territory and must host occupying troops for several years.`]},
vienne:{t:['Le Congrès de Vienne','The Congress of Vienna'],d:['1814 – 1815','1814 – 1815'],x:[`Après la première chute de Napoléon, les grandes puissances européennes se réunissent à Vienne, en Autriche, pour redessiner la carte de l'Europe. Le congrès s'ouvre à l'automne 1814.
Il est célèbre pour ses négociations interminables, mais aussi pour ses fêtes et ses bals : on disait que « le congrès danse, mais ne marche pas ». L'acte final est signé le 9 juin 1815, quelques jours avant Waterloo. Il fixe l'équilibre de l'Europe pour des décennies.`,`After Napoleon's first fall, the great European powers meet in Vienna, Austria, to redraw the map of Europe. The congress opens in autumn 1814.
It is famous for its endless negotiations, but also for its parties and balls: people said "the congress dances, but does not move forward". The final act is signed on 9 June 1815, a few days before Waterloo. It sets the balance of Europe for decades.`]},
};

const CGS=new Set(/*CGLIST*/[]);
const CGSC=[{id:'firstkiss',t:['Le premier baiser à l\'opéra','The First Kiss at the Opera'],rt:1},{id:'jardin',t:['Le baiser des roses','The Kiss Among the Roses']},{id:'pembroke',t:['✨ Minuit dans la serre','✨ Midnight in the Conservatory'],sec:1},{id:'ascot',t:['✨ Au galop','✨ At a Gallop'],sec:1},{id:'vauxhall',t:['✨ Le phénix','✨ The Phoenix'],sec:1},{id:'chevet',t:['À ton chevet','At Your Bedside'],s2:1},{id:'wedding',t:['Le mariage','The Wedding'],s2:1},{id:'soupirs',t:['Le pont des Soupirs','The Bridge of Sighs'],s2:1},{id:'montmartre',t:['Montmartre','Montmartre'],s2:1},{id:'famille',t:['La famille','The Family'],s2:1},{id:'bruxelles',t:['Le bal de Richmond','The Richmond Ball'],s2:1},{id:'retrouvailles',t:['Les retrouvailles','Reunited'],s2:1},{id:'famille4',t:['Tout le monde est là','Everybody\'s Here'],s2:1}];
function cgName(id){const sc=CGSC.find(x=>x.id==id),pr=preOf(S.p),mk=pr?pr.src.slice(7,-5):'x',li=sc.rt?(S.f.p1?'li1':'li2'):RID(sc.s2?'fi':'lv'),lk=li=='li1'?(S.p.attr=='m'?'edmund':'rosalind'):(S.p.attr=='m'?'mateo':'nell');const full=`${id}_${mk}_${lk}`;return CGS.has(full)?full:`${id}_${lk}`}
function showCG(nm){mode='cg';$('box').className='hide';$('cgImg').src='assets/cg/'+nm+'.webp';$('cgP').textContent=tr(CGSC.find(x=>nm.startsWith(x.id+'_')).sec?'cgSec':'cgNew');$('cgv').classList.add('on');sfx('click')}
function endCG(){$('cgv').classList.remove('on');mode=null;run()}
function galModal(){const got=store.get(GK())||[],LS=CGL();
 modal(`<h3>${tr('gal')}</h3><p style="text-align:center;margin:0 0 10px;opacity:.8">${got.length} ${tr('galN')}</p>`+(LS.length?'':`<p style="text-align:center;opacity:.7">${L2(['Les illustrations de cette histoire arrivent bientôt…','Illustrations for this story are coming soon…'])}</p>`)+LS.map(sc=>{const mine=got.filter(n=>n.startsWith(sc.id+'_'));return `<span class="lab">${L2(sc.t)}</span><div class="galrow">${mine.length?mine.map(n=>`<img class="galth" data-g="${n}" src="assets/cg/${n}.webp" alt="">`).join(''):'<div class="gallock">🔒 ???</div>'}</div>`}).join('')+`<div class="stack"><button class="btn" id="gClose">${tr('close')}</button></div>`,'gal');
 $('gClose').onclick=closeModal;document.querySelectorAll('.galth').forEach(im=>im.onclick=()=>{modal(`<img src="assets/cg/${im.dataset.g}.webp" style="width:100%;border-radius:14px"><div class="stack"><button class="btn" id="gBack">${tr('back')}</button></div>`,'gal');$('gBack').onclick=galModal})}
$('cgv').addEventListener('click',endCG);
const STORIES=[{id:'valcourt',title:['Le Secret de Valcourt','The Valcourt Secret'],tags:['Romance · Régence · Londres 1813','Romance · Regency · London 1813'],desc:['Une famille noble ruinée, un secret de naissance, une Saison à Londres… et deux cœurs à conquérir.','A ruined noble family, a secret birth, a London Season… and two hearts to win.'],status:['Complète · 4 saisons','Complete · 4 seasons'],bg:'ballnight',cov:['f1','edmund']},{id:'pirate',title:['La Fiancée du Corsaire','The Corsair\'s Bride'],tags:['Romance · Aventure · Caraïbes 1718','Romance · Adventure · Caribbean 1718'],desc:['Fille du gouverneur de la Jamaïque, promise à un aristocrate venu de Londres… jusqu\'à la nuit où les pirates attaquent Port-Royal.','The Governor of Jamaica\'s daughter, promised to an aristocrat from London… until the night pirates raid Port Royal.'],status:['Saison 1 · en cours','Season 1 · in progress'],bg:'ship',cov:['pmc1_pirate','gabriel']}];
function renderLib(){$('lTitle').textContent=tr('lib');$('lSec').textContent=tr('libSec');
 $('lGrid').innerHTML=STORIES.map(st=>`<button class="scard" data-s="${st.id}"><div class="cov"><div class="bgs">${ART.bg(st.bg)}</div>${st.cov[1]&&PICS[st.cov[1]]?`<img src="${PICS[st.cov[1]].src}" style="right:-6%">`:''}<img src="${st.id=='pirate'?PREP[0].pirate.src:(PRE.f[0]||{}).src}" style="left:-4%"><div class="fade"></div></div><div class="info"><div class="tags">${L2(st.tags)}</div><h3 class="serif">${L2(st.title)}</h3><p>${L2(st.desc)}</p><span class="pill">${tr('play')} · ${L2(st.status)}</span></div></button>`).join('')
 +`<div class="scard soon"><div class="cov">💌</div><div style="padding:14px 18px 18px"><div class="tags">${tr('soonP')}</div><h3 class="serif" style="font-size:22px">${tr('soonT')}</h3><p>${tr('soonD')}</p></div></div>`}
$('lGrid').addEventListener('click',e=>{const b=e.target.closest('[data-s]');if(!b)return;CUR=b.dataset.s;sfx('click');show('menu');renderMenu()});
$('lOpt').onclick=()=>{sfx('click');optsModal()};
$('mBack').onclick=()=>{sfx('click');show('lib');renderLib()};
$('mList').addEventListener('click',e=>{const a=e.target.closest('button')?.dataset.a;if(!a)return;sfx('click');
 if(a=='cont'){loadState(saves().auto)}
 if(a=='new'){if(saves().auto)confirmBox(tr('confirmNew'),()=>{const sv=saves();delete sv.auto;store.set(SK(),sv);startCreate()});else startCreate()}
 if(a=='gal')galModal();if(a=='chaps')chapsModal();if(a=='saves')savesModal(false);if(a=='opts')optsModal()});

/* ---------- modal helpers ---------- */
function modal(html,cls=''){$('sheet').className='sheet '+cls;$('sheet').innerHTML=html;$('modal').classList.add('on')}
function closeModal(){$('modal').classList.remove('on')}
$('modal').addEventListener('click',e=>{if(e.target.id=='modal'&&!$('sheet').classList.contains('end'))closeModal()});
function confirmBox(msg,ok){modal(`<h3>${tr('newg')}</h3><p style="text-align:center">${esc(msg)}</p><div class="stack"><button class="btn pri" id="mOk">${tr('yes')}</button><button class="btn" id="mNo">${tr('no')}</button></div>`);$('mOk').onclick=()=>{closeModal();ok()};$('mNo').onclick=closeModal}
let CUR='valcourt';const SK=()=>'ssl_saves'+(CUR=='valcourt'?'':'_'+CUR);const saves=()=>store.get(SK())||{};const CK=()=>'tlc_ch'+(CUR=='valcourt'?'':'_'+CUR);const GK=()=>'tlc_cg'+(CUR=='valcourt'?'':'_'+CUR);const CGL=()=>CUR=='valcourt'?CGSC:[];
const SB=()=>(S&&S.sid=='pirate')||(!S&&CUR=='pirate')?100:0,STOT=()=>((S&&S.sid)||CUR)=='pirate'?22:88;
function savesModal(canSave){const sv=saves();const keys=canSave?['s1','s2','s3']:['auto','s1','s2','s3'];
 const row=k=>{const s=sv[k];const nm=k=='auto'?tr('auto'):`${tr('slot')} ${k.slice(1)}`;
  return `<div class="slot"><div><b>${nm}</b><span>${s?esc(s.p.first+' '+s.p.last)+' · '+esc(L2(s.where)||'')+'<br>'+new Date(s.ts).toLocaleString(OPT.lang):tr('empty')}</span></div><div class="acts">${canSave?`<button data-s="${k}">${tr('save')}</button>`:''}${s?`<button class="${canSave?'alt':''}" data-l="${k}">${tr('load')}</button>`:''}</div></div>`};
 modal(`<h3>${tr('saves')}</h3><div class="stack">${keys.map(row).join('')}<button class="btn" id="mClose">${tr('close')}</button></div>`);
 $('mClose').onclick=closeModal;
 $('sheet').querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const v=saves();v[b.dataset.s]=snap();store.set(SK(),v);toast(tr('saved'));savesModal(true)});
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
function relang(){document.documentElement.lang=OPT.lang;renderMenu();renderLib();if(screen=='create')renderCreate();if(screen=='game'&&S){$('where').textContent=L2(S.where);if(mode=='line'){showLine(STORY[S.i]);finishType()}else if(mode=='choice')showChoice(STORY[S.i].ch)}}

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
const steps=()=>LOOKS(P).length?['id','look','sum']:['id','app','out','sum'];
function renderCreate(){const t=tr,SL=steps(),sid=SL[cstep];$('cTitle').textContent=t('stepT')[sid];$('cDots').innerHTML=SL.map((x,i)=>`<i class="${i<=cstep?'on':''}"></i>`).join('');
 $('cBack').textContent=t('back');$('cNext').textContent=sid=='sum'?t('start'):t('next');
 let h='';const pr=preOf(P);
 if(sid=='id')h=`<div class="fld"><label for="fFirst">${t('first')}</label><input id="fFirst" maxlength="16" autocomplete="off" value="${esc(P.first)}"></div><div class="fld"><label for="fLast">${t('last')}</label><input id="fLast" maxlength="18" autocomplete="off" value="${esc(P.last)}"></div>
  ${CUR=='pirate'?'':`<div class="fld"><span class="lab">${t('pron')}</span>${seg('pron',['f','m','n'],[t('prons')[1],t('prons')[0],t('prons')[2]])}</div>
  <div class="fld"><span class="lab">${t('pres')}</span>${seg('body',['f','m'],[t('fem'),t('masc')])}</div>`}
  <div class="fld"><span class="lab">${t('attr')}</span>${seg('attr',['m','f'],[t('men'),t('women')])}</div>
  <div class="note">${t('final')}</div><div class="err">${cerr}</div>`;
 if(sid=='look')h=`<div class="looks">${LOOKS(P).map((x,i)=>`<button data-look="${i}" class="${P.look==i?'on':''}" aria-label="${i+1}"><img src="${x.src}" alt=""></button>`).join('')}</div>`;
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
const STARTS={valcourt:0};STORY.forEach((n,i)=>{if(n.storyStart)STARTS[n.storyStart]=i+1});
const LBL={};STORY.forEach((n,i)=>{if(n.lb)LBL[n.lb]=i});
function newState(p){if(CUR=='pirate'){p.pron='f';p.body='f'}return {p,sid:CUR,i:STARTS[CUR]||0,v:{li1:0,li2:0,rep:0,bess:0},f:{},bg:null,mus:null,st:[],ex:{},masked:false,where:null,maj:[],ts:Date.now()}}
const snap=()=>Object.assign(JSON.parse(JSON.stringify(S)),{ts:Date.now()});
function autosave(){const v=saves();v.auto=snap();store.set(SK(),v)}
let mode=null,curBg=null,front='A';
function loadState(s){if(!s)return;S=JSON.parse(JSON.stringify(s));CUR=S.sid||'valcourt';S.sid=CUR;startGame()}
function startGame(){closeModal();show('game');curBg=null;$('stage').innerHTML='';$('choices').className='';$('box').className='hide';
 ['card','item'].forEach(x=>$(x).classList.remove('on'));if(S.bg)setBg(S.bg,1);if(S.mus)setMusic(S.mus);$('where').textContent=L2(S.where);run()}
function setBg(name,instant){if(curBg===name)return;curBg=name;const a=$('bgA'),b=$('bgB'),[on,off]=front=='A'?[b,a]:[a,b];on.innerHTML=ART.bg(name);
 if(instant){on.style.transition=off.style.transition='none'}on.style.opacity=1;off.style.opacity=0;front=front=='A'?'B':'A';
 if(instant)requestAnimationFrame(()=>requestAnimationFrame(()=>{on.style.transition=off.style.transition=''}))}

const CHS={},CHL=[];(()=>{const ends=[];STORY.forEach((n,i)=>{if(n.end)ends.push([i,n.end])});ends.forEach(([i,n])=>{let st=n==1?0:(ends.find(e=>e[1]==n-1)||[-1])[0]+1;if(st<=0&&n>100)st=STORY.findIndex(x=>x.chap==n);if(st<0)return;CHS[st]=n;let t=null;for(let j=st;j<i;j++){if(STORY[j].card){t=STORY[j].sub;break}}CHL.push({n,st,t})})})();
function chapSnap(){if(CHS[S.i]==null||S._at===S.i)return;S._at=S.i;const c=JSON.parse(JSON.stringify(S));delete c.cs;S.cs=c;const m=store.get(CK())||{};m[CHS[S.i]]=c;store.set(CK(),m)}
function playFrom(c){const k=JSON.parse(JSON.stringify(c));delete k.cs;S=JSON.parse(JSON.stringify(k));S.cs=k;S.ts=Date.now();startGame()}
function chapLbl(n){n=n>100?n-100:n;const se=Math.ceil(n/22),c=n-(se-1)*22;return L2(['Chapitre '+c,'Chapter '+c])}
function chapsModal(){const m=store.get(CK())||{},au=saves().auto;let h=`<h3>${L2(['Chapitres','Chapters'])}</h3><p style="text-align:center;margin:0 0 8px;font-size:14px;opacity:.8">${L2(['✓ = chapitre déjà atteint (avec tes choix). Les autres reprennent les choix de ta dernière partie.','✓ = chapter already reached (with your choices). Others reuse your latest game\'s choices.'])}</p><div style="max-height:60vh;overflow:auto">`;
 const B0=CUR=='pirate'?100:0;for(let se=1;se<=4;se++){const L=CHL.filter(x=>(B0?x.n>100:x.n<=100)&&Math.ceil((x.n-B0)/22)==se);if(!L.length)continue;h+=`<span class="lab" style="display:block;margin:12px 0 6px">${L2(['Saison ','Season '])+se}</span>`;
  L.forEach(x=>{const ok=m[x.n]||au;h+=`<button class="btn" data-ch="${x.n}" ${ok?'':'disabled'} style="display:block;width:100%;text-align:left;margin:4px 0;padding:10px 14px">${m[x.n]?'✓ ':''}${chapLbl(x.n)}${x.t?' · '+esc(L2(x.t)):''}</button>`})}
 h+=`</div><div class="stack"><button class="btn" id="chX">${tr('close')}</button></div>`;modal(h);$('chX').onclick=closeModal;
 $('sheet').querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{const n=+b.dataset.ch,x=CHL.find(y=>y.n==n);let c=m[n];if(!c){c=JSON.parse(JSON.stringify(au));c.i=x.st;c._at=x.st;c.st=[];c.ex={};if(!c.p.kid)c.p.kid=OPT.lang=='en'?'Lou':'Lou'}sfx('click');playFrom(c)})}
function run(){for(let g=0;g<400;g++){chapSnap();const n=STORY[S.i];if(!n)return;
 if(n.storyStart){if(n.storyStart===S.sid){S.i++;continue}return}
 if(n.bg){if(n.chap){S.chap=n.chap}if(S.bg!==n.bg)S.ex={};S.bg=n.bg;setBg(n.bg);if(n.mus){S.mus=n.mus;setMusic(n.mus)}if('mask' in n)S.masked=!!n.mask;if(n.where){S.where=n.where;$('where').textContent=L2(n.where)}
  if(n.card){mode='card';$('box').classList.add('hide');renderStage([],null);$('cardT').textContent=L2(n.card);$('cardS').textContent=L2(n.sub);$('card').classList.add('on');autosave();clearTimeout(cardT);cardT=setTimeout(endCard,2800);return}S.i++;continue}
 if(n.chk){if((S.v[n.chk[0]]||0)>=n.chk[1])S.f[n.chk[2]]=1;S.i++;continue}
 if(n.top){S.f.topLi1=S.v.li1>=S.v.li2?1:0;S.i++;continue}
 if(n.st){S.st=n.st.map(RID);S.i++;continue}
 if(typeof n.set=='string'&&!n.sp&&!n.ch){S.f[n.set]=1;S.i++;continue}
 if('mask' in n){S.masked=!!n.mask;S.i++;continue}
 if(n.lb){S.i++;continue}
 if(n.if){const fv=n.if=='mcF'?S.p.pron=='f':n.if=='mcN'?S.p.pron=='n':n.if=='fiF'?S.p.attr=='f':S.f[n.if];S.i=fv?LBL[n.go]:S.i+1;continue}
 if(n.go){S.i=LBL[n.go];continue}
 if(n.fx){applyFx(n.fx);S.i++;continue}
 if(n.sp){mode='line';showLine(n);autosave();return}
 if(n.ch){mode='choice';showChoice(n.ch);autosave();return}
 if(n.cg){S.i++;const nm=cgName(n.cg);if(CGS.has(nm)){const g=store.get(GK())||[];if(!g.includes(nm)){g.push(nm);store.set(GK(),g)}showCG(nm);return}continue}
 if(n.ask){mode='ask';showAsk(n);autosave();return}
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
  const d=charDef(id);if(!d){c.innerHTML='';c.dataset.key='';c.classList.toggle('on',id===speaker);return}const ex=S.ex[id]||'n',key=(d.img?d.img.src:'')+id+ex+(d.acc.mask||'')+(id=='mc'?JSON.stringify(S.p):'')+S.p.attr+S.p.body;
  if(c.dataset.key!==key){if(d.img){c.classList.add('pic');c.style.setProperty('--ar',d.img.w+'/'+d.img.h);c.style.setProperty('--ax',(d.img.eye[0]/d.img.w*100)+'%');c.style.height=(72/(d.img.waist||.4))+'%';c.style.top=(d.img.top||3)+'%';c.innerHTML=picHTML(d.img,d.acc.mask)}else{c.classList.remove('pic');c.style.height='';c.style.top='';if(!svgCache.has(key))svgCache.set(key,ART.draw(d.p,ex,d.acc));c.innerHTML=svgCache.get(key)}c.dataset.key=key}
  c.style.left=st.length==1?'50%':(k?'71%':'29%');c.classList.toggle('on',id===speaker)})}
let tmr=0,full='',typing=false;
function showLine(n){if(['lv','cx','ot','fi','rj'].includes(n.sp))n=Object.assign({},n,{sp:RID(n.sp)});$('choices').className='';$('veil').classList.remove('on');
 let st=S.st.slice();if(n.sp!='n'&&!st.includes(n.sp)&&charDef(n.sp))st=(S.chap>=45&&st.includes('mc'))?[n.sp,'mc']:[n.sp];if(n.ex)S.ex[n.sp]=n.ex;renderStage(st,n.sp=='n'?null:n.sp);
 const txt=fmt(L2([n.fr,n.en])),b=$('box');b.className=n.sp=='n'?'narr':(txt.startsWith('(')?'th':'');
 const tg=$('tag');tg.textContent=n.sp=='n'?'':nameOf(n.sp);tg.style.background=TAGC[n.sp]||'';type(txt)}
let fullH='';
function plainH(s){return s.replace(/\u0001[^\u0002]*\u0002/g,'').replace(/\u0003/g,'')}
function htmlH(s){return s.split(/(\u0001[^\u0002]*\u0002[^\u0003]*\u0003)/).map(p=>{const m=p.match(/^\u0001([^\u0002]*)\u0002([^\u0003]*)\u0003$/);return m?`<span class="hist" data-h="${m[1]}">${esc(m[2])}</span>`:esc(p)}).join('')}
function type(s){clearInterval(tmr);fullH=s;full=plainH(s);let i=0;typing=true;$('box').classList.remove('done');$('txt').textContent='';const sp=[42,22,7][OPT.speed];
 tmr=setInterval(()=>{i+=OPT.speed==2?3:1;$('txt').textContent=full.slice(0,i);if(i>=full.length)finishType()},sp)}
function finishType(){clearInterval(tmr);if(fullH.includes('\u0001'))$('txt').innerHTML=htmlH(fullH);else $('txt').textContent=full;typing=false;$('box').classList.add('done')}
document.addEventListener('click',e=>{const h=e.target.closest&&e.target.closest('.hist');if(!h)return;e.stopPropagation();e.preventDefault();showHist(h.dataset.h)},true);
(()=>{const st=document.createElement('style');st.textContent='.hist{color:#8a3a6a;font-weight:700;text-decoration:underline dotted;text-underline-offset:3px;cursor:pointer}.hist:after{content:" ⓘ";font-size:.8em}.histcard h3{margin-bottom:2px}.histcard .hd{text-align:center;font-style:italic;opacity:.75;margin:0 0 10px}.histcard p{line-height:1.5;margin:0 0 10px}';document.head.appendChild(st)})();
function showHist(k){const h=HIST[k];if(!h)return;sfx('click');const wasMode=mode;modal(`<div class="histcard"><h3>${esc(L2(h.t))}</h3><p class="hd">${esc(L2(h.d))}</p>${L2(h.x).split('\n').map(p=>`<p>${esc(p)}</p>`).join('')}</div><div class="stack"><button class="btn pri" id="hX">${OPT.lang=='en'?'Back to the story':'Retour à l\'histoire'}</button></div>`);$('hX').onclick=()=>{closeModal();mode=wasMode}}
function advance(){if(mode!='line')return;if(typing){finishType();return}sfx('click');S.i++;run()}
$('game').addEventListener('click',e=>{if(e.target.closest('#choices,#top,#card,#item,#cgv'))return;advance()});
document.addEventListener('keydown',e=>{if(screen!='game'||$('modal').classList.contains('on'))return;if(e.key==' '||e.key=='Enter'){e.preventDefault();if(mode=='card')endCard();else if(mode=='item')endItem();else advance()}});
function showAsk(n){$('box').className='hide';$('veil').classList.add('on');renderStage(S.st,null);
 const c=$('choices');c.className='on major';const sug=n.sug||[];
 c.innerHTML=`<div class="hd">${esc(L2(n.t))}</div><input id="askIn" maxlength="14" autocomplete="off" placeholder="${esc(L2(n.ph||['Prénom','Name']))}" style="min-height:54px;padding:12px 18px;border-radius:18px;border:2px solid var(--gold);font:700 18px inherit;color:var(--plum);text-align:center"><div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${sug.map(v=>`<button class="opt sug" data-v="${esc(v)}" style="min-height:40px;padding:6px 14px;font-size:15px">${esc(v)}</button>`).join('')}</div><button class="opt" id="askOk" style="text-align:center">${OPT.lang=='en'?'Confirm':'Valider'}</button>`;sfx('major')}
$('choices').addEventListener('click',e=>{if(mode!='ask')return;const sg=e.target.closest('.sug');if(sg){$('askIn').value=sg.dataset.v;return}
 if(!e.target.closest('#askOk'))return;const n=STORY[S.i];let v=($('askIn').value||'').trim().replace(/[<>{}|]/g,'');if(!v){$('askIn').focus();$('askIn').style.borderColor='#c0392b';return}v=v.charAt(0).toUpperCase()+v.slice(1);
 S.p.kid=v;mode=null;sfx('choice');$('choices').className='';$('choices').innerHTML='';$('veil').classList.remove('on');S.i++;run()});
function showChoice(ch){$('box').className='hide';$('veil').classList.add('on');
 let st=S.st.slice();if(!st.includes('mc'))st=st.length>1?[st[0],'mc']:[...st,'mc'];renderStage(st,'mc');
 const c=$('choices');c.className='on'+(ch.major?' major':'');
 c.innerHTML=`<div class="hd">${ch.major?tr('major'):tr('choose')}${ch.o.some(o=>o.gem)?` <span class="gemBal">💎 ${gD()}</span>`:''}</div>`+ch.o.map((o,k)=>`<button class="opt${o.gem?' prem':''}" data-k="${k}" style="animation-delay:${k*.07}s">${o.gem?`<span class="gemTag">💎 ${o.gem}</span>`:''}${esc(fmt(L2(o.t)))}</button>`).join('');
 if(ch.major)sfx('major')}
$('choices').addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b||mode!='choice')return;const ch=STORY[S.i].ch,o=ch.o[+b.dataset.k];
 if(o.gem){if(gems()<o.gem){toast(OPT.lang=='en'?'Not enough diamonds 💎':'Pas assez de diamants 💎');return}setGems(gems()-o.gem);if(!gInf())toast('−'+o.gem+' 💎')}
 mode=null;sfx('choice');$('choices').className='';$('veil').classList.remove('on');
 if(o.set)S.f[o.set]=1;applyFx(o.fx);if(ch.major){S.maj.push({c:S.chap||1,t:o.t});toast(tr('conseq'))}
 S.i=LBL[o.go];run()});

const AFF=(()=>{const L={},E=[];STORY.forEach((n,i)=>{if(n.lb)L[n.lb]=i;if(n.end)E.push([i,n.end])});const B=['lv','fi','cx'],R={E};
 for(const tg of ['li1','li2']){const g=fx=>{let s=0;for(const k in fx||{})if(k==tg||B.includes(k))s+=fx[k];return s};const best=new Array(STORY.length+1).fill(-1e9);best[0]=0;Object.values(STARTS).forEach(s=>{if(s>0)best[s]=0});const M={};
  const up=(j,v)=>{if(j!=null&&v>best[j])best[j]=v};
  for(let i=0;i<STORY.length;i++){const b=best[i];if(b<-1e8)continue;const n=STORY[i];
   if(n.ch){n.ch.o.forEach(o=>{if(!o.gem)up(L[o.go],b+g(o.fx));else up(L[o.go],-1e8)});continue}
   if(n.if){up(L[n.go],b);up(i+1,b);continue}
   if(n.go){up(L[n.go],b);continue}
   if(n.end)M[n.end]=Math.max(M[n.end]||0,b);
   if(STORY[i+1]&&STORY[i+1].storyStart)continue;
   up(i+1,b+(n.fx?g(n.fx):0))}
  R[tg]=M}
 return R})();
window.__aff=AFF;
function curChap(){const e=AFF.E.find(x=>x[0]>=S.i);return e?e[1]:88}
function pct(li,n){n=n||curChap();const M=AFF[li][n];if(!M||M<=0)return 0;const b=SB();return Math.max(0,Math.min(100,Math.round((S.v[li]||0)/M*(n-b)/STOT()*100)))}
function bar(p){return `<span style="display:inline-block;vertical-align:middle;width:110px;height:10px;border-radius:6px;background:rgba(160,82,120,.18);overflow:hidden;margin-right:8px"><b style="display:block;height:100%;width:${p}%;background:linear-gradient(90deg,#e9798f,#b0306a)"></b></span><span style="font-style:normal;font-weight:700">${p} %</span>`}
function applyFx(fx){fx=Object.fromEntries(Object.entries(fx).map(([k,v])=>[['lv','cx','ot','fi','rj'].includes(k)?RID(k):k,v]));for(const k in fx){S.v[k]=(S.v[k]||0)+fx[k];const v=fx[k];
 if(k=='li1')toast((v>0?tr('likes'):tr('dislikes')).replace('{n}',li1n())+' · '+pct('li1')+' %',v>0);
 if(k=='li2')toast((v>0?tr('likes'):tr('dislikes')).replace('{n}',li2n())+' · '+pct('li2')+' %',v>0);
 if(k=='rep')toast(v>0?tr('repUp'):tr('repDown'));
 if(k=='bess'&&v>0)toast(tr('bessUp'),1)}}
function toast(msg,heart){const d=document.createElement('div');d.textContent=msg;if(heart){d.className='heart';sfx('heart')}$('toast').appendChild(d);setTimeout(()=>d.remove(),2700)}
function showItem(){const p=S.p;$('box').className='hide';const pr=preOf(p);if(pr){const [cx,cy,d]=pr.eye,s=120/(2.2*d);$('locket').innerHTML=`<img src="${pr.src}" alt="" style="position:absolute;height:${pr.h*s}px;left:${103-cx*s}px;top:${125-cy*s}px">`}else $('locket').innerHTML=ART.draw({sex:'f',skin:p.skin,hair:'bun',hc:ART.HAIRC[p.hc],es:p.es,ec:ART.EYEC[p.ec],nose:p.nose,mouth:p.mouth,lip:ART.LIPC[p.lip],body:1,out:{fill:'#8c5a7a',sleeve:'#a87394',trim:'#e8cf8a',acc:'pendant'}},'n',{});$('itemP').textContent=tr('tapc');$('item').classList.add('on')}
function endItem(){if(mode!='item')return;$('item').classList.remove('on');S.i++;run()}
$('item').onclick=endItem;
function showEnd(num){num=num||1;$('box').className='hide';const sc=7/Math.max(7,num),h=v=>{const n=Math.max(0,Math.min(5,Math.round(v*sc)));return '♥'.repeat(n)+'♡'.repeat(5-n)};
 const hasNext=S.i+1<STORY.length&&!STORY[S.i+1].storyStart,majs=S.maj.filter(x=>Array.isArray(x)?num==1:x.c==num).map(x=>Array.isArray(x)?x:x.t);
 const K=num>100?num-100:num,cl=n=>{n=n>100?n-100:n;return n>66?n-66:n>44?n-44:n>22?n-22:n};
 modal(`<h3>${K==22?tr('s1end'):K==44?tr('s2end'):K==66?tr('s3end'):K==88?tr('s4end'):tr('endT').replace('{n}',cl(num))}</h3><p style="text-align:center;margin:0;font:italic 20px 'Cormorant Garamond',serif">${hasNext?'':tr(K==88?'s4sub':K==66?'s3sub':K==44?'s2sub':K==22?'s1sub':'soon')}</p>
 <span class="lab" style="margin-top:14px">${tr('rel')}</span><div class="hearts"><div class="row">${li1n()}<i>${bar(pct('li1',num))}</i></div><div class="row">${esc(li2n())}<i>${bar(pct('li2',num))}</i></div><div class="row">${tr('rep')}<i>${h(S.v.rep+2)}</i></div></div>
 <p style="text-align:center;margin:10px 0 0;font-weight:700">💎 ${(()=>{const r=gemReward(num);return (r?'+'+r+' · ':'')+gD()})()}</p>
 <span class="lab">${tr('majors')}</span><ul>${majs.map(t=>`<li>${esc(fmt(L2(t)))}</li>`).join('')}</ul>
 <div class="stack">${hasNext?`<button class="btn pri" id="eNext">${K==22?tr('startS2'):K==44?tr('startS3'):K==66?tr('startS4'):tr('nextCh').replace('{n}',cl(num+1))}</button>`:''}<button class="btn ${hasNext?'':'pri'}" id="eRe">${tr('replay')}</button><button class="btn" id="eMenu">${tr('mainmenu')}</button></div>`,'end');
 if(hasNext)$('eNext').onclick=()=>{closeModal();S.i++;run()};
 $('eRe').onclick=()=>{S=newState(S.p);startGame()};$('eMenu').onclick=()=>{closeModal();show('menu');renderMenu()}}
$('pauseBtn').onclick=()=>{sfx('click');modal(`<h3>${tr('paused')}</h3><div class="stack"><button class="btn pri" id="pR">${tr('resume')}</button><button class="btn" id="pC">${L2(['Recommencer le chapitre','Restart chapter'])}</button><button class="btn" id="pS">${tr('saves')}</button><button class="btn" id="pO">${tr('opts')}</button><button class="btn" id="pM">${tr('mainmenu')}</button></div>`);
 $('pR').onclick=closeModal;$('pC').onclick=()=>{const c=S.cs;if(!c){closeModal();return}modal(`<h3>${L2(['Recommencer le chapitre','Restart chapter'])}</h3><p style="text-align:center">${L2(['Tu reviens au début du chapitre, avec tes choix d\'avant ce chapitre. Tes sauvegardes manuelles ne sont pas touchées.','You go back to the start of the chapter, with your choices from before it. Your manual saves are untouched.'])}</p><div class="stack"><button class="btn pri" id="mOk">${tr('yes')}</button><button class="btn" id="mNo">${tr('no')}</button></div>`);$('mOk').onclick=()=>playFrom(c);$('mNo').onclick=closeModal};$('pS').onclick=()=>savesModal(true);$('pO').onclick=optsModal;$('pM').onclick=()=>{autosave();closeModal();clearInterval(tmr);mode=null;show('menu');renderMenu()}};

renderMenu();renderLib();setMusic('calm');
window.__dbg={get S(){return S},run,LBL,STORY};
}
