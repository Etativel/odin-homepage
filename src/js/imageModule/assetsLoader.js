import profilePict from "../../assets/photos/pexels-isaak-alexandre-karslian-2027804005-29097920.jpg";
import IBMCarbonReduced from "../../assets/dummy-projects/IBMCarbon2.png";
import IBMCarbonOrigin from "../../assets/dummy-projects/IBMCarbon3.png";
import PixLab from "../../assets/dummy-projects/pixLab3.png";
import PixLabReducee from "../../assets/dummy-projects/pixLabOpac.png";
import vid from "../../assets/video/video.mp4";
import presentation1 from "../../assets/photos/presentation.png";
import presentation2 from "../../assets/photos/presentation2.jpg";
import youtubeIcon from "../../assets/icons/youtube.png";
import twitterIcon from "../../assets/icons/twitter.png";
import instagramIcon from "../../assets/icons/instagram.png";
import youtubeIconBO from "../../assets/icons/youtube-black-outline.png";
import radPlant30 from "../../assets/dummy-projects/plant-30brigth.png";
import radPlant60 from "../../assets/dummy-projects/plant-60.png";
import lando30 from "../../assets/dummy-projects/lando-30.png";
import lando60 from "../../assets/dummy-projects/lando-60.png";
import twitterIconBO from "../../assets/icons/twitter-black-outline.png";
import instagramIconBO from "../../assets/icons/instagram-black-outline.png";
import reactLogo from "../../assets/icons/react.png";
import htmlLogo from "../../assets/icons/html-5.png";
import cssLogo from "../../assets/icons/css-3.png";
import jsLogo from "../../assets/icons/js.png";
import pythonLogo from "../../assets/icons/python.png";
import favicon from "../../assets/icons/flower.png";
function loadImage() {
  const isHugeScreen = window.matchMedia("(min-width: 1500px)").matches;
  return {
    profilePict,
    ibmProject: isHugeScreen ? IBMCarbonOrigin : IBMCarbonReduced,
    pixLab: isHugeScreen ? PixLab : PixLabReducee,
    radPlant: isHugeScreen ? radPlant30 : radPlant60,
    lando: isHugeScreen ? lando30 : lando60,
    eduVid: vid,
    presentation1,
    presentation2,
    instagramIcon,
    youtubeIcon,
    twitterIcon,
    instagramIconBO,
    youtubeIconBO,
    twitterIconBO,
    reactLogo,
    htmlLogo,
    cssLogo,
    jsLogo,
    pythonLogo,
    favicon,
  };
}

export { loadImage };
