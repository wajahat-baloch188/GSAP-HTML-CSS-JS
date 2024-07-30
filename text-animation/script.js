var h1 = document.querySelector("h1");
var h1Text = document.querySelector("h1").textContent;
function breakTheText() {
  var splittedText = h1Text.split("");

  var clutter = "";
  var halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach(function (elem, id) {
    if (id < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".a", {
  y: 70,
  duration: 0.5,
  delay: 0.3,
  opacity: 0,
  stagger: 0.15,
});

gsap.from(".b", {
  y: 70,
  duration: 0.5,
  delay: 0.3,
  opacity: 0,
  stagger: -0.15,
});
