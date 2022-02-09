
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

  // change bagpack mouse over

//number 1 card
  function change1(){
    document.getElementById('images').src='./images/bags/bag-2.png'
  }
  
  function change2(){
    document.getElementById('images').src='./images/bags/bag-1.png'
  }
  // number 2 card
  function change3(){
    document.getElementById('images-2').src='./images/bags/bag-1.png'
  }
  
  function change4(){
    document.getElementById('images-2').src='./images/bags/bag-2.png'
  }
  //number 3 card
  function change5(){
    document.getElementById('images-3').src='./images/bags/bag-2.png'
  }
  
  function change6(){
    document.getElementById('images-3').src='./images/bags/bag-3.png'
  }

  
