import createElementHTML from "./controller/create/createElementHTML";
import classComponents from "./controller/update/classComponents";

function core() {
  const app = document.querySelector("#app");

  const { createTag } = createElementHTML(app);

  const { addClass, removeClass, conditionalClass } = classComponents();

  const p = createTag({
    id: "teste",
    className: "hidden",
    tagName: "p",
    content: "Teste 2",
    attribute: "disabled",
    valueAttribute: true,
  });

  const btn = createTag({
    id: "teste",
    className: "btn",
    tagName: "button",
    content: "Clique aqui",
    attribute: "type",
    valueAttribute: "submit",
  });

  addClass(p, ["error", "sucess", "disabled", "hidden"]);
  removeClass(p, ["error", "hidden"]);
  conditionalClass(p, ["error", "easy"]);
}

core();
