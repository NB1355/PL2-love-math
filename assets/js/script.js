document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                // document.getElementById("answer-box").textContent = null; not working ?!!!!!!!!!!!!!!

            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                moveOnMax();
            }
        });
    }
});


function runGame(gameType) {

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

    document.getElementsByTagName('input').value = "";

}


function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    if (userAnswer === result) {
        document.getElementById("message").textContent = ("Hey! You got it right! :D");
    } else {
        document.getElementById("message").textContent = (`Awwww.... you answered ${userAnswer}. The correct answer is  ${result}!`);

    }
}


// // function incrementScore() {

// // }

// // function incrementWrongAnswer() {

// // }




function moveOnMax(event, field, nextFieldID) {
    event = event || window.event;
    if (event.keyCode != 9) {
        if (field.value.length >= field.maxLength) {
            nextFieldID.focus();
        }
    }
}