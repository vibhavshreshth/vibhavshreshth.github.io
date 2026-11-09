/* Misc
   Cookie notice and footer year. */

try{if(localStorage.getItem('ck'))cookie.remove()}catch(e){}
cookieOk.onclick=()=>{cookie.remove();try{localStorage.setItem('ck',1)}catch(e){}};

document.getElementById('yr').textContent='© '+new Date().getFullYear();
