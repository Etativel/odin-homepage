import "./styles/style.css";
import startAnimation from "./js/animation/startAnimation.js";
import { loadImage } from "./js/imageModule/assetsLoader.js";
import { attachImage } from "./js/imageModule/attachIcons.js";
import { animate } from "./js/animation/transition.js";

const elements = {
  header: document.querySelector("header"),
  dummyProject01: document.querySelector(".project-1"),
  projects: document.querySelectorAll(".project-card"),
};

document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
  animate.intersectionAnimate(0.4, elements.projects);
  // animate.textWave(document.querySelector(".sub-introduction"));
});

// Attaching backgound image for header
attachImage.backgroundImage(elements.header, loadImage().profilePict);
attachImage.backgroundImage(elements.dummyProject01, loadImage().ibmProject);
