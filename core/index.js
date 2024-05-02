import createElementHTML from "./controller/create/createElementHTML";

function core() {
  const app = document.querySelector("#app");

  const createElement = createElementHTML(app);

  createElement.createTag({
    id: "teste",
    className: "hidden",
    tagName: "p",
    content: "Teste 2",
    attribute: "disabled",
    valueAttribute: true,
  });

  createElement.createTag({
    id: "teste",
    className: "btn",
    tagName: "button",
    content: "Clique aqui",
    attribute: "type",
    valueAttribute: "submit",
  });
}

core();
