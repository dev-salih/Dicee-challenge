var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSourse2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSourse2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩palyer 1 win!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="🚩palyer 2 win!!";
} else {
    document.querySelector("h1").innerHTML="Draw!!";
}