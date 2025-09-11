function add(num1, num2){
    return(num1 + num2);
}

function subtract(num1, num2){
    console.log(num1 - num2)
    return (num1 - num2)
}

function multiply(num1, num2){
    console.log(num1*num2)
    return (num1*num2)
}

function divide(num1, num2){
    if (num2 == 0){
        alert("Can't divide by 0 silly!");
        num2 = 1;
    }
    console.log(num1/num2)
    return (num1/num2)
}

function operate(operator, num1, num2){
    let result = 0;
    if (operator == "+"){
       result = add(num1, num2)
    }
    else if (operator == "-"){
       result = subtract(num1, num2)
    }
    else if (operator == "x"){
        result = multiply(num1, num2)
    }
    if (operator == "÷"){
        result = divide(num1, num2)
    }
    return result;
}
//Removes all values from display if new calculation
function clearDisplay(){
    const display = document.querySelector("#display");
    display.textContent = "";
}

function figDisplay(fig){
    const display = document.querySelector("#display");
    display.textContent += fig;
}

function operHandler(oper, val1, val2){
    ans = operate(oper, parseInt(val1), parseInt(val2));
    clearDisplay();
    figDisplay(ans);
    val1 = ans.toString();
    val2 = "";
    return [val1, val2]
}

function operCallback(val1, val2, newCalc, symbol, oper){
    symbol = symbol == '*' ? 'x' : symbol == '/' ? '÷' : symbol;
    if (val1 && !oper){
            figDisplay(` ${symbol} `);
            oper = symbol;
            newCalc = false;
        }
    else if (val2){
        vals = operHandler(oper, val1, val2)
        val1 = vals[0]
        val2 = vals[1]
        figDisplay(` ${symbol} `)
        oper = symbol;
    }
    return [val1, val2, newCalc, oper]
}

function eqCallback(val1, val2, newCalc, oper){
    if (!newCalc && val2) {
        vals = operHandler(oper, val1, val2)
        console.log(oper)
        val1 = vals[0]
        val2 = vals[1]
        oper = "";
        newCalc = true;
    }
    return [val1, val2, newCalc, oper]
}

function digCallback(i, val1, val2, newCalc, oper){
    if (newCalc){
        clearDisplay();
        val1 = "";
        val2 = "";
        newCalc = false;
    }
    figDisplay(i)
    if (!oper){
        val1 += i
    }
    else{
        val2 += i
    }
    return [val1,val2,newCalc]
}

document.addEventListener('DOMContentLoaded', function(){
    let newCalc = true;
    let val1 = "";
    let val2 = "";
    let oper = "";
    const clearButton = document.querySelector('#btnClear')
    clearButton.addEventListener('click', () => {
        clearDisplay();
        val1 = "";
        val2 = "";
        oper = "";
        newCalc = true;
    })
    for (let i=0; i<10; i++){
        let numButton = document.querySelector(`#btn${i}`);
        numButton.addEventListener('click', () => {
            let digCallbackVals = digCallback(i, val1, val2, newCalc, oper)
            val1 = digCallbackVals[0];
            val2 = digCallbackVals[1];
            newCalc = digCallbackVals[2];
        })
    }
    document.addEventListener('keydown', (e) => {
        let key = e.key;
        if (key >= 0 && key <= 9){
            let digCallbackVals = digCallback(key, val1, val2, newCalc, oper)
            val1 = digCallbackVals[0];
            val2 = digCallbackVals[1];
            newCalc = digCallbackVals[2];
        }
        else if (['+', '-', '*', '/'].includes(key)){
            operCallbackVals = operCallback(val1, val2, newCalc, key, oper)
            val1 = operCallbackVals[0];
            val2 = operCallbackVals[1];
            newCalc = operCallbackVals[2];
            oper = operCallbackVals[3];
        }
        else if (key === 'Enter' || key === '='){
            vals = eqCallback(val1, val2, newCalc, oper)
            val1 = vals[0]
            val2 = vals[1]
            newCalc = vals[2]
            oper = vals[3]
        }
    })
    let operCallbackVals = []
    let opButtons = document.querySelectorAll('.operator')
    opButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.textContent)
            operCallbackVals = operCallback(val1, val2, newCalc, button.textContent, oper)
            val1 = operCallbackVals[0];
            val2 = operCallbackVals[1];
            newCalc = operCallbackVals[2];
            oper = operCallbackVals[3];
        })
    })
    eqButton = document.querySelector('#btnEq')
    eqButton.addEventListener('click', () => {
        vals = eqCallback(val1, val2, newCalc, oper)
        val1 = vals[0]
        val2 = vals[1]
        newCalc = vals[2]
        oper = vals[3]
    })
});