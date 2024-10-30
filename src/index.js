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
