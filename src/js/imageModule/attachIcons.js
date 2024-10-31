const attachImage = (() => {
  function backgroundImage(elem, image) {
    elem.style.backgroundImage = `url(${image})`;
  }
  return {
    backgroundImage,
  };
})();

export { attachImage };
