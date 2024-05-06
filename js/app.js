document.body.addEventListener("touchstart", handleTouchStart);
document.body.addEventListener("touchmove", handleTouchMove);
document.body.addEventListener("touchend", handleTouchEnd);
document.body.addEventListener("touchcancel", handleTouchCancel);
const drag = document.querySelector(".drag");
window.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  drag.style.top = e.clientY + "px";
  drag.style.left = e.clientX + "px";
});
function handleTouchStart(e) {
  console.log(e.clientX);
  drag.style.top = e.clientY + "px";
  drag.style.left = e.clientX + "px";
}
function handleTouchMove(e) {
  console.log(e.clientX);
  drag.style.top = e.clientY + "px";
  drag.style.left = e.clientX + "px";
}
function handleTouchEnd(e) {
  console.log(e.clientX);
  drag.style.top = e.clientY + "px";
  drag.style.left = e.clientX + "px";
}
function handleTouchCancel(e) {
  console.log(e.clientX);
  drag.style.top = 0;
  drag.style.left = 0;
}
