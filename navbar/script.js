const menuIcon = document.querySelector("#menu-icon");
const cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.4,
});
tl.from("#full h4", {
  x: 100,
  duration: 0.5,
  stagger: 0.28,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();

menuIcon.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
