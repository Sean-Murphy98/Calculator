function add(num1, num2){
    console.log(num1)
    console.log(num2)
    return(num1 + num2);
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
    let result = 0;
    if (operator == "+"){
       result = add(num1, num2)
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
    return result;
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
    let entrystr = "";
    const clearButton = document.querySelector('#btnClear')
    clearButton.addEventListener('click', () => {
        clearDisplay();
        newCalc = true;
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
    let plusButton = document.querySelector('#btnAdd');
    plusButton.addEventListener('click', () => {
        if (!newCalc){
            figDisplay(" + ");
        }
    })
    eqButton = document.querySelector('#btnEq')
    eqButton.addEventListener('click', () => {
        if (!newCalc) {
            const display = document.querySelector("#display");
            entrystr = display.textContent;
            operateStr = entrystr.replace(/\s/g, "").split(/([+\-x÷])/);
            console.log(operateStr);
            ans = operate(operateStr[1],operateStr[0],operateStr[2]);
            clearDisplay();
            figDisplay(ans);
        }
    })
});