const animate = (() => {
  function backgroundImage(header) {
    setTimeout(() => {
      header.classList.add("img-load");
    }, 500);
  }

  function textLoad(elem, duration) {
    setTimeout(() => {
      elem.classList.add("text-load");
    }, duration);
  }

  function navigation(elem, duration) {
    setTimeout(() => {
      elem.classList.add("scale-down");
    }, duration);
  }

  function projects(elem, duration) {
    setTimeout(() => {
      elem.classList.add("showed");
    }, duration);
  }

  const textArray = [
    "Graphic Designer",
    "Front-end Developer",
    "Art Enthusiast",
  ];
  let currentIndex = 0;
  const textElement = document.querySelector(".skills");

  function changeText() {
    textElement.style.opacity = "0";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      textElement.textContent = textArray[currentIndex];
      textElement.style.opacity = "1";
    }, 500);
  }
  return {
    backgroundImage,
    textLoad,
    navigation,
    projects,
    changeText,
  };
})();

export { animate };
