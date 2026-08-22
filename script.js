// ---------- scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// ---------- count-up numbers ----------
const counters = document.querySelectorAll("[data-count]");
const countIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countIo.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
counters.forEach((el) => countIo.observe(el));

// ---------- ticker: duplicate content for seamless loop ----------
document.querySelectorAll(".ticker-track").forEach((track) => {
  track.innerHTML += track.innerHTML;
});

// ---------- mobile nav toggle ----------
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

// ---------- custom inverting round cursor ----------
(function () {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reducedMotion) return;

  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.appendChild(ring);
  document.documentElement.classList.add("custom-cursor-active");

  window.addEventListener("mousemove", (e) => {
    ring.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  const hoverSelector = "a, button, .card, .btn, summary, .faq-item";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverSelector)) ring.classList.add("cursor-ring--big");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverSelector)) ring.classList.remove("cursor-ring--big");
  });
})();
