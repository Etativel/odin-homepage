import "./styles/style.css";
import startAnimation from "./js/animation/startAnimation.js";
import { loadImage } from "./js/imageModule/assetsLoader.js";
import { attachImage } from "./js/imageModule/attachIcons.js";
import { animate } from "./js/animation/transition.js";

const elements = {
  header: document.querySelector("header"),
  dummyProject01: document.querySelector(".project-1"),
  dummyProject02: document.querySelector(".project-2"),
  projects: document.querySelectorAll(".project-card"),
};

document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
  animate.intersectionAnimate(0.2, elements.projects);
  // animate.textWave(document.querySelector(".sub-introduction"));
});

// Attaching background image for header
attachImage.backgroundImage(elements.header, loadImage().profilePict);
attachImage.backgroundImage(elements.dummyProject01, loadImage().ibmProject);
attachImage.backgroundImage(elements.dummyProject02, loadImage().pixLab);
