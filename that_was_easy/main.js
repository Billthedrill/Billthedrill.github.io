function sayThatWasEasy (){
var thatWasEasy = new Audio("that_was_easy.mp3");
thatWasEasy.play();
}
$("easy").on("click", sayThatWasEasy);

$(document).keypress(delegatekeypress);
function delegatekeypress(event){
    if (event.charcode == 32) {
        var thatWasEasy = new Audio("that_was_easy.mp3");
        thatWasEasy.play();    
    }
}  