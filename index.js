const guessInput=document.getElementById("guess");
const checkButton=document.getElementById("check");
const message=document.getElementById("message");
const hint=document.getElementById("lh");
const resetButton=document.getElementById("reset");

let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=10;
console.log(randomNumber);
checkButton.addEventListener("click",()=>{
    const userGuess=parseInt(guessInput.value);
    if(!userGuess || userGuess<1 || userGuess>100)
    {
        message.textContent="you got a chance for 10 attempts";
        return;
    }
    attempts--;
    if(userGuess==randomNumber){
        message.textContent="Correct! You Guessed the Number";
        message.style.color="green";
        hint.textContent="";
        showResetButton();
    }
    else if(attempts==0){
        message.textContent=`Game over! The number was ${randomNumber}`;
        message.style.color="red";
        hint.textContent="";
        showResetButton();

    }
    else if (userGuess<randomNumber){
        hint.textContent=`Too Low!`;
        hint.style.color="orange";

    }
    else{
        hint.textContent=`Too High!`;
        hint.style.color="orange";
    }
    message.textContent=`Attempts:${attempts}`;

});
function showResetButton(){
    resetButton.style.display="inline-block";
    checkButton.style.display="none";

}
resetButton.addEventListener("click",()=>{
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=10;
    guessInput.value="";
    message.textContent=`Attempts:${attempts}`;
    hint.textContent="";
    message.style.color="black";
    checkButton.style.display="inline-block";
    resetButton.style.display="none";
});
