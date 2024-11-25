var initialPath = `M 10 100 Q 600 100 1190 100`;

var finalPath = `M 10 100 Q 600 100 1190 100`;

var string = document.querySelector("#string");


string.addEventListener("mousemove", function(dets){
  // console.log(dets)
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`;
  gsap.to("svg path", {
    attr:{d:initialPath},
    duration: 0.2,
    ease: "power3.out",
    // yoyo: true,
  })
})

string.addEventListener("mouseleave", function() {
  // console.log("leave");
  gsap.to("svg path", {
    attr:{d:finalPath},
    duration: 2,
    ease: "elastic.out(1, 0.2)",
  })
});