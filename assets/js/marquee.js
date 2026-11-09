/* Duplicate the logo list so the CSS loop (translateX -50%) is seamless. */
(function () {
  const track = document.getElementById("track");
  if (!track) return;
  [...track.children].forEach(el => {
    const copy = el.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });
})();
