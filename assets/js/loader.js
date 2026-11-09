(function () {
  const loader = document.getElementById("loader");
  const num = document.getElementById("loadNum");
  if (!loader || !num) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reduce ? 0 : 1100;
  const start = performance.now();
  function tick(now) {
    const p = duration ? Math.min(1, (now - start) / duration) : 1;
    num.textContent = String(Math.round(p * 100)).padStart(3, "0");
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(() => {
      loader.classList.add("done");
      document.dispatchEvent(new Event("loaded"));
    }, 150);
  }
  requestAnimationFrame(tick);
})();
