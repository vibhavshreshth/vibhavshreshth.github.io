/* Timeline
   Live duration for the current job in the Timeline data (#tlData in index.html),
   counting both the first and the current month. Runs before projects.js. */

document.querySelectorAll('#tlData [data-since]').forEach(el=>{
  const [y,m]=el.dataset.since.split('-').map(Number),now=new Date();
  const total=(now.getFullYear()-y)*12+now.getMonth()+1-m+1,yrs=Math.floor(total/12),mos=total%12;
  const parts=[];if(yrs)parts.push(yrs+(yrs>1?' yrs':' yr'));if(mos)parts.push(mos+(mos>1?' mos':' mo'));
  const dur=document.createElement('span');dur.className='dur';dur.textContent='· '+parts.join(' ');
  el.append(' ',dur);
});
