//Detecting Clicks.
//First we deduce the number of buttons by this line of code.
var numberOfButtons=document.querySelectorAll("button").length;

//Then we  run a loop number of buttons times 
for(var i=0; i<numberOfButtons; i++){
    //Then we query all the buttons and add EventListener for each click in the buttons and perform the followuing autonoums function.
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    
    var keyInnerHTML=this.innerHTML;
    //stores the value of the current innerHTML as buttons are clicked by user , its a creates new object based on constructor function.
    
    makeSound(keyInnerHTML);
    animate(keyInnerHTML);
});
}

 

//Detecting key presses.
//we want whole document to listen to keyboard events so 
document.addEventListener("keydown",function(event){        
    //autonomous () with event as param , event keeps track of every things like key press , durations of press , ctrl + press or not  etc etc.
    
    makeSound(event.key);
    animate(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;


        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();   
            break;



        
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();   
            break;

        
        case "d":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();   
        break;

        
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            
        break;

        
        case "k":
         var kick=new Audio("sounds/kick-bass.mp3");
         kick.play();   
        break;

        
        case 'l':
            var snare=new Audio("sounds/snare.mp3");
         snare.play();
            
        break;

        
        default:
            console.log("Unknown");
            break;
    }
};


//Making a press animation
 function animate(currentkey) {

    //in the html file we specified a  class of same key inner html as of the key , now to specify a class we gotta use .classname , here currentkey = classname but in order to call it we need .(b4) its name so
    var activeButton=document.querySelector("."+currentkey);

   activeButton.classList.add("pressed"); //pressed is a css class which gets add and changes the anim to as of which ".pressed"  class suggest

   //now we need to timeout the press animation toun-press one so , we use timeout function.
   setTimeout(function() {  
    activeButton.classList.remove("pressed");
   },80);  ////<- this , 100 is the timeout milliseconds timer parameter , mean after a key is pressed the pressed class which was added will be revoked.

 }