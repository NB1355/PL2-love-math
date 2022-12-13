document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();

            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
});


function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    document.getElementById('=').textContent = "=";
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


function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);

    if (userAnswer === result) {
        alert("Hey! You got it right! :D");
    } else {
        alert("Awwww.... You got it wrong! :/");
    }
}


// // function incrementScore() {

// // }

// // function incrementWrongAnswer() {

// // }