//add to keyboard
document.addEventListener("keydown", function(e){
    makeSound(e.key); //键盘事件中不能用this代指被按下的键，需要用参数event或者e，tap into its "key" property来看哪个键被按下了
    buttonAnimation(e.key);
})

//add to click
for(var i=0; i<=document.querySelectorAll(".drum").length-1;i=i+1){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonHTML=this.innerHTML
      makeSound(buttonHTML);
      buttonAnimation(buttonHTML);
    })
}


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
