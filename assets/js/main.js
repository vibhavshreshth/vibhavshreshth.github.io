(function () {
  // Footer year
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = "© " + new Date().getFullYear();

  // Cookie notice
  const cookie = document.getElementById("cookie");
  let seen = false;
  try { seen = localStorage.getItem("cookieOk") === "1"; } catch (e) {}
  if (!seen) setTimeout(() => cookie.classList.add("show"), 1800);
  document.getElementById("cookieOk").addEventListener("click", () => {
    cookie.classList.remove("show");
    try { localStorage.setItem("cookieOk", "1"); } catch (e) {}
  });

  // Rotating hero titles: shrink the font so the longest role fits the screen
  const roles = document.querySelector(".roles");
  function fitRoles() {
    if (!roles) return;
    roles.style.fontSize = "";
    const items = roles.querySelectorAll("li");
    const widest = Math.max(...[...items].map(li => {
      const r = document.createRange(); r.selectNodeContents(li);
      return r.getBoundingClientRect().width;
    }));
    const room = roles.parentElement.clientWidth;
    if (widest > room) roles.style.fontSize = (room / widest) + "em";
  }
  fitRoles();
  addEventListener("resize", fitRoles);
  if (document.fonts) document.fonts.ready.then(fitRoles);
})();
