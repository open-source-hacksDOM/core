function createElementHTML() {
  function createTag({
    tagName: tagName,
    content: content,
    attribute: attribute,
    valueAttribute: valueAttribute,
    className: className,
    id: id,
  }) {
    const tag = document.createElement(tagName);

    if (content) tag.innerText = content;

    if (className) tag.classList.add(className);

    if (attribute && valueAttribute)
      tag.setAttribute(attribute, valueAttribute);

    if (id) tag.setAttribute("id", id);

    return tag;
  }

  return { createTag };
}

export default createElementHTML;
