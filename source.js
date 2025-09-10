function add(num1, num2){
    console.log(num1 + num2);
}

function subtract(num1, num2){
    console.log(num2 - num1)
}

function multiply(num1, num2){
    console.log(num1*num2)
}

function divide(num1, num2){
    console.log(num1/num2)
}

function operate(operator, num1, num2){
    if (operator == "+"){
        add(num1, num2)
    }
    else if (operator == "-"){
        subtract(num1, num2)
    }
    else if (operator == "x"){
        multiply(num1, num2)
    }
    if (operator == "÷"){
        divide(num1, num2)
    }
}

function clearDisplay(){
    const display = document.querySelector("#display");
    display.textContent = "";
}

function figDisplay(fig){
    const display = document.querySelector("#display");
    display.textContent += fig;
}

document.addEventListener('DOMContentLoaded', function(){
    let newCalc = true;
    const clearButton = document.querySelector('#btnClear')
    clearButton.addEventListener('click', () => {
        clearDisplay();
    })
    for (let i=0; i<10; i++){
        let numButton = document.querySelector(`#btn${i}`);
        numButton.addEventListener('click', () => {
            if (newCalc){
                clearDisplay();
                newCalc = false;
            }
            figDisplay(i)
        })
    }
});