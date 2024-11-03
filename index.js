import "./index.css";
import { profile, sidebar } from "./data/db.json";

import {
  profileArea,
  sidebarPanel,
  createBtnLabel,
  highlightSection,
  messagePanel,
  requestPanel
} from "./src/js/common";

// console.log(sidebar);

// Main Left
const mainLeft = document.querySelector("main .container .main-left");
console.log(mainLeft);
// mainLeft.innerHTML = null
// const createDiv = document.createElement('div')
// createDiv.classList.add('test'
// )
// // createDiv.classList.toggle('btn')
// mainLeft.appendChild(test)

// Profile Area

mainLeft.appendChild(profileArea);
// console.log(sidebarPanel)
// mainLeft.appendChild(sideBar);
mainLeft.appendChild(sidebarPanel);
mainLeft.appendChild(createBtnLabel);


// Main Middle
const mainMiddle = document.querySelector("main .container .main-middle");
mainMiddle.appendChild(highlightSection)

// Main Right
const mainRight = document.querySelector('.main-right')
mainRight.appendChild(messagePanel)
mainRight.appendChild(requestPanel)