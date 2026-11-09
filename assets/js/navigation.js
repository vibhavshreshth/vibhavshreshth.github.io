/* Navigation
   Header background on scroll, mobile menu, active link and scroll-reveal. */

const hd=document.querySelector('header');const onS=()=>hd.classList.toggle('scrolled',scrollY>20);addEventListener('scroll',onS,{passive:true});onS();

const mm=document.getElementById('mobileMenu');
document.getElementById('menuBtn').onclick=()=>mm.classList.toggle('open');
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>mm.classList.remove('open'));

const links=[...document.querySelectorAll('#pill a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['home','work','experiments','about','stack'].forEach(id=>so.observe(document.getElementById(id)));
