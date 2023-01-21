var cityrent1 = 1200;
var cityrent2 = 940;
var ismoreExpensive = cityrent1 > cityrent2;
var comparisonlabel = "Paris is more expensive: " + ismoreExpensive;
console.log(comparisonlabel);
var difference = cityrent1 - cityrent2;
var differencelabel = "Rent Differnce: " + difference + " " + "Euros";
console.log(differencelabel);

document.getElementById("city1").innerHTML = "Paris Rent: " + cityrent1;
document.getElementById("city2").innerHTML = "Barcelona Rent: " + cityrent2;
document.getElementById("comparison").innerHTML = comparisonlabel;
document.getElementById("difference").innerHTML = differencelabel;
