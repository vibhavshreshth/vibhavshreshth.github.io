/* Notify Me!
   Form with a first name and either an email ID or a phone number (picked from a dropdown).
   Entries are emailed to NOTIFY_TO through FormSubmit (formsubmit.co), a free form-to-email service.
   One-time setup: the first submission sends an "Activate form" email to NOTIFY_TO. Click it once;
   until then submissions are not delivered and visitors see the error message below. */

(function(){
  const NOTIFY_TO='vibhav.shreshth@outlook.com';
  const ENDPOINT='https://formsubmit.co/ajax/'+NOTIFY_TO;

  const $=id=>document.getElementById(id);
  const dlg=$('notify'),form=$('notifyForm'),nameIn=$('notifyName'),type=$('notifyType'),inp=$('notifyIn'),
        nameErr=$('nameErr'),err=$('notifyErr'),sendErr=$('sendErr'),btn=$('notifySend'),done=$('notifyDone'),doneTitle=$('doneTitle');

  /* Checks */
  const isName=v=>/^[\p{L}][\p{L}' -]{0,39}$/u.test(v);            /* letters, spaces, apostrophes, hyphens */
  const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const digits=v=>v.replace(/\D/g,'');
  const isPhone=v=>/^\+?[\d\s()-]+$/.test(v)&&digits(v).length>=8&&digits(v).length<=15;
  const MODES={
    email:{type:'email',inputmode:'email',autocomplete:'email',placeholder:'you@example.com',check:isEmail,msg:'Please enter a valid email ID, like name@example.com.'},
    phone:{type:'tel',inputmode:'tel',autocomplete:'tel',placeholder:'+91 98765 43210',check:isPhone,msg:'Please enter a valid phone number: 8 to 15 digits, with an optional + and country code.'}
  };
  const mode=()=>MODES[type.value];

  /* Switching the dropdown changes the box to suit an email or a phone number */
  const applyMode=()=>{const m=mode();inp.type=m.type;inp.inputMode=m.inputmode;inp.autocomplete=m.autocomplete;inp.placeholder=m.placeholder;
    inp.value='';err.textContent='';inp.removeAttribute('aria-invalid')};
  type.addEventListener('change',()=>{applyMode();inp.focus()});

  const show=(field,box,msg)=>{box.textContent=msg;field.setAttribute('aria-invalid',msg?'true':'false')};
  const checkName=()=>{const ok=isName(nameIn.value.trim());show(nameIn,nameErr,ok?'':'Please enter your first name (letters only).');return ok};
  const checkContact=()=>{const ok=mode().check(inp.value.trim());show(inp,err,ok?'':mode().msg);return ok};
  /* Check a field when the visitor leaves it, and clear its message as soon as it's fixed */
  nameIn.addEventListener('blur',()=>{if(nameIn.value)checkName()});
  inp.addEventListener('blur',()=>{if(inp.value)checkContact()});
  nameIn.addEventListener('input',()=>{if(nameErr.textContent)checkName()});
  inp.addEventListener('input',()=>{if(err.textContent)checkContact()});

  const send=data=>fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
    .then(r=>r.json().then(j=>{if(!r.ok||String(j.success)!=='true')throw new Error(j.message||'Send failed')}));

  const open=e=>{
    e.preventDefault();
    $('mobileMenu').classList.remove('open');
    form.reset();applyMode();
    [nameErr,sendErr].forEach(p=>p.textContent='');nameIn.removeAttribute('aria-invalid');
    form.hidden=false;done.hidden=true;btn.disabled=false;btn.textContent='Notify Me!';
    dlg.showModal();nameIn.focus();
  };
  document.querySelectorAll('.notify-open').forEach(b=>b.addEventListener('click',open));
  dlg.querySelector('.notify-x').onclick=()=>dlg.close();
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});   /* click on the dimmed backdrop */

  form.onsubmit=e=>{
    e.preventDefault();
    sendErr.textContent='';
    const okName=checkName(),okContact=checkContact();
    if(!okName){nameIn.focus();return}
    if(!okContact){inp.focus();return}
    if(form.elements._honey.value)return;                            /* filled by a bot: drop it quietly */
    const name=nameIn.value.trim(),contact=inp.value.trim(),method=type.value==='email'?'Email ID':'Phone number';
    btn.disabled=true;btn.textContent='Sending…';
    send({
      'First name':name,
      'Contact method':method,
      [method]:contact,
      _subject:`Notify Me! request from ${name}`,
      _template:'table',
      _captcha:'false',
      ...(type.value==='email'?{_replyto:contact}:{})
    }).then(()=>{
      doneTitle.textContent=`Thank you, ${name}!`;
      form.hidden=true;done.hidden=false;
    }).catch(()=>{
      btn.disabled=false;btn.textContent='Notify Me!';
      sendErr.textContent='Sorry, that didn’t go through. Please try again, or email shreshth.vibhav@gmail.com.';
    });
  };
})();
