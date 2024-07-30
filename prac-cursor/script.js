let body = document.querySelector("body");
let imgBox = document.querySelector("#img-box");
let cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

imgBox.addEventListener("mouseenter", () => {
  cursor.innerHTML = "asd";
  cursor.style.opacity = 0.5;
  gsap.to(cursor, {
    scale: 4,
    duration: 1,
  });
});

imgBox.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  cursor.style.opacity = 1;
  gsap.to(cursor, {
    scale: 1,
    duration: 1,
  });
});
