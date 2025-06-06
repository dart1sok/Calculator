const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action = "+";

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;

submitBtn.onclick = function () {
  const sum = Number(input1.value) + Number(input2.value);
  resultElement.textContent = sum;
};

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

divideBtn.onclick = function () {
  action = "/";
};

multiplyBtn.onclick = function () {
  action = "*";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (action == "+") {
    const sum = Number(inp1.value) + Number(inp2.value);
    return sum;
  }

  if (action == "-") {
    const sum = Number(inp1.value) - Number(inp2.value);
    return sum;
  }

  if (action == "/") {
    const sum = Number(inp1.value) / Number(inp2.value);
    return sum;
  } else {
    const sum = Number(inp1.value) * Number(inp2.value);
    return sum;
  }
}

if (action == "-") {
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};
