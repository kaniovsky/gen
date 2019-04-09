//lodash
// import { without } from "lodash";
// error because of new syntax.
var _ = require("lodash");

var array = [1,2,3,4,5,6,7,8,9];
console.log("answer:", _.without(array,3))

//variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.getElementById("randombtn");

//changes
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value +", "
	+ color2.value +")";

	css.textContent = body.style.background + ";";
}

//to set default input colors as initial bgcolor
window.onload = setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//from https://stackoverflow.com/
function generateRandomColors() {
  var hex1 = '#'; 
  var hex2 = '#';
  var colValues = '0123456789ABCDEF';
  for(var i = 0; i < 6; i++) {
    hex1 = hex1 + colValues[Math.floor(Math.random() * 16)];
    hex2 = hex2 + colValues[Math.floor(Math.random() * 16)];
  }
    color1.value = hex1;
    color2.value = hex2;
    setGradient();
}

randombtn.addEventListener("click", generateRandomColors);

//solution:
//	1 and 2. run function using initial input values
//	3. add button in html
//	   create variable and eventListener for button 
//	   create or google randomValueGenerator function
