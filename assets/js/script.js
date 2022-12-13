document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                newRound();
               

            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
            newRound(); 
        }
    });

    

});


function runGame(gameType) {
    
    document.getElementById("answer-box").focus();
    
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    document.getElementById("=").textContent = "=";
    document.getElementById("message").textContent = "Enter and submit your answer!";
    document.getElementById("answer-box").style.backgroundColor = "white";


    if (gameType === "subtract") {
        document.getElementById('operand1').textContent = Math.max(num1, num2);
        document.getElementById('operand2').textContent = Math.min(num1, num2);
    } else {
        document.getElementById('operand1').textContent = num1;
        document.getElementById('operand2').textContent = num2;
    }

    document.getElementById('=').textContent = "=";
    document.getElementById("answer-box").style.backgroundColor = "white";

    switch (gameType) {
        // default:
        //     document.getElementById('operator').textContent = "?";

        case "addition":
            document.getElementById('operator').textContent = "+";
            result = num1 + num2;
            break;
        case "subtract":
            document.getElementById('operator').textContent = "-";
            result = Math.max(num1, num2) - Math.min(num1, num2);;
            break;
        case "multiply":
            document.getElementById('operator').textContent = "x";
            result = num1 * num2;
            break;
        case "division":
            document.getElementById('operator').textContent = "/";
            result = num1 / num2;
            break;
    }

    console.log(result);


}

function newRound() {

   
    document.getElementById("answer-box").value = null; 


}


function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
   
   
    if (userAnswer === result) {
        document.getElementById("message").textContent = ("Hey! You got it right! :D");
        // scorePlus ();

    } else {
        document.getElementById("message").textContent = (`Awwww.... you answered ${userAnswer}. The correct answer is  ${result}!`);
        scoreMinus ();
    }
}

function scorePlus (){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}


function scoreMinus (){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}


