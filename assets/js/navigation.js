/* Navigation
   Header background on scroll, mobile menu, active link and scroll-reveal. */

const hd=document.querySelector('header');const onS=()=>hd.classList.toggle('scrolled',scrollY>20);addEventListener('scroll',onS,{passive:true});onS();

const mm=document.getElementById('mobileMenu');
document.getElementById('menuBtn').onclick=()=>mm.classList.toggle('open');
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>mm.classList.remove('open'));

const links=[...document.querySelectorAll('#pill a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
/* Several sections can be in view at once, so more than one link can be active */
const inView=new Set();
const so=new IntersectionObserver(es=>{
  es.forEach(e=>inView[e.isIntersecting?'add':'delete'](e.target.id));
  if(inView.size)links.forEach(a=>a.classList.toggle('active',inView.has(a.getAttribute('href').slice(1))));
},{rootMargin:'-45% 0px -50% 0px'});
['home','work','experiments','know-more','certificates'].forEach(id=>so.observe(document.getElementById(id)));

/* Desktop Home link: scripted scroll to the top, because browsers can skip CSS
   smooth scrolling when the system asks for reduced motion. Stops if the user scrolls. */
document.querySelector('#pill a[href="#home"]').addEventListener('click',e=>{
  e.preventDefault();
  history.replaceState(null,'','#home');
  const from=scrollY,start=performance.now(),dur=Math.min(1200,500+from/6);
  let stopped=false;const stop=()=>{stopped=true};
  addEventListener('wheel',stop,{once:true,passive:true});addEventListener('touchstart',stop,{once:true,passive:true});
  const step=now=>{
    if(stopped)return;
    const p=Math.min(1,(now-start)/dur),eased=1-Math.pow(1-p,3);
    scrollTo({top:from*(1-eased),behavior:'instant'});
    if(p<1)requestAnimationFrame(step);
    else{removeEventListener('wheel',stop);removeEventListener('touchstart',stop)}
  };
  requestAnimationFrame(step);
});
