import { animate } from "./transition";
export default function startAnimation() {
  const introText = document.querySelector(".introduction");
  const subIntroText = document.querySelector(".sub-introduction");
  const socials = document.querySelector(".socials");
  const navBar = document.querySelector("nav");
  const projects = document.querySelectorAll(".project-card");
  const header = document.querySelector("header");

  animate.navigation(navBar, 500);
  animate.backgroundImage(header);
  animate.textLoad(socials, 500);
  animate.textLoad(subIntroText, 400);
  animate.textLoad(introText, 300);
  setInterval(animate.changeText, 2000);
}
