function calculateFactorial() {
    let num = parseInt(document.getElementById("factorialInput").value);
    let resultDisplay = document.getElementById("resultDisplay");

    if (isNaN(num) || num < 0) {
        resultDisplay.innerText = "Please enter a non-negative integer.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    resultDisplay.innerText = `${num}! = ${factorial}`;
}

function setDarkMode() {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
}

function setLightMode() {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "black";
}
