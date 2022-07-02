var firstNumber = "";
var secondNumber = "";
var result = "";
var operator = "";
var isClick = false;
var showOperator = document.getElementById("show-operation");
var showResult = document.getElementById("show-result");
var numbers = document.getElementsByClassName("button-number");
var operations = document.getElementsByClassName("button-operator");
var del = document.getElementById("op-del");
var clear = document.getElementById("op-clr");
var equal = document.getElementById("op-equal");
var video = document.getElementById("video-embed");

for (let operation of operations) {
  operation.onclick = () => {
    playAudio("sound-effect-2.mp3");
    if (isClick) {
      Refresh();
    }
    if (operator) {
      Calculate();
      firstNumber = result;
      result = "";
      secondNumber = "";
      isClick = false;
      showOperator.innerHTML = firstNumber;
    }
    showOperator.innerHTML += operation.innerHTML;
    operator = operation.innerHTML;
  };
}
for (let number of numbers) {
  number.addEventListener("click", () => {
    if (result) {
      Refresh();
    }
    if (operator) {
      secondNumber += number.innerHTML;
    } else {
      firstNumber += number.innerHTML;
    }
    playAudio("sound-effect.mp3");
    if (firstNumber == '666'|| secondNumber == '666') {
      setTimeout(Refresh, 0);
      video.style.display = block;

}
    showOperator.innerHTML += number.innerHTML;
    isClick = false;
  });
}

del.addEventListener("click", () => {
  if (result) {
    Refresh();
  } else {
    showOperator.innerHTML = showOperator.innerHTML.slice(0, -1);
    if (operator) {
      secondNumber = secondNumber.slice(0, -1);
    } else {
      firstNumber = firstNumber.slice(0, -1);
    }
  }
});
clear.onclick = () => {
  Refresh();
};
function Refresh() {
  showOperator.innerHTML = "";
  showResult.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
}
equal.addEventListener("click", () => {

    if (firstNumber && !operator && !secondNumber) {
    result = firstNumber;
  } else {
    Calculate();
  }
  showResult.innerHTML = result;
  console.log(firstNumber, secondNumber, result);
  isClick = true;
  if (result== '666') {
    setTimeout(Refresh, 0);
    video.style.display = block;
}
});
function Calculate() {
  switch (operator) {
    case "+":
      result = firstNumber * 1 + secondNumber * 1;
      break;
    case "-":
      result = firstNumber * 1 - secondNumber * 1;
      break;
    case "x":
      result =( firstNumber * 1) * (secondNumber * 1);
      break;
    case "÷":
      result = (firstNumber * 1) / (secondNumber * 1);
      break;
  }
  if (!result) {
    result = "The value is invalid!";
    setTimeout(Refresh, 5000);
  }
}
function playAudio(sound) {
  new Audio(sound).play();
}
