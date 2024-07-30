// gsap.to("#box", {
//   x: 500,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
// });

gsap.from("h1", {
  y: 30,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
});

const tl = gsap.timeline();
tl.to("#box1", {
  x: 700,
  duration: 1,
  delay: 1,
  rotate: 360,
});
tl.to("#box2", {
  x: 600,
  duration: 1,
  delay: 1,
});
tl.to("#box3", {
  x: 500,
  duration: 1,
  delay: 1,
  scale: 0.5,
});
