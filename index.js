import "./index.scss";
import { profile, sidebar } from "./data/db.json";

console.log(sidebar);

const mainLeft = document.querySelector("main .container .main-left");
console.log(mainLeft);
// mainLeft.innerHTML = null
// const createDiv = document.createElement('div')
// createDiv.classList.add('test'
// )
// // createDiv.classList.toggle('btn')
// mainLeft.appendChild(test)

// Profile Area
const profileArea = document.createElement("div");
profileArea.classList.add("profile-area");
profileArea.classList.add("sidebar");
profileArea.innerHTML = `
            <div class="profile-photo">
              <img src="${profile.img_src}" alt="profile">
            </div>
            <div class="profile-info">
              <h2 class="profile-name">${profile.name}</h2>
              <p class="username">${profile.at}</p>
            </div>
`;

mainLeft.appendChild(profileArea);

// Sidebar
const sideBar = document.createElement("div");
sideBar.classList.add("sidebar");
mainLeft.appendChild(sideBar);

sidebar.forEach((item) => {
  const sidebarItem = document.createElement("a");
  sidebarItem.classList.add("menu-item");
  const span = document.createElement("span");
  const i = document.createElement("i");
  item.icon_class_list.forEach((iconClass) => {
    i.classList.add(iconClass);
  });
  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  span.appendChild(i);
  sidebarItem.appendChild(span);
  sidebarItem.appendChild(h2);

  sideBar.appendChild(sidebarItem);
});

// Create-post Btn
const createBtnLabel = document.createElement("label");
createBtnLabel.classList.add("btn");
createBtnLabel.classList.add("btn-primary");
createBtnLabel.innerHTML = "Create Post";
createBtnLabel.htmlFor = "create-post";

mainLeft.appendChild(createBtnLabel);
