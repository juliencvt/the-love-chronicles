const ART=(()=>{
let U=0;
const SKINS=['#fbe4d6','#f0c8a4','#d39a6a','#a2653c','#6a3e24'];
const HAIRC=['#16110f','#43281a','#7a4f2e','#b0532a','#e0bd70','#ece6dc'];
const EYEC=['#4e2f1c','#8a5a2b','#3f7d4e','#3d6fa8','#76828c'];
const LIPC=['#d77b80','#c0525e','#a8606a','#e8a19c','#874349'];
function sh(hex,a){let n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(a<0?v*(1+a):v+(255-v)*a)));return '#'+((1<<24)|(f(r)<<16)|(f(g)<<8)|f(b)).toString(16).slice(1)}
const f1=v=>(+v).toFixed(1);
function bumps(cx,cy,r,n,br,fill,a0=0,a1=Math.PI*2){let s='';for(let i=0;i<n;i++){const a=a0+(a1-a0)*i/(n-(a1-a0>=6.28?0:1));s+=`<circle cx="${f1(cx+Math.cos(a)*r)}" cy="${f1(cy+Math.sin(a)*r)}" r="${br}" fill="${fill}"/>`}return s}
const mir=s=>`<g transform="translate(300,0) scale(-1,1)">${s}</g>`;
const both=s=>s+mir(s);

