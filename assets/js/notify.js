/* Notify Me!
   Small form asking for an email ID or WhatsApp number.
   NOT CONNECTED YET: send() below only pretends. Link the Outlook form there before going live. */

(function(){
  const dlg=document.getElementById('notify'),form=document.getElementById('notifyForm'),inp=document.getElementById('notifyIn'),
        err=document.getElementById('notifyErr'),done=document.getElementById('notifyDone');

  const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone=v=>/^\+?[\d\s()-]+$/.test(v)&&v.replace(/\D/g,'').length>=8&&v.replace(/\D/g,'').length<=15;

  /* TODO: connect the Outlook form here, e.g. a fetch() to its submit URL */
  const send=contact=>Promise.resolve(contact);

  const open=e=>{
    e.preventDefault();
    document.getElementById('mobileMenu').classList.remove('open');
    form.hidden=false;done.hidden=true;err.textContent='';form.reset();
    dlg.showModal();inp.focus();
  };
  document.querySelectorAll('.notify-open').forEach(b=>b.addEventListener('click',open));
  dlg.querySelector('.notify-x').onclick=()=>dlg.close();
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});   /* click on the dimmed backdrop */

  form.onsubmit=e=>{
    e.preventDefault();
    const v=inp.value.trim();
    if(!isEmail(v)&&!isPhone(v)){err.textContent='Please enter a valid email ID or WhatsApp number.';inp.focus();return}
    send(v).then(()=>{form.hidden=true;done.hidden=false});
  };
})();
