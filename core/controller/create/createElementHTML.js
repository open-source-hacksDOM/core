function createElementHTML(parent) {
  function createTag({
    tagName,
    content,
    attribute,
    valueAttribute,
    className,
    id,
  }) {
    const tag = document.createElement(tagName);

    if (content) tag.innerText = content;

    if (className) tag.classList.add(className);

    if (attribute && valueAttribute)
      tag.setAttribute(attribute, valueAttribute);

    if (id) tag.setAttribute("id", id);

    if (parent) return parent.appendChild(tag);

    return tag;
  }

  return { createTag };
}

export default createElementHTML;
