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

  const textArray = [
    "Graphic Designer",
    "Front-end Developer",
    "Tech Enthusiast",
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

  function textWave(elem) {
    const string = elem.textContent.split("");
    console.log(string);
    const container = document.createElement("span");
    elem.textContent = "";
    for (let i of string) {
      const word = document.createElement("span");
      word.classList.add("wave");
      word.textContent = i;
      elem.appendChild(word);
    }
  }
  function intersectionAnimate(threshold, items) {
    const intersectionCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("showed");
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: threshold,
    });
    for (const item of items) {
      observer.observe(item);
    }
  }
  return {
    backgroundImage,
    textLoad,
    navigation,
    changeText,
    textWave,
    intersectionAnimate,
  };
})();

export { animate };
