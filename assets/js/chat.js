/* Chat
   "Ask me anything" box (keyword answers from data.js, no server). */

const reply=q=>(kb.find(([r])=>r.test(q))||[,"Good question! I'm still writing that answer — try asking about learning, brands, tools or contact."])[1];
const askAns=document.getElementById('askAns');
document.getElementById('askForm').onsubmit=e=>{e.preventDefault();const v=askIn.value.trim();if(v)askAns.textContent=reply(v)};
document.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>{askIn.value=b.textContent;askAns.textContent=reply(b.textContent)});
/* PHASE 1: floating "Ask about Vibhav" chat button. Restore this with its markup in index.html.
const box=document.getElementById('chatBox'),log=document.getElementById('chatLog');
chatFab.onclick=()=>box.classList.toggle('open');
chatForm.onsubmit=e=>{e.preventDefault();const v=chatIn.value.trim();if(!v)return;log.innerHTML+=`<p class="me"></p>`;log.lastChild.textContent=v;chatIn.value='';setTimeout(()=>{log.innerHTML+=`<p>${reply(v)}</p>`;log.scrollTop=1e4},400)};
*/
