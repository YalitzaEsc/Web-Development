window.onload = function play() {

var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

dice1src = "./images/dice" + random1 + ".png";
dice2src = "./images/dice" + random2 + ".png";

document.getElementById("dicee1").setAttribute("src", dice1src);
document.getElementById("dicee2").setAttribute("src", dice2src);

if(random1 > random2) {
    document.getElementById("title").textContent = "🚩 Player 1 wins!";
} else if(random2 > random1){
    document.getElementById("title").textContent = "Player 2 wins! 🚩";
} else {
    document.getElementById("title").textContent = "🚩 Draw! 🚩";
}

}

