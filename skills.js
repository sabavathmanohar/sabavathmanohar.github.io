if ("IntersectionObserver" in window && matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const observer = new IntersectionObserver((entries) => {
    let visibleIndex = 0;
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.style.setProperty("--reveal-delay", `${Math.min(visibleIndex, 4) * 70}ms`);
      target.classList.add("is-revealed");
      observer.unobserve(target);
      visibleIndex += 1;
    }
  }, { threshold: 0.15 });

  document.querySelectorAll(".skill-card").forEach((card) => observer.observe(card));
}
