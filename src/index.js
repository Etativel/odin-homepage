import "./styles/style.css";
import startAnimation from "./js/animation/startAnimation.js";
import { loadImage } from "./js/imageModule/assetsLoader.js";
import { attachImage } from "./js/imageModule/attachIcons.js";

const elements = {
  header: document.querySelector("header"),
};

document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
});

// Attaching backgound image for header
attachImage.backgroundImage(elements.header, loadImage().profilePict);
