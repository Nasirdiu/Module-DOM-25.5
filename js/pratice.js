const allcolor = document.querySelectorAll("h2");
for (const color of allcolor) {
  color.style.color = "red";
}
//change mouseover and mouseout
function change1() {
  document.getElementById("img").src = "./images/bags/bag-2.png";
}
function change2() {
  document.getElementById("img").src = "./images/bags/bag-1.png";
}
