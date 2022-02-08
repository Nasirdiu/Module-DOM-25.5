document.getElementById("lightblue-color").style.color = "lightblue";

document.getElementById("tomato-color").style.backgroundColor = "tomato";

document.getElementById("first-button").addEventListener("click", function () {
  console.log("Hello World !");
});

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

const removeButton=document.getElementsByClassName('buy-now-button');
// console.log(removeButton);
for(const remove of removeButton){
  // console.log(remove);
  remove.addEventListener('click',function(e){
    e.target.parentNode.removeChild(e.target);
  })

}
 
