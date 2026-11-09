/* Logo marquee
   Seamless infinite "Worked with" strip. */

/* Seamless loop: one group repeated until it's wider than the screen, then cloned once.
   The track slides exactly one group-width (-50%), so the restart is invisible. */
const tr=document.getElementById('track'),items=tr.innerHTML;
function buildMarquee(){
  tr.innerHTML=`<div class="grp">${items}</div>`;const g=tr.firstChild;
  while(g.offsetWidth<innerWidth*1.2)g.insertAdjacentHTML('beforeend',items);
  tr.appendChild(g.cloneNode(true));
  tr.style.setProperty('--dur',(g.offsetWidth/60)+'s'); /* constant ~60px/s on any screen */
}
buildMarquee();let mqT;addEventListener('resize',()=>{clearTimeout(mqT);mqT=setTimeout(buildMarquee,200)});
document.fonts&&document.fonts.ready.then(buildMarquee);
