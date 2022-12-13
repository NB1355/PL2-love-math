document.addEventListener("DOMContentLoaded", function () {



    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");


            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                console.log(gameType);
            }
        });
    }

});




function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('=').textContent = "=";
    switch (gameType) {
        // default:
        //     document.getElementById('operator').textContent = "?";

        case "addition":
            document.getElementById('operator').textContent = "+";
            break;
        case "subtract":
            document.getElementById('operator').textContent = "-";
            break;
        case "multiply":
            document.getElementById('operator').textContent = "x";
            break;
        case "division":
            document.getElementById('operator').textContent = "/";
            break;
    }
    document.getElementById("answer-box").style.backgroundColor ="white";

}

function checkAnswer() {

}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}


function incrementScore() {

}

function incrementWrongAnswer() {

}