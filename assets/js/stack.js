(function () {
  const el = document.getElementById("tools");
  if (!el) return;
  el.innerHTML = window.DATA.tools
    .map(t => `<div class="tool"><i>${t.icon}</i>${t.name}</div>`)
    .join("");
})();
