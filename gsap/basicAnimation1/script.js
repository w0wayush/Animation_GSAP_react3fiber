gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%"
})

// gsap.from("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
// });

gsap.from("#box2", {
  x: 1000,
  //   y: 100,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%", 
});

gsap.from("h1", {
  opacity: 0,
  y: 30,
//   x: 500,
  duration: 1,
  delay: 1,
  color: "yellow",
  stagger: 0.3,
});


// gsap.to("h1", {
//   duration: 2,
//   x:500,
//   y:10,
//   delay: 1,
//   color: "yellow",
//   stagger: 0.3,
// });

// gsap.to("#box", {
//     x:1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat: -1,
//     borderRadius: "50%",
//     yoyo: true,
// })


gsap.to("#box3", {
    x:1200,
    duration: 2,
    delay: 1,
    rotate: 360
})

gsap.to("#box4", {
  x: 1200,
  backgroundColor: "yellow",
  duration: 2,
  borderRadius: "25%",
  delay: 3,
  rotate: 360,
});

gsap.to("#box5", {
  x: 1200,
  scale: 0.5,
//   backgroundColor: "lightblue",
  duration: 2,
  borderRadius: "50%",
  delay: 5,
  rotate: 360,
});