import createElementHTML from "./controller/create/createElementHTML";
import classComponents from "./controller/update/classComponents";

function core() {
  const app = document.querySelector("#app");

  const createElement = createElementHTML(app);

  const updateComponents = classComponents();

  const p = createElement.createTag({
    id: "teste",
    className: "hidden",
    tagName: "p",
    content: "Teste 2",
    attribute: "disabled",
    valueAttribute: true,
  });

  const btn = createElement.createTag({
    id: "teste",
    className: "btn",
    tagName: "button",
    content: "Clique aqui",
    attribute: "type",
    valueAttribute: "submit",
  });

  updateComponents.addClass(p, ["error", "sucess", "disabled", "hidden"]);
  updateComponents.removeClass(p, ["error", "hidden"]);
  updateComponents.conditionalClass(p, ["error", "easy"]);
}

core();
