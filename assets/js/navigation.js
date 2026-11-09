(function () {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll("#pill a");

  // Header background once scrolled
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const setMenu = open => {
    menu.classList.toggle("open", open);
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  // Active link follows the section in view
  const sections = [...links].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  // Scroll reveal
  window.revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => window.revealObserver.observe(el));
})();
