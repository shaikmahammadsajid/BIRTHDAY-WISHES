const name = "SHAIK MAHAMMAD SAJID &nbsp; &nbsp; HAPPY BIRTHDAY &#127874"
const nameSize = 60
const colorInterval = 2
const noOfElements = 20
//In further custom Element


for (let i = 0; i < noOfElements; i++) {
  let spanElement = document.createElement("span");
  document.querySelector("div").appendChild(spanElement);
}

const allElements = document.querySelectorAll("span");

for (let i = 0; i < allElements.length; i++) {
  setInterval(() => {
    function c() {
      return Math.floor(Math.random() * 255);
    }
    allElements[i].innerHTML = `${name}`;
    allElements[i].style.fontSize = `${nameSize + "px"}`;
    allElements[i].style.color = `rgb(${c()}, ${c()}, ${c()})`;
  }, `${colorInterval * 1000}`);
}
