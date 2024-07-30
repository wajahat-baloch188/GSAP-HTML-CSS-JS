let hamBtn = document.querySelector(".hamIcon");
let crossBtn = document.querySelector("nav i");

let tl = gsap.timeline();

tl.to("nav", {
  x: "-100%",
  duration: 0.4,
});

tl.from("h4", {
  x: 40,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

tl.from(crossBtn, {
  opacity: 0,
  duration: 0.3,
});

tl.pause();
hamBtn.addEventListener("click", () => {
  tl.play();
});
crossBtn.addEventListener("click", () => {
  tl.reverse();
});
