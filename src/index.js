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
  eduVid: document.querySelector(".edu-vid"),
  presentationC1: document.querySelector(".ep1"),
  presentationC2: document.querySelector(".ep2"),
  gifContainer: document.querySelector(".gif-container"),
  educationContainer: document.querySelector(".education"),
  eduTextContainer: document.querySelector(".education-text"),
};

document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
  animate.intersectionAnimate(0.4, elements.projects, "showed");
  animate.intersectionAnimateSingle(
    0.3,
    elements.educationContainer,
    "translateX-transition",
    elements.gifContainer
  );
  animate.intersectionAnimateSingle(
    0.3,
    elements.educationContainer,
    "translateX-transition",
    elements.eduTextContainer
  );
  // animate.textWave(document.querySelector(".sub-introduction"));
});

// Attaching background image for header
attachImage.backgroundImage(elements.header, loadImage().profilePict);
attachImage.backgroundImage(elements.dummyProject01, loadImage().ibmProject);
attachImage.backgroundImage(elements.dummyProject02, loadImage().pixLab);
attachImage.backgroundImage(elements.presentationC1, loadImage().presentation1);
attachImage.backgroundImage(elements.presentationC2, loadImage().presentation2);

// elements.eduVid.src = loadImage().eduVid;
