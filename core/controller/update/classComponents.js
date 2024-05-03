function classComponents() {
  function addClass(element, className) {
    try {
      className.forEach((classCSS) => {
        element.classList.add(classCSS);
      });
    } catch {
      throw new Error(
        "A Function addClass expect two params element and className, this second is array."
      );
    }
  }

  function removeClass(element, className) {
    try {
      className.forEach((classCSS) => {
        element.classList.remove(classCSS);
      });
    } catch {
      throw new Error(
        "A Function removeClass expect two params element and className, this second is array."
      );
    }
  }

  function conditionalClass(element, className) {
    try {
      className.forEach((classCSS) => {
        element.classList.toggle(classCSS);
      });
    } catch {
      throw new Error(
        "A Function conditionalClass expect two params element and className, this second is array."
      );
    }
  }

  return { addClass, removeClass, conditionalClass };
}

export default classComponents;
