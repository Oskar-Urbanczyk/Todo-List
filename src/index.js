console.log("Działa")

const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "Hello World webpack";
contentDiv.appendChild(testH1);