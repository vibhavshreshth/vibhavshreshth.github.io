/* Stack
   Renders the tool names and runs their colour wave only while they are on screen. */

(function(){
  const grid=document.getElementById('tools');
  grid.innerHTML=tools.map(([n,c],i)=>`<div class="tool" style="--i:${i};--c:${c}">${n}</div>`).join('');
  new IntersectionObserver(([e])=>grid.classList.toggle('live',e.isIntersecting)).observe(grid);
})();
