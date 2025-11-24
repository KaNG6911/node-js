const containerDiv = document.getElementById("container");
const newElement = document.createElement("p");
const multiplyNumber = document.getElementById("input");
const clickButton = document.getElementById("butt");
newElement.style.color = "red";

console.log(multiplyNumber);
containerDiv.appendChild(newElement);

clickButton.addEventListener("reset", function () {
  const result = multiply(multiplyNumber.value);
  newElement.innerText = result;
  multiplyNumber.value = "";
});
const multiply = (value) => {
  const result = value * value;
  return result;
};
