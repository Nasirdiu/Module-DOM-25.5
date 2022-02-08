
//shoes color
document.getElementById("lightblue-color").style.color = "lightblue";
// Backpack background color
document.getElementById("tomato-color").style.backgroundColor = "tomato";

//console.log()
document.getElementById("first-button").addEventListener("click", function () {
  console.log("Hello World !");
});

//card radius
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

// remove button
const removeButton=document.getElementsByClassName('buy-now-button');
// console.log(removeButton);
for(const remove of removeButton){
  // console.log(remove);
  remove.addEventListener('click',function(e){
    e.target.parentNode.removeChild(e.target);
  })

}
 
//email buttom

document.getElementById('inputremove').addEventListener('keyup',function(e){
    const deletes =document.getElementById('delete');
    if(e.target.value=='email'){
      deletes.removeAttribute('disabled');
    }
    else{
      deletes.setAttribute('disabled',true);
    }
    deletes.value='';

  })
  
