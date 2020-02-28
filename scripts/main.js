/*
    Javascript basic
*/

let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

// condition
let iceCream = "chocolate";

iceCream = "ramen";

if (iceCream === "chocolate") {
  //   alert("Yay, I love chocolate ice cream!");
} else {
  //   alert("Awwww, but chocolate is my favorite...");
}

let myVariable = document.querySelector("h1");

// alert("hello!");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").onclick = function() {};

let myHTML = document.querySelector("html");
myHTML.onclick = function() {};

// img
let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myName;

function setUserName() {
  myName = prompt("Please enter your name.");

  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozila is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  myName = localStorage.getItem("name");
  myHeading.textContent = "Mozila is cool, " + myName;
}

myButton.onclick = function() {
  setUserName();
};
