import { profile } from "../../../../data/db.json";
import { ProfileImg } from "../profileImg";

export class ProfileArea {
  dom = null;
  profileData = null;

  constructor(profileData) {
    this.profileData = profileData;
  }

  build(profileData) {
    this.dom = document.createElement("div");
    this.dom.classList.add("profile-area");
    this.dom.classList.add("sidebar");
    const createProfileImg = new ProfileImg().build(profileData);
    console.log(createProfileImg);

    this.dom.appendChild(createProfileImg);
    const profileInfo = document.createElement("div");
    profileInfo.classList.add("profile-info");
    profileInfo.innerHTML = `
    <h2 class="profile-name">${profileData.name}</h2>
    <p class="username">${profileData.at}</p>
  `;
    this.dom.appendChild(profileInfo);
    return this.dom;
  }
}

// export function createProfileArea(profileData) {
//   const profileArea = document.createElement("div");
//   profileArea.classList.add("profile-area");
//   profileArea.classList.add("sidebar");

//   const createProfileImg = new ProfileImg().build(profileData);
//   console.log(createProfileImg);

//   // profileArea.appendChild(createProfileImg);
//   const profileInfo = document.createElement("div");
//   profileInfo.classList.add("profile-info");
//   profileInfo.innerHTML = `
//   <h2 class="profile-name">${profileData.name}</h2>
//   <p class="username">${profileData.at}</p>
// `;
//   profileArea.appendChild(profileInfo);
//   return profileArea;
// }
