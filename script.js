function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
let lastOperation = null;
let lastValue = null;

function appendToDisplay(value) {
    document.getElementById("display").value += value;
    lastOperation = null; // сбрасываем последнее действие при вводе нового значения
}

function clearDisplay() {
    document.getElementById("display").value = "";
    lastOperation = null;
    lastValue = null;
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");
    
    if (lastOperation && lastValue !== null) 
        display.value = eval(display.value + lastOperation + lastValue);
    } else {
        try {
            display.value = eval(display.value);
            lastValue = display.value;
        } catch (error) {
            display.value = "Error";
        }
    }

  
    const currentExpression = display.value;
    if (/[+\-*/]/.test(currentExpression)) {
        const operatorMatch = currentExpression.match(/[+\-*/]/);
        lastOperation = operatorMatch ? operatorMatch[0] : null;
        lastValue = currentExpression.split(lastOperation).pop();
    }
}
