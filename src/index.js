import "./styles/style.css";
// import profilePict from "./assets/photos/profile-picture.jpg";
import profilePict from "./assets/photos/pexels-isaak-alexandre-karslian-2027804005-29097920.jpg";
const header = document.querySelector("header");
header.style.backgroundImage = `url(${profilePict})`;

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".introduction");
  const subIntroText = document.querySelector(".sub-introduction");
  const socials = document.querySelector(".socials");
  const navBar = document.querySelector("nav");

  translateDownAnimation(navBar, 500);
  backgroundImageLoadAnimation();
  textLoadAnimation(socials, 500);
  textLoadAnimation(subIntroText, 400);
  textLoadAnimation(introText, 300);
  setInterval(updateText, 2000);
});

function backgroundImageLoadAnimation() {
  setTimeout(() => {
    header.classList.add("img-load");
  }, 500);
}

function textLoadAnimation(elem, duration) {
  setTimeout(() => {
    elem.classList.add("text-load");
  }, duration);
}

function translateDownAnimation(elem, duration) {
  setTimeout(() => {
    elem.classList.add("scale-down");
  }, duration);
}

const textArray = ["Graphic Designer", "Front-end Developer", "Art Enthusiast"];
let currentIndex = 0;
const textElement = document.querySelector(".skills");

function updateText() {
  textElement.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % textArray.length;
    textElement.textContent = textArray[currentIndex];
    textElement.style.opacity = "1";
  }, 500);
}
