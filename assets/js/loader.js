/* Loader
   Counts 000→100, then fades out. */

let n=0;const L=document.getElementById('loadNum');
const iv=setInterval(()=>{n+=Math.ceil(Math.random()*9);if(n>=100){n=100;clearInterval(iv);setTimeout(()=>document.getElementById('loader').classList.add('done'),250)}L.textContent=String(n).padStart(3,'0')},35);
