/* Theme switch: glitch → cyberpunk → new theme. T = total transition length (ms). */
(function () {
  const T = 900;
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const glitch = document.getElementById("glitch");
  if (!btn) return;

  function sync() {
    const dark = root.dataset.theme !== "light";
    btn.setAttribute("aria-checked", String(dark));
  }
  sync();

  let busy = false;
  btn.addEventListener("click", () => {
    if (busy) return;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    };
    if (reduce) return apply();

    busy = true;
    glitch.classList.remove("on"); void glitch.offsetWidth; glitch.classList.add("on");
    root.classList.add("glitching");
    setTimeout(() => root.classList.add("cyber"), T * 0.2);
    setTimeout(() => { root.classList.remove("cyber"); apply(); }, T * 0.7);
    setTimeout(() => { root.classList.remove("glitching"); glitch.classList.remove("on"); busy = false; }, T);
  });
})();
