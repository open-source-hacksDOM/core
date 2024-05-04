# hacksDOM:

Why do I use a library to manipulate my DOM?
The focus of this library is to provide a common "DSL" for DOM manipulation. It doesn't matter if the platform is mobile or web. Easily add classes to your components. Create HTML elements and easily manipulate your DOM tree.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Static Badge](https://img.shields.io/badge/dimascamillo-open_source_hacksDOM-blue)



## Stack

**Front-end:** Vanilla.js

## Get Started

## Contributing

- The project is not well structured for contributions right now, if you find a bug, please [open an issue](https://github.com/hacksDOM/core/issues) and let's discuss how to implement it 😋.

## How to use?

### createElementHTML

```
js

  //import module in your script
  import createElementHTML from "@/createElementHTML";

  const app = document.querySelector("#app");

  const createElement = createElementHTML(app);

  const p = createElement.createTag({
    id: "error",
    className: "bad__request",
    tagName: "p",
    content: "Page Not Found 404",
    valueAttribute: true,
  });

  const button = createElement.createTag({
    id: "btn_submit",
    className: "btn__green",
    tagName: "button",
    content: "Create User",
    attribute: "type",
    valueAttribute: "submit",
    });
```

## How to install?

pnpm

```sh
npm install
```

## Run Test

```sh
pnpm test
```

## 🚀 About me

I am a professional with more than 5 years of experience in Front-end, in recent years I have dedicated myself to Full-Stack Development specializing in React (Next.js), Node.Js and JAVA.
