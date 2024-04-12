
let inputBox = document.getElementById('inputBox');

function appendNumber(number) {
  inputBox.value += number;
}

function appendOperator(operator) {
  if (operator === 'AC') {
    inputBox.value = '';
  } else if (operator === 'DE') {
    inputBox.value = inputBox.value.slice(0, -1);
  } else {
    inputBox.value += operator;
  }
}

function calculate() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (error) {
    inputBox.value = 'Error';
  }
}
























appendOperator