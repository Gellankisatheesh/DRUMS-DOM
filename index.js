 
var numberOfDrumNumbers = document.querySelectorAll(".drum").length ;

for(i = 0 ; i < numberOfDrumNumbers; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("I have got clicked!"); 
    //    var audio =new Audio("sounds/tom-1.mp3");
    //    audio.play();
    //  this.style.color="white";

     var buttonSOUNDS = this.innerHTML;

     makeSound(buttonSOUNDS);

     buttonAnimations(buttonSOUNDS);
      
    });
}

document.addEventListener("keypress", function(event) {
   
    makeSound(event.key);

    buttonAnimations(event.key);

});

function makeSound(key) {

    switch (key) {

        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
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
        case  "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play ();
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio ("sounds/kick-bass.mp3");
           kick.play();
            break;
      
        default:
            console.log(buttonSOUNDS);
         
      }
}

function buttonAnimations(currently){
    var activeButtons = document.querySelector("." + currently);

    activeButtons.classList.add("pressed");

    setTimeout(function(){

        activeButtons.classList.remove("pressed");

    },100);
}