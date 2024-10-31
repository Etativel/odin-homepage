import profilePict from "../../assets/photos/pexels-isaak-alexandre-karslian-2027804005-29097920.jpg";
import IBMCarbonReduced from "../../assets/dummy-projects/IBMCarbon2.png";
import IBMCarbonOrigin from "../../assets/dummy-projects/IBMCarbon.png";
import PixLab from "../../assets/dummy-projects/pixLab.png";
import PixLabReducee from "../../assets/dummy-projects/pixLabOpac.png";

function loadImage() {
  const isHugeScreen = window.matchMedia("(min-width: 1500px)").matches;
  return {
    profilePict: profilePict,
    ibmProject: isHugeScreen ? IBMCarbonOrigin : IBMCarbonReduced,
    pixLab: isHugeScreen ? PixLab : PixLabReducee,
  };
}

export { loadImage };
