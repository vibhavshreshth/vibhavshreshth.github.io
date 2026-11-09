/* Projects
   Renders project cards, filter tabs and the typing demo. */

const P=document.getElementById('projects');
P.innerHTML=projects.map((p,i)=>`<article class="proj" data-c="${p.c.join('|')}">
 <div class="stage" style="background:${p.bg}"><div class="prompt"><span style="opacity:.5">› </span><span class="typed" data-txt="${p.p}"></span><span class="caret"></span><div class="bar"><i></i></div></div></div>
 <div><div class="tags">${p.c.map(c=>`<span>${c}</span>`).join('')}</div><h3>${p.t}</h3>
 <p class="meta">${p.c[0]} · ${p.y} · ${p.role}</p><p style="color:var(--muted)">${p.d}</p>
 <ul>${p.f.map(x=>`<li>${x}</li>`).join('')}</ul><a class="more" href="#">Learn more →</a></div></article>`).join('');
const cats=['All',...new Set(projects.flatMap(p=>p.c))];
const F=document.getElementById('filters'),C=document.getElementById('count');
F.innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}">${c}<sup>${c==='All'?projects.length:projects.filter(p=>p.c.includes(c)).length}</sup></button>`).join('');
function filter(c){let s=0;P.querySelectorAll('.proj').forEach(el=>{const ok=c==='All'||el.dataset.c.split('|').includes(c);el.classList.toggle('hide',!ok);if(ok)s++});C.textContent=`Showing ${s} of ${projects.length} projects`}
F.onclick=e=>{const b=e.target.closest('button');if(!b)return;F.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');filter(b.dataset.c)};filter('All');
function typeLoop(el){const t=el.dataset.txt,bar=el.parentNode.querySelector('.bar i');let i=0;el.textContent='';bar.style.transition='none';bar.style.width='0';
 const ti=setInterval(()=>{el.textContent=t.slice(0,++i);if(i>=t.length){clearInterval(ti);requestAnimationFrame(()=>{bar.style.transition='width 2s';bar.style.width='100%'});setTimeout(()=>typeLoop(el),3500)}},55)}
document.querySelectorAll('.typed').forEach((el,i)=>setTimeout(()=>typeLoop(el),i*400));
