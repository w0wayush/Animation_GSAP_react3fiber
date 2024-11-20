var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
var overlay = document.querySelector("#overlay");

main.addEventListener("mousemove", function(dets) {
  // console.log("mouse moved")
  // console.log(dets)
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.7,
    ease: "back.out"
  })
})

imageDiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "view more...";
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "rgba(99, 95, 95, 5)",
  });
});

imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "",
  });
});