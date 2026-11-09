(function () {
  const filtersEl = document.getElementById("filters");
  const listEl = document.getElementById("projects");
  const countEl = document.getElementById("count");
  if (!filtersEl || !listEl) return;
  const projects = window.DATA.projects;
  const cats = ["All", ...new Set(projects.map(p => p.category))];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function render(cat) {
    const list = cat === "All" ? projects : projects.filter(p => p.category === cat);
    countEl.textContent = `Showing ${list.length} of ${projects.length} projects`;
    listEl.innerHTML = list.map((p, i) => `
      <article class="project" style="animation-delay:${i * 70}ms">
        <div class="meta"><span>${esc(p.category)}</span><span>${esc(p.year)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p class="stat">${esc(p.stat)}</p>
        <p>${esc(p.desc)}</p>
        <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </article>`).join("");
    filtersEl.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  }

  filtersEl.innerHTML = cats.map(c => `<button data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  filtersEl.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b) render(b.dataset.cat);
  });
  render("All");
})();
