/* Theme
   Light/dark switch, auto-fitting hero titles and the glitch → cyberpunk → new-theme transition. */

const root=document.documentElement,tb=document.getElementById('themeBtn');
try{const s=localStorage.getItem('theme');root.dataset.theme=(s==='light')?'light':'dark'}catch(e){root.dataset.theme='dark'}
const syncIcon=()=>tb.setAttribute('aria-checked',root.dataset.theme==='dark');syncIcon();
/* Shrink rotating roles so the longest one always fits on one line */
function fitRoles(){const r=document.querySelector('.roles');r.style.fontSize='';
  const max=Math.max(...[...r.querySelectorAll('li')].map(li=>li.offsetWidth)),avail=r.parentElement.clientWidth;
  if(max>avail)r.style.fontSize=(parseFloat(getComputedStyle(r).fontSize)*avail/max*0.97)+'px'}
fitRoles();addEventListener('resize',fitRoles);document.fonts&&document.fonts.ready.then(fitRoles);
function applyTheme(t,save){root.dataset.theme=t;fitRoles();if(save)try{localStorage.setItem('theme',t)}catch(e){}}
/* Theme transition — change T to change the total length (now 200ms):
     0-20%  : heavy glitch on the current theme, white flash (11-25%)
    20-82%  : cyberpunk site visible
    73-87%  : heavy glitch + black flash, target theme swaps in at 82%
    87-100% : glitch fades out                                           */
const gl=document.getElementById('glitch');let glitching=false;
const R=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.random()*a.length|0];
tb.onclick=()=>{
  const target=root.dataset.theme==='dark'?'light':'dark';
  tb.setAttribute('aria-checked',target==='dark');            /* slide the switch right away */
  const calm=matchMedia('(prefers-reduced-motion: reduce)').matches; /* reduce-motion devices: same effect, no shaking */
  if(glitching)return;glitching=true;
  const bs=document.body.style;
  document.body.classList.add('glitching');gl.classList.add('on');
  const cols=['#ff00c8','#00f0ff','#f7ff3c','#ffffff'],t0=performance.now(),T=200;let phase=0;
  (function frame(t){
    const e=t-t0;
    const k=e<.2*T?1:e<.73*T?.35:e<.87*T?1:Math.max(0,1-(e-.87*T)/(.13*T));   /* glitch intensity */
    if(phase===0&&e>=.2*T){applyTheme('cyber');phase=1}
    if(phase===1&&e>=.82*T){applyTheme(target,true);phase=2}
    let h='';
    for(let i=0,n=Math.round(R(4,10)*k);i<n;i++)
      h+=`<div class="slice" style="top:${R(0,100)}%;height:${R(8,140)}px;transform:translateX(${R(-120,120)}px);--h:${R(0,360)}deg"></div>`;
    for(let i=0,n=Math.round(R(6,16)*k);i<n;i++)
      h+=`<div class="bar" style="top:${R(0,100)}%;height:${R(2,36)}px;background:${pick(cols)};transform:translateX(${R(-60,60)}px);opacity:${R(.5,1)}"></div>`;
    if(k>.5)h+=`<div class="noise" style="transform:translate(${R(-40,40)}px,${R(-40,40)}px)"></div>`;
    if(e>=.11*T&&e<.25*T)h+=`<div class="flash" style="background:#fff"></div>`;
    if(e>=.73*T&&e<.87*T)h+=`<div class="flash" style="background:#000"></div>`;
    gl.innerHTML=h;
    const m=calm?0:26*k;
    bs.setProperty('--gt',`translate(${R(-m,m)}px,${R(-m/2,m/2)}px) skewX(${R(-6,6)*k}deg)`);
    bs.setProperty('--gf',Math.random()<.2*k?`invert(1) hue-rotate(${R(0,360)}deg)`:
      `drop-shadow(${R(3,9)*k}px 0 #ff00c8) drop-shadow(${-R(3,9)*k}px 0 #00f0ff) contrast(${1+.5*k})`);
    if(e<T)requestAnimationFrame(frame);
    else{if(phase<2)applyTheme(target,true);
      gl.classList.remove('on');gl.innerHTML='';document.body.classList.remove('glitching');bs.removeProperty('--gt');bs.removeProperty('--gf');glitching=false}
  })(t0);
};
