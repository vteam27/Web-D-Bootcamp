document.querySelectorAll(".drum").forEach(el => el.addEventListener("click",function()
{
  makeSound(this.innerHTML);
} ));
window.onload = function() {var hub = new Audio("sounds/hub.mp3");
hub.play();}

document.addEventListener("keydown",function(e){
makeSound(e.key);
 })
function makeSound(pressedKey)
{
  switch (pressedKey) {
             case "w":
                 var tom1 = new Audio("sounds/tom-1.mp3");
                 tom1.play();
                 break;

             case "a":
                 var tom2 = new Audio("sounds/tom-2.mp3");
                 tom2.play();
                 break;


             case "s":
                 var tom3 = new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break;


             case "d":
                 var tom4 = new Audio("sounds/tom-4.mp3");
                 tom4.play();
                 break;

             case "j":
                 var crash = new Audio("sounds/crash.mp3");
                 crash.play();
                 break;

             case "k":
                 var kick = new Audio("sounds/kick-bass.mp3");
                 kick.play();
                 break;

             case "l":
                 var snare = new Audio("sounds/snare.mp3");
                 snare.play();
                 break;
              case "p":
              var hub = new Audio("sounds/hub.mp3");
              hub.play();
              break;

             default: console.log( pressedKey );
             return;
         }

         var activeButton= document.querySelector("." + pressedKey );
         activeButton.classList.add("pressed");
         setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
