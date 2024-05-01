import createElementHTML from "./controller/create/createElementHTML";

function core() {
  const app = document.querySelector("#app");

  const createElement = createElementHTML();

  let element = createElement.createTag("p", "teste");

  app.appendChild(element);

  console.log(element);
}

core();
