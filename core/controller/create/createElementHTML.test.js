import { expect, test } from "vitest";
import createElementHTML from "./createElementHTML.js";
import { JSDOM } from "jsdom";

// Set up a simulated DOM environment
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
global.document = window.document;
global.window = window;

test("createElementHTML", () => {
  const appElement = document.getElementById("app");

  if (appElement) {
    const createElement = createElementHTML(appElement);

    const p = createElement.createTag({
      id: "teste",
      className: "hidden",
      tagName: "p",
      content: "Teste 2",
      attribute: "disabled",
      valueAttribute: true,
    });

    expect(appElement.contains(p)).toBe(true);
  }
});