function backHair(h,L,R,hc,hd,hl='#ffffff'){
 switch(h){
 case 'kinky':return `<circle cx="150" cy="122" r="90" fill="${hc}"/>`+bumps(150,122,90,24,17,hc)+bumps(150,122,66,14,9,hl+'22');
 case 'curly':{let s=`<path d="M${L-8} 120 C${L-30} 190 ${L-26} 260 ${L-16} 312 L${R+16} 312 C${R+26} 260 ${R+30} 190 ${R+8} 120 Z" fill="${hc}"/>`;for(let y=140;y<=310;y+=24){s+=`<circle cx="${L-20+(y%48?4:-3)}" cy="${y}" r="18" fill="${hc}"/><circle cx="${R+20-(y%48?4:-3)}" cy="${y}" r="18" fill="${hc}"/>`}return s}
 case 'long':return `<path d="M${L-6} 115 C${L-26} 200 ${L-18} 300 ${L-22} 372 Q150 386 ${R+22} 372 C${R+18} 300 ${R+26} 200 ${R+6} 115 Z" fill="${hc}"/>`;
 case 'bob':return `<path d="M${L-8} 118 C${L-18} 170 ${L-14} 215 ${L-12} 240 Q150 250 ${R+12} 240 C${R+14} 215 ${R+18} 170 ${R+8} 118 Z" fill="${hc}"/>`;
 case 'bun':return `<circle cx="150" cy="58" r="33" fill="${hc}"/><path d="M128 56 Q150 36 172 56 M134 70 Q150 52 166 70" stroke="${hd}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
 case 'mlong':return `<path d="M${L-6} 115 C${L-20} 180 ${L-14} 240 ${L-12} 272 Q150 282 ${R+12} 272 C${R+14} 240 ${R+20} 180 ${R+6} 115 Z" fill="${hc}"/>`;
 default:return '';
 }}
function sideLocks(h,L,hc,hd){
 if(h=='long')return both(`<path d="M${L+6} 140 C${L-4} 200 ${L} 250 ${L+8} 300 C${L+12} 330 ${L} 356 ${L-10} 368 C${L-30} 330 ${L-30} 260 ${L-26} 200 C${L-24} 160 ${L-14} 128 ${L+6} 140 Z" fill="${hc}"/><path d="M${L-8} 170 C${L-14} 230 ${L-10} 290 ${L-4} 340" stroke="${hd}" stroke-width="2" fill="none" opacity=".5"/>`);
 if(h=='curly'){let s=`<path d="M${L+6} 140 C${L-4} 190 ${L} 240 ${L+4} 290 L${L-30} 300 C${L-32} 240 ${L-28} 180 ${L+6} 140 Z" fill="${hc}"/>`;for(let y=170;y<=320;y+=22)s+=`<circle cx="${L-12+(y%44?6:-4)}" cy="${y}" r="13" fill="${hc}"/><path d="M${L-18+(y%44?6:-4)} ${y} q6 -8 12 0" stroke="${hd}" stroke-width="2" fill="none"/>`;return both(s)}
 if(h=='mlong')return both(`<path d="M${L+6} 140 C${L-4} 190 ${L-2} 230 ${L+4} 262 C${L-10} 270 ${L-22} 262 ${L-26} 250 C${L-28} 200 ${L-22} 150 ${L+6} 140 Z" fill="${hc}"/>`);
 if(h=='braids'){let s='';for(let j=0;j<3;j++){const x=L-16+j*9;s+=`<rect x="${x}" y="150" width="9" height="${120+j*12}" rx="4.5" fill="${hc}"/>`;for(let y=158;y<270+j*12;y+=10)s+=`<path d="M${x} ${y} l9 4" stroke="${hd}" stroke-width="1.6"/>`}return both(s)}
 return '';
}
function frontHair(h,L,R,hc,hd,hl){
 const cap=`<path d="M${L-6} 150 C${L-14} 46 ${R+14} 46 ${R+6} 150 C${R} 118 ${R-14} 100 150 98 C${L+14} 100 ${L} 118 ${L-6} 150 Z" fill="${hc}"/>`;
 const shine=`<path d="M${L+20} 88 Q150 64 ${R-20} 88" stroke="${hl}" stroke-width="5" fill="none" opacity=".4" stroke-linecap="round"/>`;
 const sweep=`<path d="M${L-6} 152 C${L-10} 90 ${L+30} 74 150 78 C${R-10} 80 ${R+6} 110 ${R+6} 142 C${R-8} 112 ${R-30} 104 ${R-50} 106 C140 108 112 124 ${L+4} 154 Z" fill="${hc}"/><path d="M${R-40} 92 C${R-60} 98 ${L+40} 110 ${L+8} 146" stroke="${hd}" stroke-width="2" fill="none" opacity=".5"/>`;
 const curtain=both(`<path d="M150 82 C128 84 ${L+8} 104 ${L+2} 168 L${L-8} 150 C${L-10} 98 128 76 150 82 Z" fill="${hc}"/>`)+`<path d="M150 80 L150 96" stroke="${hd}" stroke-width="2"/>`;
 switch(h){
 case 'kinky':{let s=cap;for(let i=0;i<=10;i++){const a=Math.PI*(1.08+i*0.084);s+=`<circle cx="${f1(150+Math.cos(a)*(56+(L<100?(100-L):0)))}" cy="${f1(132+Math.sin(a)*34)}" r="11" fill="${hc}"/>`}return s}
 case 'curly':return cap+sweep+`<circle cx="${L-2}" cy="150" r="12" fill="${hc}"/><circle cx="${R+2}" cy="146" r="12" fill="${hc}"/>`+shine;
 case 'long':return cap+curtain+shine;
 case 'bob':return `<path d="M${L-6} 146 C${L-12} 60 ${R+12} 60 ${R+6} 146 L${R-4} 126 L${R-20} 122 L${R-36} 128 L150 121 L${L+36} 128 L${L+20} 122 L${L+4} 126 Z" fill="${hc}"/>`+shine;
 case 'bun':return `<path d="M${L-6} 150 C${L-14} 50 ${R+14} 50 ${R+6} 150 C${R} 112 ${R-16} 92 150 90 C${L+16} 92 ${L} 112 ${L-6} 150 Z" fill="${hc}"/>`+both(`<path d="M${L+2} 130 C${L-8} 150 ${L+4} 172 ${L-4} 192" stroke="${hc}" stroke-width="4" fill="none" stroke-linecap="round"/>`)+shine;
 case 'mshort':return cap+`<path d="M${L-4} 142 C${L-6} 92 ${L+40} 74 ${R-20} 84 C${R} 92 ${R+6} 116 ${R+4} 136 C${R-10} 106 ${L+40} 98 ${L-4} 142 Z" fill="${hc}"/>`+shine;
 case 'mlong':return cap+curtain+shine;
 case 'braids':{let s=cap;for(let k=-3;k<=3;k++)s+=`<path d="M${150+k*15} ${102+Math.abs(k)*3} Q${150+k*12} 86 ${150+k*9} 76" stroke="${hd}" stroke-width="2.4" fill="none"/>`;return s}
 }return cap}

function outfit(o,sex,s,nw,skin){
 const sx=150-s,ex=150+s;let r='';
 if(sex=='f'){
  r+=`<path d="M${sx-2} 430 L${sx-2} 322 C${sx} 300 ${sx+12} 296 ${f1(150-s*.6)} 318 Q150 352 ${f1(150+s*.6)} 318 C${ex-12} 296 ${ex} 300 ${ex+2} 322 L${ex+2} 430 Z" fill="${o.fill}"/>`;
  r+=`<path d="M${sx} 360 Q150 372 ${ex} 360 L${ex} 430 L${sx} 430 Z" fill="${sh(o.fill,-.12)}" opacity=".5"/>`;
  if(o.apron)r+=`<path d="M${f1(150-s*.62)} 318 Q150 352 ${f1(150+s*.62)} 318 L${f1(150+s*.45)} 298 Q150 330 ${f1(150-s*.45)} 298 Z" fill="#fbf8f2"/><rect x="${150-s*.55}" y="370" width="${s*1.1}" height="60" fill="#fbf8f2"/>`;
  r+=`<path d="M${f1(150-s*.6)} 318 Q150 352 ${f1(150+s*.6)} 318" stroke="${o.trim}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  r+=both(`<ellipse cx="${sx+14}" cy="306" rx="28" ry="24" fill="${o.sleeve||sh(o.fill,.15)}"/><path d="M${sx-12} 318 Q${sx+14} 336 ${sx+40} 318" stroke="${o.trim}" stroke-width="3" fill="none"/>`);
  r+=`<path d="M${sx} 396 Q150 406 ${ex} 396 L${ex} 408 Q150 418 ${sx} 408 Z" fill="${o.trim}"/>`;
  if(o.acc=='pearls'){for(let i=0;i<=10;i++){const t=i/10,x=150-nw-6+(2*nw+12)*t,y=276+Math.sin(t*Math.PI)*16;r+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="3" fill="#fdfbf7" stroke="#cfc7c0" stroke-width=".6"/>`}}
  if(o.acc=='pendant')r+=`<path d="M${150-nw-2} 272 Q150 296 ${150+nw+2} 272" stroke="${o.trim}" stroke-width="1.6" fill="none"/><circle cx="150" cy="292" r="6" fill="#c0304a" stroke="${o.trim}" stroke-width="2"/>`;
  if(o.acc=='flowers')r+=both(`<g transform="translate(${f1(150-s*.55)},322)">${[0,72,144,216,288].map(a=>`<ellipse rx="4" ry="7" fill="#fff4f6" transform="rotate(${a}) translate(0,-6)"/>`).join('')}<circle r="3" fill="${o.trim}"/></g>`);
  if(o.acc=='jewels')r+=`<path d="M${150-nw-4} 274 Q150 300 ${150+nw+4} 274" stroke="#e8c96a" stroke-width="3" fill="none"/>${[0,1,2].map(i=>`<circle cx="${140+i*10}" cy="${290+(i==1?6:0)}" r="4" fill="#7a3fb0" stroke="#e8c96a"/>`).join('')}`;
 }else{
  r+=`<path d="M${sx} 430 L${sx} 318 C${sx} 286 ${sx+18} 270 ${150-nw-10} 262 L${150+nw+10} 262 C${ex-18} 270 ${ex} 286 ${ex} 318 L${ex} 430 Z" fill="${o.vest}"/>`;
  [336,358,380,402].forEach(y=>r+=`<circle cx="150" cy="${y}" r="3.2" fill="${o.btn}"/>`);
  r+=both(`<path d="M${sx} 430 L${sx} 318 C${sx} 286 ${sx+18} 270 ${150-nw-10} 262 L${150-nw+2} 270 L${150-22} 430 Z" fill="${o.coat}"/><path d="M${150-nw-10} 262 L${150-nw-26} 300 L${150-26} 372 L${150-22} 340 L${150-nw+2} 270 Z" fill="${sh(o.coat,-.25)}"/><path d="M${sx+6} 320 C${sx+10} 360 ${sx+8} 400 ${sx+10} 430" stroke="${sh(o.coat,.15)}" stroke-width="3" fill="none" opacity=".6"/>`);
  if(o.belts)r+=`<path d="M${sx+10} 290 L${ex-20} 430 L${ex-40} 430 L${sx+10} 312 Z" fill="#f4efe4" opacity=".95"/>`;
  r+=`<path d="M${150-nw-4} 234 L${150+nw+4} 234 L${150+nw+9} 264 Q150 286 ${150-nw-9} 264 Z" fill="${o.cravat||'#fbfaf5'}"/><path d="M138 262 C136 290 144 312 150 320 C156 312 164 290 162 262 Z" fill="${o.cravat||'#fbfaf5'}" stroke="#d9d3c8" stroke-width="1.2"/><circle cx="150" cy="268" r="6" fill="${o.cravat||'#fbfaf5'}" stroke="#d9d3c8"/>`;
 }
 return r}

function eye(x,y,flip,p,ex,id){
 const al=p.es==1,ir=al?7.8:9.4;
 const W=al?'M-14 3 C-8 -9 8 -11 16 -4 C9 7 -6 9 -14 3 Z':'M-13 2 C-13 -13 13 -15 14 0 C13 12 -12 13 -13 2 Z';
 const lid=al?'M-15 3 C-8 -11 8 -12 17 -5':'M-15 0 C-12 -15 12 -17 16 -2';
 let s=`<g transform="translate(${f1(x)},${y}) scale(${flip?-1:1},1)"><path d="${W}" fill="#fffdfb"/><g clip-path="url(#${id})"><circle cx="1" cy="1" r="${ex=='o'?ir*.85:ir}" fill="${p.ec}"/><circle cx="1" cy="1" r="${ir}" fill="none" stroke="${sh(p.ec,-.45)}" stroke-width="1.6"/><circle cx="1" cy="3" r="${ir*.6}" fill="${sh(p.ec,.25)}" opacity=".45"/><circle cx="1" cy="1.5" r="${ir*.42}" fill="#1a1212"/><circle cx="${flip?-4:4}" cy="-3" r="2.8" fill="#fff"/><circle cx="-3" cy="5" r="1.3" fill="#fff" opacity=".8"/><path d="M-16 -14 L18 -14 L18 -3 Q0 -9 -16 -3 Z" fill="#000" opacity=".12"/></g>`;
 if(ex=='h')s+=`<path d="M-15 9 Q0 1 16 6 L16 16 L-15 16 Z" fill="${p._skin}"/>`;
 s+=`<path d="${lid}" stroke="#2b1a14" stroke-width="${p.sex=='f'?3.4:2.8}" fill="none" stroke-linecap="round"/>`;
 if(p.sex=='f')s+=`<path d="M${al?16:15} ${al?-4:-1} l6 -5 M${al?11:11} ${al?-8:-9} l4 -6" stroke="#2b1a14" stroke-width="2" stroke-linecap="round"/>`;
 if(p.age)s+=`<path d="M-9 13 Q0 16 10 12" stroke="${p._ln}" stroke-width="1" fill="none" opacity=".6"/>`;
 return s+'</g>'}
function brow(x,y,flip,ex,col,w){const d={n:'M-14 -22 Q0 -29 16 -24',h:'M-14 -24 Q0 -31 16 -25',a:'M-14 -17 Q0 -24 16 -27',s:'M-14 -30 Q0 -27 16 -21',o:'M-14 -29 Q0 -37 16 -30'}[ex]||'M-14 -22 Q0 -29 16 -24';
 return `<g transform="translate(${f1(x)},${y}) scale(${flip?-1:1},1)"><path d="${d}" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round"/></g>`}
function nose(n,ln){return ['<path d="M146 186 Q151 190 155 186" stroke="LN" stroke-width="2.2" fill="none" stroke-linecap="round"/>','<path d="M152 164 L156 182 Q152 189 146 185" stroke="LN" stroke-width="2.2" fill="none" stroke-linecap="round"/>','<path d="M154 168 Q158 178 158 183 M140 184 Q144 191 150 187 Q156 191 161 184" stroke="LN" stroke-width="2.3" fill="none" stroke-linecap="round"/>'][n].replace(/LN/g,ln)}
function mouth(p,ex,y){
 const full=p.mouth==1,lc=p.lip,dk=sh(lc,-.35);
 const g=`<g transform="translate(0,${f1(y-204)})">`;
 if(ex=='h')return g+`<path d="M135 200 Q150 220 165 200 Q150 205 135 200 Z" fill="#7a2f36" stroke="${full?lc:dk}" stroke-width="${full?4:2}" stroke-linejoin="round"/><path d="M139 202 Q150 206 161 202 L160 205 Q150 208 140 205 Z" fill="#fff"/></g>`;
 if(ex=='o')return g+`<ellipse cx="150" cy="208" rx="5.5" ry="7" fill="#7a2f36" stroke="${full?lc:dk}" stroke-width="${full?3.5:2}"/></g>`;
 const curve=ex=='s'?'M139 209 Q150 202 161 209':ex=='a'?'M139 207 Q150 204 161 208':'M137 204 Q150 209 163 204';
 if(full)return g+`<path d="M135 204 Q142 196 150 200 Q158 196 165 204 Q150 207 135 204 Z" fill="${dk}" opacity="${ex=='n'?1:.9}"/><path d="M136 205 Q150 216 164 205 Q150 208 136 205 Z" fill="${lc}"/><path d="M144 209 Q150 211 156 209" stroke="#fff" stroke-width="1.5" opacity=".5" fill="none"/></g>`;
 return g+`<path d="${curve}" stroke="${dk}" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M144 211 Q150 213 156 211" stroke="${lc}" stroke-width="2" fill="none" opacity=".7"/></g>`}

function draw(p,ex='n',acc={}){
 const id='a'+(U++),skin=typeof p.skin=='number'?SKINS[p.skin]:p.skin;
 const sd=sh(skin,-.15),ln=sh(skin,-.42);p._skin=skin;p._ln=ln;
 const b=p.body??1,m=p.sex=='m';
 const c=[0,4,9,14][b],s=[86,96,110,126][b]+(m?10:0),nw=[14,16,19,22][b]+(m?3:0);
 const L=100-c,R=200+c,hc=p.hc,hd=sh(hc,-.35),hl=sh(hc,.45);
 const ex1=127-c*.25,ex2=173+c*.25,ey=158;
 let o=`<svg viewBox="0 0 300 430" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${id}"><path d="${p.es==1?'M-14 3 C-8 -9 8 -11 16 -4 C9 7 -6 9 -14 3 Z':'M-13 2 C-13 -13 13 -15 14 0 C13 12 -12 13 -13 2 Z'}"/></clipPath><radialGradient id="${id}b"><stop offset="0" stop-color="#ff6f86" stop-opacity=".55"/><stop offset="1" stop-color="#ff6f86" stop-opacity="0"/></radialGradient></defs>`;
 if(acc.plume)o+=`<path d="M${R-30} 96 C${R-26} 30 ${R+10} 4 ${R+40} 12 C${R+14} 30 ${R+2} 60 ${R-30} 96 Z" fill="#ff6fa3"/><path d="M${R-34} 98 C${R-50} 40 ${R-30} 10 ${R-6} 2 C${R-20} 30 ${R-22} 60 ${R-34} 98 Z" fill="#3fc6c0"/>`;
 o+=backHair(p.hair,L,R,hc,hd,hl);
 const sx=150-s,sx2=150+s;
 o+=`<path d="M${sx} 430 L${sx} 318 C${sx} 286 ${sx+18} 270 ${150-nw-10} 262 L${150+nw+10} 262 C${sx2-18} 270 ${sx2} 286 ${sx2} 318 L${sx2} 430 Z" fill="${skin}"/>`;
 o+=`<path d="M${150-nw} 196 L${150-nw} 264 Q150 280 ${150+nw} 264 L${150+nw} 196 Z" fill="${skin}"/>`;
 if(!m)o+=both(`<path d="M${150-nw-4} 282 Q${150-nw-20} 287 ${150-nw-38} 284" stroke="${sd}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>`);
 o+=outfit(p.out,p.sex,s,nw,skin);
 o+=sideLocks(p.hair,L,hc,hd);
 o+=`<ellipse cx="150" cy="${222+c*.3}" rx="${nw+6}" ry="11" fill="${sd}" opacity=".45"/>`;
 o+=both(`<ellipse cx="${L-1}" cy="162" rx="9" ry="14" fill="${skin}"/><path d="M${L-4} 154 Q${L-7} 162 ${L-3} 170" stroke="${sd}" stroke-width="2" fill="none"/>`);
 const jaw=m?`C${L} ${180+c*.3} ${122-c*.4} 216 150 224 C${178+c*.4} 216 ${R} ${180+c*.3} ${R} 125`:`C${L} ${172+c*.3} ${118-c*.4} 212 150 222 C${182+c*.4} 212 ${R} ${172+c*.3} ${R} 125`;
 o+=`<path d="M${L} 125 ${jaw} C${R} 68 ${L} 68 ${L} 125 Z" fill="${skin}"/>`;
 o+=`<path d="M${L+4} 150 C${L+6} 175 ${L+18} 196 ${L+30} 205" stroke="${sd}" stroke-width="3" fill="none" opacity=".35"/>`;
 if(b==3)o+=`<path d="M128 228 Q150 238 172 228" stroke="${sd}" stroke-width="2" fill="none"/>`;
 o+=`<ellipse cx="${f1(ex1-6)}" cy="184" rx="15" ry="8" fill="url(#${id}b)" opacity="${ex=='h'?.9:.55}"/><ellipse cx="${f1(ex2+6)}" cy="184" rx="15" ry="8" fill="url(#${id}b)" opacity="${ex=='h'?.9:.55}"/>`;
 if(acc.freck)[[132,178],[138,183],[127,184],[168,178],[162,183],[173,184]].forEach(([x,y])=>o+=`<circle cx="${x}" cy="${y}" r="1.4" fill="${ln}" opacity=".6"/>`);
 o+=eye(ex1,ey,1,p,ex,id)+eye(ex2,ey,0,p,ex,id);
 o+=nose(p.nose,ln);
 if(p.age)o+=both(`<path d="M134 190 Q130 200 135 208" stroke="${ln}" stroke-width="1.2" fill="none" opacity=".5"/>`);
 o+=mouth(p,ex,204+c*.2);
 if(acc.side)o+=both(`<path d="M${L-2} 128 L${L+8} 130 L${L+10} 186 L${L+1} 182 Z" fill="${hc}"/>`);
 o+=frontHair(p.hair,L,R,hc,hd,hl);
 const bc=sh(hc,p.hc&&parseInt(hc.slice(1),16)>0xc00000?-.45:-.15);
 if(acc.mask){const mk=acc.mask,tr=acc.trim||'#d8b75a';
  o+=`<path fill-rule="evenodd" d="M${L-8} 150 C${L-2} 126 138 128 150 142 C162 128 ${R+2} 126 ${R+8} 150 C${R+2} 178 164 182 150 168 C136 182 ${L-2} 178 ${L-8} 150 Z M${f1(ex1-15)} 158 a15 10 0 1 0 30 0 a15 10 0 1 0 -30 0 Z M${f1(ex2-15)} 158 a15 10 0 1 0 30 0 a15 10 0 1 0 -30 0 Z" fill="${mk}" stroke="${tr}" stroke-width="2"/>`;
  o+=`<path d="M${R+4} 146 C${R+34} 118 ${R+34} 80 ${R+12} 56 C${R+18} 94 ${R+6} 124 ${R+4} 146 Z" fill="${acc.feather||tr}" opacity=".9"/>`;
 }else o+=brow(ex1,ey,1,ex,bc,m?4.6:3.2)+brow(ex2,ey,0,ex,bc,m?4.6:3.2);
 if(acc.tiara)o+=`<path d="M124 96 Q150 76 176 96 L171 99 Q150 86 129 99 Z" fill="#e8c96a"/><circle cx="150" cy="84" r="4" fill="#9fd3f0" stroke="#e8c96a"/>`;
 if(acc.crown)o+=`<path d="M116 74 L120 40 L135 58 L150 30 L165 58 L180 40 L184 74 Z" fill="#e3b84a" stroke="#a8801f" stroke-width="2"/><circle cx="150" cy="56" r="5" fill="#c0304a"/><circle cx="130" cy="64" r="3.5" fill="#3d6fa8"/><circle cx="170" cy="64" r="3.5" fill="#3d6fa8"/>`;
 if(acc.cap)o+=`<path d="M${L-12} 114 C${L-10} 42 ${R+10} 42 ${R+12} 114 C190 100 110 100 ${L-12} 114 Z" fill="#fdfbf6" stroke="#e2dccf" stroke-width="2"/>`+bumps(150,262,160,11,6,'#fdfbf6',Math.PI*1.31,Math.PI*1.69);
 if(acc.shako)o+=`<path d="M108 98 L114 22 L186 22 L192 98 Z" fill="#1d1d24"/><ellipse cx="150" cy="98" rx="52" ry="8" fill="#111"/><path d="M140 54 L150 38 L160 54 L150 74 Z" fill="#d9b54a"/><rect x="145" y="4" width="10" height="20" rx="5" fill="#fbfbfb"/>`;
 return o+'</svg>'}

/* ---------- backgrounds ---------- */
let K=0;
function wrap(inner,k){return `<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><filter id="w${k}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="3" seed="${k%9+1}"/><feDisplacementMap in="SourceGraphic" scale="13" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation="0.8"/></filter><filter id="g${k}"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 .4 0 0 0 0 .3 0 0 0 0 .3 0 0 0 .13 0"/></filter><radialGradient id="v${k}" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#3a2440" stop-opacity="0"/><stop offset="1" stop-color="#3a2440" stop-opacity=".35"/></radialGradient></defs><g filter="url(#w${k})">${inner}</g><rect width="400" height="800" filter="url(#g${k})"/><rect width="400" height="800" fill="url(#v${k})"/></svg>`}
const lg=(id,a,b,c)=>`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/>${c?`<stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/>`:`<stop offset="1" stop-color="${b}"/>`}</linearGradient>`;
const glow=(id,col)=>`<radialGradient id="${id}"><stop offset="0" stop-color="${col}" stop-opacity=".85"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient>`;
function stars(n,seed,h){let s='',x=seed;for(let i=0;i<n;i++){x=(x*9301+49297)%233280;const a=x/233280;x=(x*9301+49297)%233280;const b=x/233280;s+=`<circle cx="${f1(a*400)}" cy="${f1(b*h)}" r="${f1(.6+a*1.2)}" fill="#fffbe8" opacity="${f1(.4+b*.6)}"/>`}return s}
const BG={
ship(k){let s=`<defs>${lg('s'+k,'#b9b6dd','#f2c6cf','#fbe0c2')}${lg('e'+k,'#8fb0d6','#34507f')}</defs><rect width="400" height="440" fill="url(#s${k})"/><circle cx="290" cy="360" r="46" fill="#fff4dc" opacity=".85"/><ellipse cx="90" cy="150" rx="90" ry="22" fill="#fff" opacity=".45"/><ellipse cx="250" cy="220" rx="110" ry="18" fill="#fff" opacity=".35"/><path d="M0 440 L0 378 Q30 366 70 374 Q110 368 150 390 L172 440 Z" fill="#f4f0e8"/><path d="M60 440 L70 376 Q110 368 150 390 L172 440 Z" fill="#d9d1d6"/><rect y="432" width="400" height="368" fill="url(#e${k})"/>`;
 for(let i=0;i<26;i++){const x=(i*73)%400,y=450+(i*37)%160;s+=`<path d="M${x} ${y} q10 -6 20 0 t20 0" stroke="#fff" stroke-width="2" fill="none" opacity=".35"/>`}
 s+=`<path d="M60 200 q8 -8 16 0 q8 -8 16 0 M130 160 q6 -6 12 0 q6 -6 12 0" stroke="#5a5466" stroke-width="2" fill="none"/><rect x="322" y="0" width="16" height="640" fill="#6b4630"/><rect x="160" y="90" width="240" height="10" fill="#6b4630"/><path d="M178 100 Q260 140 400 104 L400 470 Q300 440 198 470 Q214 300 178 100 Z" fill="#f7f0e2" opacity=".93"/><path d="M200 470 Q214 300 178 100 L196 104 Q232 300 220 462 Z" fill="#e4d7c4"/><path d="M330 20 L40 560 M330 20 L120 560" stroke="#4a3426" stroke-width="2" opacity=".7"/><path d="M0 612 L400 582 L400 800 L0 800 Z" fill="#9a6844"/>`;
 for(let i=0;i<9;i++)s+=`<path d="M0 ${630+i*22} L400 ${600+i*24}" stroke="#7e5236" stroke-width="2"/>`;
 s+=`<path d="M0 556 L400 528 L400 546 L0 574 Z" fill="#7a4e32"/>`;for(let x=8;x<400;x+=32)s+=`<rect x="${x}" y="${572-x*.07}" width="9" height="${46}" fill="#835639"/>`;return s},
street(k){let s=`<defs>${lg('s'+k,'#c8d9ea','#efe9e4')}</defs><rect width="400" height="800" fill="url(#s${k})"/><path d="M0 300 L60 300 L60 250 L120 250 L120 290 L200 290 L200 240 L280 240 L280 280 L400 280 L400 520 L0 520 Z" fill="#d7d0da" opacity=".7"/>`;
 [[0,140,'#efe1ca'],[140,270,'#e5d4bc'],[270,400,'#f1e5d2']].forEach(([a,b,c],j)=>{s+=`<rect x="${a}" y="${170+j*8}" width="${b-a}" height="${520-j*8}" fill="${c}"/><rect x="${a}" y="${170+j*8}" width="${b-a}" height="14" fill="#fbf8f2"/><rect x="${a}" y="${420}" width="${b-a}" height="6" fill="#fbf8f2" opacity=".8"/>`;
  for(let r=0;r<3;r++)for(let q=0;q<2;q++){if(j==1&&r==2)continue;const x=a+18+q*((b-a)/2),y=210+r*100;s+=`<rect x="${x}" y="${y}" width="36" height="66" fill="#93aac2" stroke="#fbf8f2" stroke-width="4"/><path d="M${x+18} ${y} V${y+66} M${x} ${y+33} H${x+36}" stroke="#fbf8f2" stroke-width="2"/>`}});
 s+=`<path d="M180 682 L180 566 Q205 534 230 566 L230 682 Z" fill="#1f2328"/><path d="M182 560 Q205 532 228 560 Z" fill="#f3e1a8"/><circle cx="222" cy="624" r="3" fill="#d9b54a"/><rect x="168" y="682" width="74" height="14" fill="#cfc6b8"/><rect y="694" width="400" height="106" fill="#bab0a0"/>`;
 for(let i=0;i<40;i++)s+=`<ellipse cx="${(i*47)%400}" cy="${710+(i*29)%90}" rx="12" ry="5" fill="#a59b8c" opacity=".6"/>`;
 s+=`<path d="M0 640 H160 M250 640 H400" stroke="#222" stroke-width="3"/>`;for(let x=4;x<400;x+=10)if(x<160||x>250)s+=`<path d="M${x} 640 V694" stroke="#222" stroke-width="2" opacity=".8"/>`;
 s+=`<rect x="355" y="470" width="7" height="224" fill="#222"/><path d="M346 448 L372 448 L368 476 L350 476 Z" fill="#f6d98a" stroke="#222" stroke-width="3"/>`;return s},
salon(k){let s=`<defs>${lg('s'+k,'#e3ecdc','#c9d9c4')}${lg('w'+k,'#eef6fc','#cfe2ee')}</defs><rect width="400" height="800" fill="url(#s${k})"/><rect y="520" width="400" height="172" fill="#f3eee4"/>`;
 for(let x=10;x<400;x+=98)s+=`<rect x="${x}" y="540" width="80" height="130" fill="none" stroke="#dcd2c2" stroke-width="3"/>`;
 s+=`<rect y="690" width="400" height="110" fill="#b88a62"/>`;for(let x=0;x<400;x+=40)s+=`<path d="M${x} 690 L${x-30} 800" stroke="#a07550" stroke-width="2"/>`;
 s+=`<polygon points="130,520 270,520 360,800 40,800" fill="#fff" opacity=".18"/><rect x="128" y="148" width="144" height="374" fill="#fffaf2"/><rect x="138" y="158" width="124" height="354" fill="url(#w${k})"/><path d="M200 158 V512 M138 276 H262 M138 394 H262" stroke="#fffaf2" stroke-width="5"/>`;
 s+=both(`<path d="M96 120 C130 220 112 400 132 548 L86 548 C80 400 70 220 96 120 Z" fill="#e6b2b4"/><path d="M106 160 C118 260 108 420 118 540" stroke="#cf9599" stroke-width="3" fill="none"/>`).replace('translate(300,0)','translate(400,0)');
 s+=`<path d="M80 112 Q200 160 320 112 L320 130 Q200 186 80 130 Z" fill="#dca0a4"/><rect x="6" y="470" width="94" height="14" fill="#fbf8f2"/><rect x="12" y="484" width="82" height="206" fill="#f6f1e8"/><rect x="28" y="560" width="50" height="130" fill="#3a2a2a"/><ellipse cx="53" cy="664" rx="22" ry="20" fill="#f3a35a" opacity=".85"/><rect x="300" y="250" width="86" height="120" fill="#c9a24a"/><rect x="308" y="258" width="70" height="104" fill="#a9c3a2"/><path d="M308 330 Q340 300 378 320 L378 362 L308 362 Z" fill="#6f9068"/><circle cx="200" cy="40" r="28" fill="none" stroke="#c9a24a" stroke-width="4"/>`;
 for(let i=0;i<6;i++)s+=`<rect x="${174+i*10}" y="56" width="4" height="12" fill="#fffaf2"/>`;
 s+=`<path d="M120 650 Q120 610 160 616 L240 616 Q280 610 280 650 L284 712 L116 712 Z" fill="#e9b9c1"/><rect x="128" y="660" width="144" height="34" rx="10" fill="#f3cbd2"/>`;return s},
bedroom(k,day){let s=`<defs>${day?lg('s'+k,'#e4dcef','#c4b6dd'):lg('s'+k,'#968dc0','#5d557f')}${glow('c'+k,'#ffd98a')}${lg('d'+k,'#a9d4f2','#eaf6fd')}</defs><rect width="400" height="800" fill="url(#s${k})"/><rect y="680" width="400" height="120" fill="${day?'#a48c9c':'#4b3f5c'}"/><rect x="36" y="150" width="138" height="318" fill="#fbf4f8"/><rect x="44" y="158" width="122" height="302" fill="${day?`url(#d${k})`:'#2c3460'}"/>${day?`<circle cx="128" cy="210" r="26" fill="#fff6cf"/><ellipse cx="80" cy="290" rx="34" ry="10" fill="#fff" opacity=".8"/><polygon points="44,460 166,460 300,700 60,700" fill="#fff8dc" opacity=".35"/>`:stars(30,7,300).replace(/cx="([\d.]+)" cy="([\d.]+)"/g,(m,x,y)=>`cx="${f1(44+x*.3)}" cy="${f1(158+y)}"`)+'<circle cx="128" cy="210" r="22" fill="#f6f0d8"/>'}<path d="M105 158 V460 M44 300 H166" stroke="#fbf4f8" stroke-width="4"/><path d="M20 140 C50 240 30 400 50 480 L20 480 Z M190 140 C160 240 180 400 160 480 L190 480 Z" fill="#c9b4dd"/>`;
 s+=`<rect x="232" y="180" width="10" height="520" fill="#e9dccb"/><rect x="390" y="180" width="10" height="520" fill="#e9dccb"/><path d="M220 170 Q310 220 400 170 L400 200 Q310 250 220 200 Z" fill="#e7cfe0"/><path d="M228 200 C250 300 236 420 250 560 L228 560 Z" fill="#e7cfe0" opacity=".9"/><rect x="236" y="540" width="164" height="150" fill="#f4e9f1"/><rect x="250" y="510" width="70" height="40" rx="14" fill="#fff"/><rect x="236" y="586" width="164" height="104" fill="#d9b8d6"/>`;
 s+=`<rect x="20" y="590" width="140" height="12" fill="#7a5a48"/><rect x="30" y="600" width="12" height="90" fill="#6a4a3a"/><rect x="140" y="600" width="12" height="90" fill="#6a4a3a"/>${day?'':`<circle cx="100" cy="560" r="120" fill="url(#c${k})" opacity=".55"/>`}<rect x="95" y="555" width="10" height="36" fill="#fffaf0"/><ellipse cx="100" cy="550" rx="4" ry="8" fill="#ffb347"/>`;return s},
bedroomday(k){return BG.bedroom(k,1)},
garden(k){let s=`<defs>${lg('s'+k,'#aed3ef','#eaf3f2')}${lg('lw'+k,'#9cc77e','#6f9c5a')}</defs><rect width="400" height="800" fill="url(#s${k})"/><ellipse cx="90" cy="150" rx="80" ry="20" fill="#fff" opacity=".7"/><ellipse cx="300" cy="110" rx="70" ry="16" fill="#fff" opacity=".6"/>`;
 s+=`<path d="M0 420 Q60 360 130 400 Q200 350 270 395 Q340 360 400 390 L400 520 L0 520 Z" fill="#7fae74"/><path d="M0 470 Q100 430 200 465 Q300 430 400 460 L400 540 L0 540 Z" fill="#6a9a63"/><rect y="500" width="400" height="300" fill="url(#lw${k})"/>`;
 s+=`<rect x="250" y="250" width="110" height="220" fill="#f3ece1"/><path d="M240 255 L305 205 L370 255 Z" fill="#e8dccb"/>`;for(let i=0;i<3;i++)s+=`<rect x="${262+i*32}" y="300" width="20" height="40" fill="#9fb8c9"/><rect x="${262+i*32}" y="370" width="20" height="40" fill="#9fb8c9"/>`;
 s+=`<path d="M40 520 C10 400 30 230 110 200 C190 230 200 380 170 520 Z" fill="#5f8f55"/>`;for(let i=0;i<14;i++){const x=50+i*9;s+=`<path d="M${x} ${230+i%3*10} Q${x-12} ${380} ${x-6+i%4*3} ${520}" stroke="#4d7a46" stroke-width="3" fill="none" opacity=".8"/>`}
 s+=`<ellipse cx="200" cy="560" rx="60" ry="14" fill="#d8d4cc"/><rect x="190" y="480" width="20" height="80" fill="#e8e3da"/><ellipse cx="200" cy="480" rx="34" ry="9" fill="#e8e3da"/><path d="M200 470 Q190 430 200 420 Q210 430 200 470" fill="#bfe3f5" opacity=".8"/>`;
 for(let i=0;i<22;i++){const x=(i*61)%400,y=600+(i*37)%90;s+=`<circle cx="${x}" cy="${y}" r="16" fill="#5f8f55"/><circle cx="${x-6}" cy="${y-6}" r="5" fill="${i%3?'#f2a7b8':'#f7d4dc'}"/><circle cx="${x+7}" cy="${y-2}" r="5" fill="${i%2?'#e9798f':'#fff1f4'}"/><circle cx="${x}" cy="${y+6}" r="4" fill="#f2a7b8"/>`}
 s+=`<ellipse cx="300" cy="760" rx="90" ry="20" fill="#000" opacity=".1"/><rect x="215" y="690" width="170" height="60" rx="6" fill="#fdfbf8"/><path d="M215 700 Q300 730 385 700 L385 750 L215 750 Z" fill="#f1ebe3"/><ellipse cx="260" cy="690" rx="14" ry="6" fill="#fff"/><path d="M325 662 Q345 655 360 668 L362 690 L322 690 Z" fill="#e9d9c5"/><circle cx="342" cy="660" r="4" fill="#c9a24a"/>`;return s},
greenhouse(k){let s=`<defs>${lg('s'+k,'#e6f2e4','#c4dcc0')}${glow('c'+k,'#fff8d8')}</defs><rect width="400" height="800" fill="url(#s${k})"/><circle cx="200" cy="140" r="240" fill="url(#c${k})" opacity=".6"/>`;
 s+=`<path d="M0 260 Q200 40 400 260" stroke="#fdfdf8" stroke-width="8" fill="none"/>`;for(let x=0;x<=400;x+=50)s+=`<path d="M${x} 640 V${260-Math.sin(x/400*Math.PI)*190}" stroke="#fdfdf8" stroke-width="5"/>`;
 for(let y=340;y<640;y+=90)s+=`<path d="M0 ${y} H400" stroke="#fdfdf8" stroke-width="4"/>`;
 s+=`<rect y="640" width="400" height="160" fill="#c9b9a2"/>`;for(let x=0;x<400;x+=40)for(let y=640;y<800;y+=40)if((x+y)%80==0)s+=`<rect x="${x}" y="${y}" width="40" height="40" fill="#b9a68d"/>`;
 const leaf=(x,y,r,c,a)=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r*.38}" fill="${c}" transform="rotate(${a} ${x} ${y})"/>`;
 for(let i=0;i<16;i++)s+=leaf(20+((i*53)%120),420+((i*41)%220),36,i%2?'#4f8a4e':'#3f7440',(i*47)%180);
 for(let i=0;i<16;i++)s+=leaf(300+((i*37)%110),400+((i*59)%240),38,i%2?'#5a9658':'#3e7a45',(i*61)%180);
 s+=`<rect x="330" y="520" width="12" height="120" fill="#7a5a3a"/><circle cx="336" cy="480" r="62" fill="#4f8a4e"/>`;for(let i=0;i<9;i++)s+=`<circle cx="${300+(i*29)%75}" cy="${450+(i*23)%70}" r="7" fill="#f2c64a"/>`;
 s+=`<path d="M60 640 L70 600 L110 600 L120 640 Z" fill="#b5654a"/>`;for(let i=0;i<6;i++)s+=`<g transform="translate(${70+i*8},${560+(i%2)*12})">${[0,72,144,216,288].map(a=>`<ellipse rx="4" ry="8" fill="${i%2?'#f0a6c8':'#e9d2f2'}" transform="rotate(${a}) translate(0,-6)"/>`).join('')}<circle r="2.5" fill="#f6d35a"/></g>`;
 return s},
park(k){let s=`<defs>${lg('s'+k,'#f6c7c4','#fbe7cf','#dfe8e6')}${glow('c'+k,'#fff1d6')}</defs><rect width="400" height="800" fill="url(#s${k})"/><circle cx="300" cy="330" r="160" fill="url(#c${k})"/><circle cx="300" cy="330" r="34" fill="#fff6e0"/>`;
 s+=`<path d="M0 360 Q80 320 160 350 Q240 310 320 345 Q370 330 400 340 L400 470 L0 470 Z" fill="#b9c7b4" opacity=".7"/><rect y="440" width="400" height="90" fill="#c9d9dc"/>`;for(let i=0;i<10;i++)s+=`<path d="M${(i*53)%400} ${460+(i*13)%60} q14 -4 28 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>`;
 s+=`<rect y="440" width="400" height="90" fill="#fff" opacity=".35"/><rect y="520" width="400" height="280" fill="#9fbf8f"/><path d="M120 800 Q200 640 230 520 L260 520 Q250 640 300 800 Z" fill="#e8dcc6"/>`;
 s+=`<path d="M40 300 L40 520 M180 280 L180 520" stroke="#6d5a48" stroke-width="10"/><ellipse cx="40" cy="290" rx="70" ry="60" fill="#88a77b" opacity=".85"/><ellipse cx="180" cy="270" rx="60" ry="55" fill="#7d9e72" opacity=".85"/>`;
 s+=`<g transform="translate(250,470)"><path d="M-70 120 L70 120 L60 100 L-60 100 Z" fill="#e9e3d6"/>${[-55,-20,20,55].map(x=>`<rect x="${x-3}" y="20" width="6" height="80" fill="#f4efe6"/>`).join('')}<path d="M-80 25 Q0 -40 80 25 Z" fill="#5f7d7a"/><path d="M-80 25 L80 25" stroke="#d6b45a" stroke-width="4"/><circle cx="0" cy="-20" r="5" fill="#d6b45a"/></g>`;
 s+=`<rect y="520" width="400" height="280" fill="#fff" opacity=".18"/>`;return s},
bridge(k){let s=`<defs>${lg('s'+k,'#141a3a','#3a3566')}${glow('c'+k,'#ffcf7a')}${lg('w'+k,'#232a52','#0f1430')}</defs><rect width="400" height="800" fill="url(#s${k})"/>${stars(50,11,360)}<circle cx="80" cy="120" r="26" fill="#f6f0d8"/>`;
 s+=`<path d="M200 380 L200 250 Q215 200 230 250 L230 380 Z" fill="#2a2d4a"/><ellipse cx="215" cy="250" rx="34" ry="30" fill="#2a2d4a"/><path d="M215 205 L215 180" stroke="#2a2d4a" stroke-width="6"/>`;
 s+=`<path d="M0 400 L60 360 L120 395 L170 370 L260 380 L320 350 L400 390 L400 460 L0 460 Z" fill="#1d2140"/>`;for(let i=0;i<18;i++)s+=`<rect x="${(i*23)%400}" y="${400+(i*7)%40}" width="4" height="6" fill="#ffd98a" opacity=".7"/>`;
 s+=`<rect y="450" width="400" height="350" fill="url(#w${k})"/>`;for(let i=0;i<24;i++)s+=`<path d="M${(i*67)%400} ${470+(i*29)%300} q12 -4 24 0" stroke="#ffd98a" stroke-width="2" fill="none" opacity=".35"/>`;
 s+=`<path d="M0 560 L400 520 L400 600 L0 640 Z" fill="#4b4560"/><path d="M0 560 L400 520" stroke="#6a6280" stroke-width="6"/>`;for(let x=10;x<400;x+=30)s+=`<rect x="${x}" y="${550-x*.1}" width="8" height="40" fill="#5a5372"/>`;
 [[60,553],[200,539],[340,525]].forEach(([x,y])=>s+=`<circle cx="${x}" cy="${y-80}" r="60" fill="url(#c${k})"/><rect x="${x-3}" y="${y-80}" width="6" height="80" fill="#222"/><rect x="${x-10}" y="${y-100}" width="20" height="22" rx="3" fill="#ffd27a" stroke="#222" stroke-width="3"/>`);
 s+=`<path d="M0 640 L400 600 L400 800 L0 800 Z" fill="#2f2b40"/>`;return s},
shop(k){let s=`<defs>${lg('s'+k,'#f8e6ea','#ecd2da')}</defs><rect width="400" height="800" fill="url(#s${k})"/><rect y="660" width="400" height="140" fill="#b78f6c"/>`;for(let x=0;x<400;x+=50)s+=`<path d="M${x} 660 L${x-40} 800" stroke="#a37d5c" stroke-width="2"/>`;
 s+=`<rect x="20" y="140" width="150" height="420" fill="#a8775a"/>`;const C=['#a9c9ee','#f2b5c6','#3e8a6a','#f3d38c','#c8b6e8','#e9798f','#fdfbf8','#6d3d8a','#8fb4d8'];
 for(let r=0;r<4;r++)for(let c=0;c<3;c++){const i=r*3+c;s+=`<rect x="${30+c*46}" y="${155+r*100}" width="40" height="86" rx="6" fill="${C[i%9]}"/><rect x="${30+c*46}" y="${155+r*100}" width="12" height="86" rx="4" fill="#fff" opacity=".25"/>`}
 s+=`<rect x="220" y="160" width="150" height="260" fill="#fffaf2" stroke="#c9a24a" stroke-width="6"/><rect x="232" y="172" width="126" height="236" fill="#dfe9f2"/><path d="M232 300 Q300 260 358 300 L358 408 L232 408 Z" fill="#c9d8e6"/>`;
 s+=`<g transform="translate(300,560)"><ellipse cx="0" cy="100" rx="40" ry="8" fill="#000" opacity=".15"/><rect x="-3" y="20" width="6" height="80" fill="#6d5a48"/><path d="M-30 -60 Q0 -80 30 -60 L36 0 Q0 30 -36 0 Z" fill="#f2b5c6"/><path d="M-36 0 Q0 30 36 0 L50 60 Q0 80 -50 60 Z" fill="#f7cad6"/><circle cx="0" cy="-74" r="10" fill="#e8dccb"/></g>`;
 s+=`<path d="M0 100 Q200 140 400 100" stroke="#f2a7b8" stroke-width="8" fill="none"/>`;for(let i=0;i<10;i++)s+=`<path d="M${20+i*40} ${110+Math.sin(i)*6} q4 30 -4 50" stroke="${C[i%9]}" stroke-width="5" fill="none"/>`;
 s+=`<rect x="60" y="600" width="200" height="60" fill="#8a5f44"/><rect x="60" y="596" width="200" height="10" fill="#c9a24a"/>`;return s},
opera(k){let s=`<defs>${lg('s'+k,'#3a0f1e','#6b1a2c')}${glow('c'+k,'#ffe2a8')}</defs><rect width="400" height="800" fill="url(#s${k})"/><circle cx="200" cy="90" r="160" fill="url(#c${k})" opacity=".55"/>`;
 for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=c*100,y=170+r*120;s+=`<path d="M${x+6} ${y} L${x+94} ${y} L${x+94} ${y+90} Q${x+50} ${y+104} ${x+6} ${y+90} Z" fill="#2a0a14"/><path d="M${x+6} ${y+70} L${x+94} ${y+70} L${x+94} ${y+90} Q${x+50} ${y+104} ${x+6} ${y+90} Z" fill="#d6b45a"/><circle cx="${x+30}" cy="${y+50}" r="8" fill="#e8c4a8" opacity=".5"/><circle cx="${x+66}" cy="${y+48}" r="8" fill="#e8c4a8" opacity=".5"/>`}
 s+=`<path d="M0 520 L400 520 L400 800 L0 800 Z" fill="#4a0d1c"/><path d="M60 520 Q200 470 340 520 L340 800 L60 800 Z" fill="#9c1c34"/>`;for(let x=70;x<340;x+=22)s+=`<path d="M${x} ${520-Math.sin((x-60)/280*Math.PI)*40} V800" stroke="#7a1528" stroke-width="5"/>`;
 s+=`<path d="M40 500 Q200 440 360 500" stroke="#d6b45a" stroke-width="12" fill="none"/><circle cx="200" cy="462" r="16" fill="#d6b45a"/>`;
 s+=`<circle cx="200" cy="80" r="30" fill="#fff6d6"/>${[-60,-30,0,30,60].map(d=>`<circle cx="${200+d}" cy="${100+Math.abs(d)/4}" r="6" fill="#fffbe6"/>`).join('')}`;
 for(let i=0;i<10;i++)s+=`<circle cx="${20+i*40}" cy="${760+(i%2)*12}" r="16" fill="#2a0a14" opacity=".9"/>`;return s},
cathedral(k){let s=`<defs>${lg('s'+k,'#cfc3b0','#8f8273')}${glow('c'+k,'#fff3cf')}</defs><rect width="400" height="800" fill="url(#s${k})"/>`;
 s+=`<path d="M60 0 L60 420 Q200 200 340 420 L340 0 Z" fill="#e8dfcf"/><path d="M90 0 L90 400 Q200 230 310 400 L310 0 Z" fill="#d9ccb6"/>`;
 s+=`<ellipse cx="200" cy="120" rx="120" ry="70" fill="#efe6d4"/><ellipse cx="200" cy="120" rx="80" ry="45" fill="#c9a24a" opacity=".35"/><circle cx="200" cy="120" r="22" fill="#fff6d6"/>`;
 [[40,'l'],[360,'r']].forEach(([x])=>{s+=`<rect x="${x-22}" y="120" width="44" height="560" fill="#ede4d2"/><rect x="${x-28}" y="110" width="56" height="20" fill="#d6c7ad"/><rect x="${x+8}" y="120" width="14" height="560" fill="#000" opacity=".08"/>`});
 s+=`<path d="M150 470 L150 300 Q200 230 250 300 L250 470 Z" fill="#7da0c9"/><path d="M200 250 V470 M150 360 H250" stroke="#5b4a3a" stroke-width="4"/><path d="M160 300 L200 270 L240 300 Z" fill="#c84b5a" opacity=".8"/><rect x="160" y="370" width="35" height="90" fill="#e7c25a" opacity=".7"/><rect x="205" y="370" width="35" height="90" fill="#6aa06a" opacity=".7"/>`;
 s+=`<polygon points="150,470 250,470 330,800 70,800" fill="#fff4d0" opacity=".22"/>`;
 s+=`<rect y="560" width="400" height="240" fill="#a89a86"/>`;for(let r=0;r<4;r++){const y=580+r*55;s+=`<rect x="10" y="${y}" width="150" height="16" fill="#5e4532"/><rect x="240" y="${y}" width="150" height="16" fill="#5e4532"/><rect x="10" y="${y+16}" width="150" height="20" fill="#4a3526"/><rect x="240" y="${y+16}" width="150" height="20" fill="#4a3526"/>`}
 for(let i=0;i<7;i++)s+=`<rect x="${172+i*9}" y="520" width="4" height="22" fill="#fffaf0"/><ellipse cx="${174+i*9}" cy="516" rx="3" ry="6" fill="#ffb347"/>`;s+=`<circle cx="200" cy="520" r="50" fill="url(#c${k})" opacity=".6"/>`;return s},
river(k){let s=`<defs>${lg('s'+k,'#bfe0f3','#f3f1e4')}${lg('w'+k,'#9cc8d8','#5f98ae')}</defs><rect width="400" height="800" fill="url(#s${k})"/><ellipse cx="300" cy="120" rx="80" ry="18" fill="#fff" opacity=".7"/>`;
 s+=`<path d="M0 360 Q100 330 200 350 Q300 320 400 345 L400 440 L0 440 Z" fill="#9cc08e"/><g transform="translate(300,250)"><path d="M-20 110 L20 110 L14 0 L-14 0 Z" fill="#e8dccb"/>${[0,1,2,3].map(i=>`<path d="M${-30+i*4} ${10+i*25} L${30-i*4} ${10+i*25} L0 ${-8+i*25} Z" fill="#c84b5a"/>`).join('')}</g>`;
 s+=`<rect y="430" width="400" height="140" fill="url(#w${k})"/>`;for(let i=0;i<18;i++)s+=`<path d="M${(i*59)%400} ${450+(i*23)%110} q12 -4 24 0" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>`;
 s+=`<g transform="translate(150,500)"><path d="M-60 0 Q0 26 60 0 L50 14 Q0 34 -50 14 Z" fill="#8a5a3c"/><path d="M-50 2 Q0 20 50 2" stroke="#f2b5c6" stroke-width="5" fill="none"/></g>`;
 s+=`<path d="M0 560 Q200 530 400 560 L400 800 L0 800 Z" fill="#8fb87e"/>`;
 s+=`<rect x="20" y="160" width="14" height="420" fill="#6d5a48"/><ellipse cx="60" cy="230" rx="90" ry="90" fill="#7fa86c" opacity=".9"/>`;for(let i=0;i<20;i++){const x=-10+i*9;s+=`<path d="M${x} ${200+i%4*12} Q${x+4} ${380} ${x-4} ${560}" stroke="#6a9a5a" stroke-width="3" fill="none" opacity=".85"/>`}
 for(let i=0;i<3;i++)s+=`<g transform="translate(${260+i*45},${620+i%2*30})"><path d="M-30 30 L0 -20 L30 30 Z" fill="#fdfbf6"/><path d="M0 -20 L0 -30" stroke="#c9a24a" stroke-width="3"/></g>`;
 for(let i=0;i<14;i++)s+=`<circle cx="${(i*71)%400}" cy="${700+(i*17)%80}" r="5" fill="${i%2?'#f2a7b8':'#fff'}"/>`;return s},
ball(k,night){const W=night?['#3a3263','#5b4b7f']:['#fde9ec','#f2cbd5'],win=night?'#26315f':'#fff1c9',fl=night?'#4a3e66':'#ecd6bb';
 let s=`<defs>${lg('s'+k,W[0],W[1])}${glow('c'+k,'#fff1c4')}<pattern id="p${k}" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(1,.5) rotate(45)"><rect width="40" height="40" fill="${fl}"/><rect width="20" height="20" fill="${night?'#3c3156':'#f6e6cf'}"/><rect x="20" y="20" width="20" height="20" fill="${night?'#3c3156':'#f6e6cf'}"/></pattern></defs><rect width="400" height="800" fill="url(#s${k})"/>`;
 [[45,'w'],[160,'w'],[275,'w']].forEach(([x])=>{s+=`<path d="M${x} 520 L${x} 230 Q${x+40} 170 ${x+80} 230 L${x+80} 520 Z" fill="${win}" stroke="#fbf6ef" stroke-width="5"/><path d="M${x+40} 190 V520 M${x} 360 H${x+80}" stroke="#fbf6ef" stroke-width="3"/>`;if(night)s+=stars(6,x,1).replace(/cx="([\d.]+)" cy="([\d.]+)"/g,(m,a,b)=>`cx="${f1(x+6+a*.17)}" cy="${f1(250+a*.6)}"`)});
 if(night)s+=`<circle cx="190" cy="270" r="16" fill="#f6f0d8"/>`;
 [10,125,240,355].forEach(x=>s+=`<rect x="${x}" y="150" width="34" height="460" fill="${night?'#d8d0e6':'#fbf6ef'}"/><rect x="${x+24}" y="150" width="10" height="460" fill="#000" opacity=".08"/><rect x="${x-6}" y="140" width="46" height="18" fill="#d6b45a"/><rect x="${x-6}" y="600" width="46" height="16" fill="#d6b45a"/>`);
 s+=`<path d="M0 120 Q100 170 200 120 Q300 170 400 120" stroke="${night?'#8b6fb0':'#f2a7b8'}" stroke-width="10" fill="none"/>`;for(let i=0;i<14;i++){const x=i*30,y=120+Math.abs(Math.sin(i/6.6*Math.PI))*36;s+=`<circle cx="${x}" cy="${f1(y)}" r="9" fill="${i%2?'#fff':'#f7b6c5'}"/>`}
 s+=`<rect y="610" width="400" height="190" fill="url(#p${k})"/>`;
 [[110,90],[300,110]].forEach(([x,y])=>s+=`<circle cx="${x}" cy="${y}" r="${night?120:95}" fill="url(#c${k})" opacity="${night?.75:.6}"/><path d="M${x-30} ${y-10} L${x+30} ${y-10} L${x} ${y+40} Z" fill="#fffbe6" opacity=".85"/>${[-24,-12,0,12,24].map(d=>`<circle cx="${x+d}" cy="${y+14-Math.abs(d)/2}" r="3" fill="#fff"/>`).join('')}`);
 const gc=night?['#7a5ea8','#a04a72','#3d5f8f','#5d4a8a']:['#a9c9ee','#f2b5c6','#c8b6e8','#f3d38c'];
 for(let i=0;i<9;i++){const x=20+i*46,y=560+(i%3)*14;s+=`<g opacity=".55"><circle cx="${x}" cy="${y-38}" r="11" fill="${night?'#c9a9b8':'#e8c4a8'}"/><path d="M${x-22} ${y+52} Q${x} ${y-40} ${x+22} ${y+52} Z" fill="${gc[i%4]}"/></g>`}
 return s},
ballnight(k){return BG.ball(k,1)},
terrace(k){let s=`<defs>${lg('s'+k,'#191c42','#4b3f73')}${glow('c'+k,'#ffcf7a')}</defs><rect width="400" height="800" fill="url(#s${k})"/>${stars(60,3,420)}<circle cx="310" cy="130" r="34" fill="#f6f0d8"/><circle cx="310" cy="130" r="60" fill="#f6f0d8" opacity=".12"/><path d="M0 470 Q40 400 90 440 Q130 380 190 430 Q250 370 310 420 Q360 390 400 430 L400 580 L0 580 Z" fill="#22343a"/><path d="M0 520 Q80 480 160 510 Q260 470 400 505 L400 580 L0 580 Z" fill="#2e4646"/><path d="M0 300 Q200 360 400 300" stroke="#3a2e40" stroke-width="2" fill="none"/>`;
 for(let i=1;i<8;i++){const x=i*50,y=300+Math.sin(i/8*Math.PI)*52;s+=`<circle cx="${x}" cy="${f1(y+14)}" r="28" fill="url(#c${k})"/><rect x="${x-6}" y="${f1(y+4)}" width="12" height="18" rx="3" fill="#ffd27a"/>`}
 s+=`<rect x="0" y="0" width="70" height="800" fill="#ffd98a" opacity=".12"/><rect y="560" width="400" height="22" fill="#e1d9cd"/>`;for(let x=6;x<400;x+=28)s+=`<path d="M${x} 582 q-6 20 0 40 q6 20 0 58 h14 q-6 -38 0 -58 q6 -20 0 -40 Z" fill="#d4ccbf"/>`;
 s+=`<rect y="680" width="400" height="16" fill="#e1d9cd"/><rect y="696" width="400" height="104" fill="#7d7590"/>`;return s}
};
function bg(name){const k=++K;return wrap(BG[name](k),k)}
return {draw,bg,sh,SKINS,HAIRC,EYEC,LIPC};
})();
