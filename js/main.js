(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let rafId = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  function updateParallax() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

    document.documentElement.style.setProperty("--move-x", currentX + "deg");
    document.documentElement.style.setProperty("--move-y", currentY + "deg");

    rafId = requestAnimationFrame(updateParallax);
  }

  function onPointerMove(clientX, clientY) {
    targetX = (clientX - window.innerWidth / 2) * -0.005;
    targetY = (clientY - window.innerHeight / 2) * 0.005;
  }

  document.addEventListener("mousemove", (e) => {
    onPointerMove(e.clientX, e.clientY);
  });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  document.addEventListener("touchend", () => {
    targetX = 0;
    targetY = 0;
  });

  rafId = requestAnimationFrame(updateParallax);
})();
