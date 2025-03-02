let value1 = document.getElementById("val1");
let value2 = document.getElementById("val2");

function test() {
  let operator = document.getElementById('op');

  if (operator.value !== '+' && operator.value !== '*' && operator.value !== '-' && operator.value !== '/') {
    alert("Invalid operator! Please re-enter.");
  } else {
    // Do nothing here, or perform an additional task
  }
}

function calculate() {
  const op = document.getElementById('op').value;
  let total = document.getElementById("result");
  const num1 = parseInt(value1.value);
  const num2 = parseInt(value2.value);

  if (!isNaN(num1) && !isNaN(num2) && op) {
    switch (op) {
      case '+':
        total.textContent = num1 + num2;
        break;

      case '-':
        total.textContent = num1 - num2;
        break;

      case '*':
        total.textContent = num1 * num2;
        break;

      case '/':
        if (num2 === 0) {
          alert("Division by zero is an invalid operation");
          return;
        } else {
          total.textContent = num1 / num2;
          break;
        }
    }
    console.log('Op:', op);
  }
}
