/* Stack
   Renders the tool grid. */

document.getElementById('tools').innerHTML=tools.map(([n,c])=>`<div class="tool"><i style="background:${c}">${n[0]}</i>${n}</div>`).join('');
