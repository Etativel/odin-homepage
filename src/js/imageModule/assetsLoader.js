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
function loadImage() {
  const isHugeScreen = window.matchMedia("(min-width: 1500px)").matches;
  return {
    profilePict: profilePict,
    ibmProject: isHugeScreen ? IBMCarbonOrigin : IBMCarbonReduced,
    pixLab: isHugeScreen ? PixLab : PixLabReducee,
    eduVid: vid,
    presentation1: presentation1,
    presentation2: presentation2,
    instagramIcon: instagramIcon,
    youtubeIcon: youtubeIcon,
    twitterIcon: twitterIcon,
  };
}

export { loadImage };
