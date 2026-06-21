
var noOfDrums =  document.querySelectorAll(".drum").length;
for( i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); 
//After click function the function should be called
//If we add handleClick() along with paranthesis.. then the method will called straight up instead of waiting for click method.
//Insted of calling the function by handleClick().. we are passing the method by handleClick only after the action performed.
    document.addEventListener("keydown",function(event){ //here document is used to make entire page waiting for eventListener
        switchCase(event.key); //event is to return the event occured... means which key pressed.
        buttonAnimation(event.key);
        }
    )
    function handleClick(){
        var buttonClick = this.innerHTML;
        switchCase(buttonClick);
        buttonAnimation(buttonClick);
    }
    function switchCase(buttonClick){
        switch(buttonClick){
            case("w"):
                var audioW = new Audio("sounds/tom-1.mp3");
                audioW.play();
            break;
            case("a"):
                var audioA = new Audio("sounds/tom-2.mp3");
                audioA.play();
            break;
            case("s"):
                var audioS = new Audio("sounds/tom-3.mp3");
                audioS.play();
            break;
            case("d"):
                var audioD = new Audio("sounds/tom-4.mp3");
                audioD.play();
            break;
            case("j"):
                var audioJ = new Audio("sounds/snare.mp3");
                audioJ.play();
            break;
            case("k"):
                var audioK = new Audio("sounds/crash.mp3");
                audioK.play();
            break;
            case("l"):
                var audioL = new Audio("sounds/kick-bass.mp3");
                audioL.play();
            break;
            default:console.log();
        }
    }
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100)
    }
}



// var audioW = new Audio("sounds/tom-1.mp3");
// audioW.play();

