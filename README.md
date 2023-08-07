
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>OCR-Google-Vision
</h1>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
</p>
<img src="https://img.shields.io/github/languages/top/presylord/OCR-Google-Vision?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/presylord/OCR-Google-Vision?style&color=5D6D7E" alt="GitHub code size in bytes" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)


---


## 📍 Overview

The project is a web application that utilizes the Google Vision API to perform Optical Character Recognition (OCR) on uploaded images. It allows users to easily extract text from images by providing an intuitive user interface with features such as drag and drop image selection, image preview, and text extraction. The application's value proposition lies in its ability to automate text extraction, saving users time and effort while providing accurate and reliable results.


---

## 🧩 Modules


| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [.eslintrc.cjs](https://github.com/presylord/OCR-Google-Vision/blob/main/.eslintrc.cjs)   | This code snippet exports a configuration object for the ESLint tool to enable linting of React code. It includes browser and ES2020 environment settings, extends recommended rules and plugins for React, sets the parser options, and specifies React version and additional plugins. One specific rule is configured for warning about only exporting components.                                                                         |
| [index.html](https://github.com/presylord/OCR-Google-Vision/blob/main/index.html)         | The provided code snippet is an HTML file that sets up the basic structure of a web page. It includes a reference to a Bootstrap stylesheet and JavaScript file for styling and functionality. It also imports a custom JavaScript module called "main.jsx" that is likely responsible for the core features of the webpage. The webpage is titled "OCR-Google Vision" and has a root element where the content of the page will be rendered. |
| [vite.config.js](https://github.com/presylord/OCR-Google-Vision/blob/main/vite.config.js) | This code snippet is importing the `defineConfig` function from the'vite' library and the `react` plugin from the'@vitejs/plugin-react' package. The `defineConfig` function is used to define the Vite configuration and it is passed the `react` plugin as a parameter. This configuration is then exported as the default export of the module.                                                                                            |
| [App.css](https://github.com/presylord/OCR-Google-Vision/blob/main/src\App.css)           | The code snippet contains CSS styles for different elements. It sets the background gradient, adjusts padding and width for the root container, defines styles for a card element and a drag container, formats the image preview, creates a horizontal line with text, customizes the file selector button, sets styling for text extraction, and includes animations for a loading spinner.                                                 |
| [App.jsx](https://github.com/presylord/OCR-Google-Vision/blob/main/src\App.jsx)           | The code snippet provides the functional logic for an application that allows users to upload an image, detect and extract text from the image using the Google Vision API. The code handles image selection, drag and drop functionality, image preview, text detection, and displaying the extracted text. It also includes a loading indicator and a reset button.                                                                         |
| [index.css](https://github.com/presylord/OCR-Google-Vision/blob/main/src\index.css)       | This code snippet defines styles for various elements like root, links, body, headings, and buttons. It includes font and color settings, responsive styles for light/dark mode, and hover/focus effects.                                                                                                                                                                                                                                     |
| [Loading.jsx](https://github.com/presylord/OCR-Google-Vision/blob/main/src\Loading.jsx)   | The code snippet is a functional component called "Loading" that displays a loading animation consisting of a grid of nine divs. It utilizes the CSS class "lds-grid" to style the div elements and create the loading animation effect.                                                                                                                                                                                                      |
| [main.jsx](https://github.com/presylord/OCR-Google-Vision/blob/main/src\main.jsx)         | This code snippet initializes and renders a React application. It imports the necessary dependencies, sets up the root element to render the application, and applies strict mode for enhanced development checks. The main component to render is `<App />`, which is wrapped in `<React.StrictMode>`. The associated CSS file (`index.css`) is also imported for styling the application.                                                   |

</details>

---

## 🚀 Getting Started

### 📦 Installation

1. Clone the OCR-Google-Vision repository:
```sh
git clone https://github.com/presylord/OCR-Google-Vision
```

2. Change to the project directory:
```sh
cd OCR-Google-Vision
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using OCR-Google-Vision

```sh
node app.js
```

---
