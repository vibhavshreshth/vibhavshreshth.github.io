/* Projects
   Renders the Work section as the Timeline's stops, each with what was done there.
   Every Timeline entry (#tlData in index.html) is a stop; jobs carry their project cards.
   Two sideways-scrolling filter strips, by Timeline stop (main) and by skill, plus Reset.
   Runs after timeline.js so live durations are already in place.
   Wrapped in a function so its names don't clash with other scripts. */

(function(){
const P=document.getElementById('projects');
const stops=[...document.querySelectorAll('#tlData>li')].map(li=>{
  /* Text after the title: the first line is the organisation, any further lines are details */
  const b=li.querySelector('b'),lines=[''];
  for(let n=b.nextSibling;n;n=n.nextSibling)n.nodeName==='BR'?lines.push(''):lines[lines.length-1]+=n.textContent;
  const [org,...more]=lines.map(s=>s.trim()).filter(Boolean);
  return {id:li.dataset.work,role:b.textContent,org,more,yr:li.querySelector('.yr').innerHTML,intern:!!li.querySelector('.intern'),during:li.dataset.during,
          short:li.dataset.short||org.split(/[,·]/)[0].replace(/\s*Pvt\. Ltd\./,'').trim(),
          count:projects.filter(p=>p.stop===li.dataset.work).length};
});
const skillsOf=p=>[...p.c,...(p.s||[])];
const badge='<span class="intern">Internship</span>';

P.innerHTML=stops.map(st=>`<div class="stop${st.count?'':' no-work'}${st.during?' during':''}" id="work-${st.id}" data-stop="${st.id}">
 <div class="stop-rail"><span class="yr">${st.yr}</span>${st.intern?badge:''}<b>${st.role}</b><span class="stop-org">${st.org}</span>${st.more.map(m=>`<span class="stop-more">${m}</span>`).join('')}${st.during?`<span class="stop-more">During the ${st.during}</span>`:''}</div>
 <div class="stop-work">${projects.filter(p=>p.stop===st.id).map(p=>`<article class="proj" data-s="${skillsOf(p).join('|')}">
  <div><h3>${p.t}</h3><p class="meta">${p.role===st.role?p.y:p.y+' · '+p.role}</p><p class="proj-d">${p.d}</p><div class="tags">${p.c.map(c=>`<span class="cat">${c}</span>`).join('')}${(p.s||[]).map(s=>`<span>${s}</span>`).join('')}</div></div>
  <ul>${p.f.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('')}</div></div>`).join('');

/* Timeline strip: a dot per stop on one line, like the Work section's line but sideways */
const F=document.getElementById('filters'),S=document.getElementById('skillStrip'),C=document.getElementById('count'),reset=document.getElementById('fReset');
const dates=yr=>{const t=document.createElement('span');t.innerHTML=yr;t.querySelectorAll('.dur').forEach(d=>d.remove());return t.textContent.trim()};
F.innerHTML=`<button class="on" type="button" data-stop="All"><b>All</b><small>${projects.length} projects</small></button>`+stops.map(st=>
  `<button type="button" data-stop="${st.id}"><b>${st.short}</b><small>${dates(st.yr)}</small>${st.intern?'<small class="intern">Internship</small>':''}</button>`).join('');
/* Skill strip: every tag used on a card, A–Z */
S.innerHTML='<button class="on" type="button" data-skill="">All skills</button>'+[...new Set(projects.flatMap(skillsOf))].sort((a,b)=>a.localeCompare(b)).map(s=>`<button type="button" data-skill="${s}">${s}</button>`).join('');

let stop='All',skill='';
function filter(){
  let n=0;
  P.querySelectorAll('.stop').forEach(st=>{
    let shown=0;
    st.querySelectorAll('.proj').forEach(el=>{const ok=(stop==='All'||st.dataset.stop===stop)&&(!skill||el.dataset.s.split('|').includes(skill));el.classList.toggle('hide',!ok);if(ok)shown++});
    /* A stop with no projects (education, the CAT years) shows when picked, or under All with no skill picked */
    const keep=st.classList.contains('no-work')?(stop===st.dataset.stop||(stop==='All'&&!skill)):shown>0;
    st.classList.toggle('hide',!keep);n+=shown;
  });
  C.textContent=n?`Showing ${n} of ${projects.length} projects`:stop!=='All'&&!skill?'No projects at this stop':'No projects match both filters';
  reset.disabled=stop==='All'&&!skill;
}
/* Mark the picked button and slide it to the middle of its strip */
const choose=(strip,b)=>{strip.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
  strip.scrollTo({left:b.offsetLeft-(strip.clientWidth-b.offsetWidth)/2,behavior:'smooth'})};
F.onclick=e=>{const b=e.target.closest('button');if(!b)return;choose(F,b);stop=b.dataset.stop;filter()};
S.onclick=e=>{const b=e.target.closest('button');if(!b)return;choose(S,b);skill=b.dataset.skill;filter()};
reset.onclick=()=>{stop='All';skill='';choose(F,F.firstElementChild);choose(S,S.firstElementChild);filter()};
filter();

/* Sticky filter bar: tell the CSS how tall the top menu and the stuck bar are,
   and mark the bar as stuck once it reaches the menu (it then drops its labels). */
const work=document.getElementById('work'),bar=document.getElementById('workFilters'),hd=document.querySelector('header');
const measure=()=>{
  work.style.setProperty('--hd',hd.offsetHeight+'px');
  const stuck=bar.getBoundingClientRect().top<=hd.offsetHeight+1&&work.getBoundingClientRect().bottom>hd.offsetHeight+bar.offsetHeight;
  bar.classList.toggle('stuck',stuck);
  work.style.setProperty('--wf',bar.offsetHeight+'px');
};
addEventListener('scroll',measure,{passive:true});addEventListener('resize',measure);measure();
})();
