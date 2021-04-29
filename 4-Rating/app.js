//assignem una variable a cada icona
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");

//assignem variable per a zona off
let getoutTop = document.getElementById("getouttop");
let getoutBottom = document.getElementById("getoutbottom");

// creem una funció per a cada puntuació
//cinc estrelles
function fiveStars() {
  icon1.classList.add("active");
  icon2.classList.add("active");
  icon3.classList.add("active");
  icon4.classList.add("active");
  icon5.classList.add("active");
}
//quatre estrelles
function fourStars() {
  icon1.classList.remove("active");
  icon2.classList.add("active");
  icon3.classList.add("active");
  icon4.classList.add("active");
  icon5.classList.add("active");
}
//tres estrelles
function threeStars() {
  icon1.classList.remove("active");
  icon2.classList.remove("active");
  icon3.classList.add("active");
  icon4.classList.add("active");
  icon5.classList.add("active");
}
//dues estrelles
function twoStars() {
  icon1.classList.remove("active");
  icon2.classList.remove("active");
  icon3.classList.remove("active");
  icon4.classList.add("active");
  icon5.classList.add("active");
}
//una estrea
function oneStar() {
  icon1.classList.remove("active");
  icon2.classList.remove("active");
  icon3.classList.remove("active");
  icon4.classList.remove("active");
  icon5.classList.add("active");
}
//esborrar // click fora
function removeAll() {
  icon1.classList.remove("active");
  icon2.classList.remove("active");
  icon3.classList.remove("active");
  icon4.classList.remove("active");
  icon5.classList.remove("active");
}

//creem event listener per a cada click
icon1.addEventListener("click", fiveStars); //cinc estrelles
icon2.addEventListener("click", fourStars); //quatre estrelles
icon3.addEventListener("click", threeStars); //tres estrelles
icon4.addEventListener("click", twoStars); //dues estrelles
icon5.addEventListener("click", oneStar); //una estrella
getoutTop.addEventListener("click", removeAll); //cap estrella // esborrar // click fora
getoutBottom.addEventListener("click", removeAll); //cap estrella // esborrar // click fora
