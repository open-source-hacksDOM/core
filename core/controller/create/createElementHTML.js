function createElementHTML() {
  function createTag(tagName, content, attribute, className, id) {
    const tag = document.createElement(tagName);

    tag.innerText = content;

    tag.classList.add(className);

    return tag;
  }

  return { createTag };
}

export default createElementHTML;
