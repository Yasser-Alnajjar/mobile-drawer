document.body.addEventListener("touchstart", handleTouchStart);
document.body.addEventListener("touchmove", handleTouchMove);
document.body.addEventListener("touchend", handleTouchEnd);
document.body.addEventListener("touchcancel", handleTouchCancel);

function handleTouchStart(e) {
  console.log("TouchStart");
}
function handleTouchMove(e) {
  console.log("TouchMove");
}
function handleTouchEnd(e) {
  console.log("TouchEnd");
}
function handleTouchCancel(e) {
  console.log("TouchCancel");
}
