import createElementHTML from "./controller/create/createElementHTML";

function core() {
  const app = document.querySelector("#app");

  const createElement = createElementHTML();

  const p = createElement.createTag({
    id: "teste",
    className: "hidden",
    tagName: "p",
    content: "Teste 2",
    attribute: "disabled",
    valueAttribute: true,
  });

  const button = createElement.createTag({
    id: "teste",
    className: "btn",
    tagName: "button",
    content: "Clique aqui",
    attribute: "type",
    valueAttribute: "submit",
  });

  app.appendChild(p);
  app.appendChild(button);
}

core();
