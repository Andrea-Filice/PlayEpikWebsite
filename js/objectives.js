document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const isMobile = window.innerWidth <= 600;
  const animations = [
    { id: "counter", position: 400, animation: "counter 3s forwards" },
    { id: "counter2", position: 500, animation: "counter2 3s forwards" },
    { id: "counter3", position: 1200, animation: "counter3 3s forwards" },
    { id: "counter5", position: 1300, animation: "counter5 3s forwards" },
    { id: "counter4", position: 2000, animation: "counter4 3s forwards" },
  ];

  animations.forEach(({ id, position, animation }) => {
    const triggerPosition = isMobile ? position - 300 : position;
    if (scrollPosition >= triggerPosition) {
      const el = document.getElementById(id);
      if (el && el.style.animation !== animation) {
        el.style.animation = animation;
      }
    }
  });
});