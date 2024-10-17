import { createProfileImg } from "../profileImg";


export function createProfileArea(profileData) {
const profileArea = document.createElement("div")
profileArea.classList.add("profile-area");
profileArea.classList.add("sidebar");
profileArea.appendChild(createProfileImg(profileData));
// console.log(profileArea);
const profileInfo = document.createElement('div')
profileInfo.classList.add("profile-info");
profileInfo.innerHTML = `
  <h2 class="profile-name">${profileData.name}</h2>
  <p class="username">${profileData.at}</p>
`;
profileArea.appendChild(profileInfo);
return profileArea;
}