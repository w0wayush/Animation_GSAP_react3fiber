var tl = gsap.timeline();

/* tl.to("#box1", {
    x: 1200,
    rotate: 360,
    duration: 2,
    delay:1,
    // yoyo: true,
    borderRadius: "50%"
})

tl.to("#box2", {
  x: 1200,
  rotate: 360,
  duration: 2,
  delay: 1,
//   yoyo: true,
  borderRadius: "50%",
});

tl.to("#box3", {
  x: 1200,
  rotate: 360,
  duration: 2,
  delay: 1,
//   yoyo: true,
  borderRadius: "50%",
}); */

tl.from("h2", {
    y:-20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from("h3", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3
});

tl.from("#heading1", {
    y:20,
    opacity: 0,
    duration: 0.5,
    scale:0.2
})