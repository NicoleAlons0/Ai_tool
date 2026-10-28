(() => {
  function initARMotion() {
    if (document.querySelector(".ar-overlay")) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const overlay = document.createElement("div");
    overlay.className = "ar-overlay";
    overlay.setAttribute("aria-hidden", "true");

    for (let i = 0; i < 2; i++) {
      const ring = document.createElement("div");
      ring.className = "ar-ring";
      overlay.appendChild(ring);
    }

    document.body.appendChild(overlay);

    if (window.matchMedia("(hover: hover)").matches) {
      const cursor = document.createElement("div");
      cursor.className = "ar-cursor";
      cursor.setAttribute("aria-hidden", "true");
      document.body.appendChild(cursor);

      let targetX = -300;
      let targetY = -300;
      let currentX = -300;
      let currentY = -300;

      document.addEventListener("pointermove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        cursor.style.opacity = "1";
      }, { passive: true });

      function animateCursor() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
      }

      animateCursor();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ar-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    function prepareReveal(element) {
      if (!element.matches("main section, main article, .ar-animate")) return;
      if (!element.classList.contains("ar-reveal")) {
        element.classList.add("ar-reveal");
      }
      if (!element.classList.contains("ar-visible")) observer.observe(element);
    }

    function prepareTilt(card) {
      if (!card.matches(".ar-tilt") || card.dataset.arTiltReady) return;
      card.dataset.arTiltReady = "true";

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - y) * 10;
        const rotateY = (x - 0.5) * 10;
        card.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    }

    document.querySelectorAll(
      "main section, main article, .ar-animate, .ar-tilt"
    ).forEach((element) => {
      prepareReveal(element);
      prepareTilt(element);
    });

    const pageObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          prepareReveal(node);
          prepareTilt(node);
          node.querySelectorAll(
            "main section, main article, .ar-animate, .ar-tilt"
          ).forEach((element) => {
            prepareReveal(element);
            prepareTilt(element);
          });
        });
      });
    });

    pageObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initARMotion);
  } else {
    initARMotion();
  }
})();
