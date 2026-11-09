(function () {
  const answer = window.answerQuestion;

  // "Ask me anything" box in About
  const askForm = document.getElementById("askForm");
  const askIn = document.getElementById("askIn");
  const askAns = document.getElementById("askAns");
  const show = q => { if (q.trim()) askAns.textContent = answer(q); };
  askForm.addEventListener("submit", e => { e.preventDefault(); show(askIn.value); askIn.value = ""; });
  document.querySelectorAll(".chips button").forEach(b =>
    b.addEventListener("click", () => show(b.textContent)));

  // Floating chat bubble
  const fab = document.getElementById("chatFab");
  const box = document.getElementById("chatBox");
  const log = document.getElementById("chatLog");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatIn");
  const add = (text, me) => {
    const p = document.createElement("p");
    p.textContent = text;
    if (me) p.className = "me";
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  };
  fab.addEventListener("click", () => {
    const open = box.classList.toggle("open");
    fab.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    add(q, true);
    input.value = "";
    setTimeout(() => add(answer(q)), 350);
  });
})();
