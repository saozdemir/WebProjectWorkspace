/*
* Element Seçimi
* */

import {Calculator} from "./calculator.js";

const calculatorElement = document.querySelector("#calculator");
const resultElement = document.querySelector(".result");
const clearAllElement = document.querySelector("#clearAll");
const deleteCharElement = document.querySelector("#deleteChar");

/*
* Değişken Tanımlama*/
let firstNumber = "";
let selectedOperator = "";
let afterNumber = "";
let isWaitingNewValue = false;

runEventListeners();

function runEventListeners() {
    calculatorElement.addEventListener('click', write);
    clearAllElement.addEventListener("click", clearAll);
    deleteCharElement.addEventListener("click", deleteChar);
}

function write(e) {
    const element = e.target;
    if (element.classList.contains("number")) {
        if (isWaitingNewValue) {
            afterNumber += element.value;
        } else {
            firstNumber += element.value;
        }
        updateResultPanel(element.value);
    } else if (element.classList.contains("operator")) {
        if (!Calculator.isHaveOperator(resultElement.innerHTML)) {
            selectedOperator = element.value;
            isWaitingNewValue = true;
            updateResultPanel(element.value);
        }
    } else if (element.classList.contains("equals")) {
        let result = calculate(firstNumber, selectedOperator, afterNumber).toString();
        firstNumber = result;

        isWaitingNewValue = false;
        clearOperatorAndAfterNumber();
        clearResultPanel();
        updateResultPanel(result);
    }
}

function calculate(firstNumber, operator, secondNumber) {
    let result;
    let isDotHave = Calculator.isDotHave(firstNumber) || Calculator.isDotHave(secondNumber);
    switch (operator) {
        case "+":
            result = isDotHave
                ? parseFloat(firstNumber) + parseFloat(secondNumber)
                : parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case "-":
            result = isDotHave
                ? parseFloat(firstNumber) - parseFloat(secondNumber)
                : parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case "*":
            result = isDotHave
                ? parseFloat(firstNumber) * parseFloat(secondNumber)
                : parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case "/":
            result = isDotHave
                ? parseFloat(firstNumber) / parseFloat(secondNumber)
                : parseInt(firstNumber) / parseInt(secondNumber);
            break;
    }
    return result;
}

function updateResultPanel(value) {
    if (value.length >= 6) {
        value = parseFloat(value).toFixed(2);
    }
    resultElement.innerHTML += value;
}

function clearResultPanel() {
    resultElement.innerHTML = "";
}

function clearOperatorAndAfterNumber() {
    selectedOperator = "";
    afterNumber = "";
}

function clearAll() {
    firstNumber = "";
    selectedOperator = "";
    afterNumber = "";
    isWaitingNewValue = false;
    clearResultPanel();
}

function deleteChar() {
    if (isWaitingNewValue) {
        afterNumber = Calculator.deleteLastChar(afterNumber);
    } else {
        firstNumber = Calculator.deleteLastChar(firstNumber);
    }
    resultElement.innerHTML = Calculator.deleteLastChar(resultElement.innerHTML);
}