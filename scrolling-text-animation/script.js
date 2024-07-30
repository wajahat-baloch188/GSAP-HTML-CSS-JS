function marqueAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        x: "-200%",
        repeat: -1,
        ease: "none",
        duration: 2,
      });

      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        x: "0%",
        repeat: 1,
        ease: "none",
        duration: 2,
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

marqueAnimation();
