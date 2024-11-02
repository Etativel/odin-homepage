import "./styles/style.css";
import startAnimation from "./js/animation/startAnimation.js";
import { loadImage } from "./js/imageModule/assetsLoader.js";
import { attachImage } from "./js/imageModule/attachIcons.js";
import { animate } from "./js/animation/transition.js";

const elements = {
  header: document.querySelector("header"),
  dummyProject01: document.querySelector(".project-1"),
  dummyProject02: document.querySelector(".project-2"),
  dummyProject03: document.querySelector(".project-3"),
  dummyProject04: document.querySelector(".project-4"),
  projects: document.querySelectorAll(".project-card"),
  eduVid: document.querySelector(".edu-vid"),
  presentationC1: document.querySelector(".ep1"),
  presentationC2: document.querySelector(".ep2"),
  gifContainer: document.querySelector(".gif-container"),
  educationContainer: document.querySelector(".education"),
  eduTextContainer: document.querySelector(".education-text"),
  instaLogo: document.querySelector(".ig-logo"),
  twitterLogo: document.querySelector(".twit-logo"),
  youtubeLogo: document.querySelector(".ytube-logo"),
  twitterFooter: document.querySelector(".f-twit-logo"),
  youtubeFooter: document.querySelector(".f-ig-logo"),
  instaFooter: document.querySelector(".f-ytube-logo"),
  footerContainer: document.querySelector(".footer-container"),
  contact: document.querySelector(".contact"),
  jsIconContainer: document.querySelector(".js-logo"),
  htmlIconContainer: document.querySelector(".html-logo"),
  cssIconContainer: document.querySelector(".css-logo"),
  reactIconContainer: document.querySelector(".react-logo"),
  pythonIconContainer: document.querySelector(".python-logo"),
  skillsContainer: document.querySelector(".skills-image"),
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
  animate.intersectionAnimateSingle(
    0.3,
    elements.footerContainer,
    "full-opacity",
    elements.contact
  );
  animate.intersectionAnimateSingle(
    0.3,
    elements.header,
    "img-load",
    elements.header
  );
  animate.intersectionAnimateSingle(
    0.3,
    elements.skillsContainer,
    "skill-opacity",
    elements.skillsContainer
  );

  addNavListeners();
  // animate.textWave(document.querySelector(".sub-introduction"));
});

// Attaching background image for header
attachImage.backgroundImage(elements.header, loadImage().profilePict);
attachImage.backgroundImage(elements.dummyProject01, loadImage().ibmProject);
attachImage.backgroundImage(elements.dummyProject02, loadImage().pixLab);
attachImage.backgroundImage(elements.dummyProject04, loadImage().lando);
attachImage.backgroundImage(elements.dummyProject03, loadImage().radPlant);
attachImage.backgroundImage(elements.presentationC1, loadImage().presentation1);
attachImage.backgroundImage(elements.presentationC2, loadImage().presentation2);

// Attaching social media logo
elements.instaLogo.src = loadImage().instagramIcon;
elements.youtubeLogo.src = loadImage().youtubeIcon;
elements.twitterLogo.src = loadImage().twitterIcon;

elements.jsIconContainer.src = loadImage().jsLogo;
elements.htmlIconContainer.src = loadImage().htmlLogo;
elements.cssIconContainer.src = loadImage().cssLogo;
elements.reactIconContainer.src = loadImage().reactLogo;
elements.pythonIconContainer.src = loadImage().pythonLogo;
// elements.instaFooter.src = loadImage().instagramIconBO;
// elements.youtubeFooter.src = loadImage().youtubeIconBO;
// elements.twitterFooter.src = loadImage().twitterIconBO;

const addNavListeners = () => {
  const sections = {
    skills: "home-nav",
    education: "edu-nav",
    projects: "work-nav",
    contacts: "contact-nav",
  };

  Object.keys(sections).forEach((section) => {
    document
      .querySelector(`.${sections[section]}`)
      .addEventListener("click", () => {
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
      });
  });
};
