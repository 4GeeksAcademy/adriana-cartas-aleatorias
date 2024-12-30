/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let suits = ["♥", "♦", "♠", "♣"];

  let randomValue = values[Math.floor(Math.random() * values.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  let carta = document.getElementById("carta");
  let simbolo1 = document.getElementById("simbolo1");
  let simbolo2 = document.getElementById("simbolo2");
  let numero = document.getElementById("numero");

  if (randomSuit === "♥" || randomSuit === "♦") {
    carta.className = "carta heart";
  } else {
    carta.className = "carta";
  }

  numero.innerHTML = randomValue;
  simbolo1.innerHTML = randomSuit;
  simbolo2.innerHTML = randomSuit;
};
