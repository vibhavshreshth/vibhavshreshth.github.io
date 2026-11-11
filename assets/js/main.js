/* Misc
   Footer year. */

/* PHASE 1: cookie / storage notice. Restore this with its markup in index.html.
cookieOk.onclick=()=>{cookie.remove();try{localStorage.setItem('ck',1)}catch(e){}};
try{if(localStorage.getItem('ck'))cookie.remove()}catch(e){}
*/

document.getElementById('yr').textContent=new Date().getFullYear()+' ©';
