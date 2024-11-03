import { ProfileImg } from "../profileImg";

export class RequestList {
  dom = null;
  requestList = null;

  constructor(requestList = []) {
    this.requestList = requestList;
  }

  build(requestList) {
    const requestPanel = document.createElement("div");
    requestPanel.classList.add("request-list");

    const requestTitle = document.createElement("h2");
    requestTitle.textContent = "Requests";
    requestPanel.appendChild(requestTitle);

    requestList.forEach((item) => {
      const requestBlk = document.createElement("div");
      requestBlk.classList.add("request");

      const requestProfile = document.createElement("div");
      requestProfile.classList.add("profile");

      const profile = new ProfileImg().build(item);
      const profileDescription = document.createElement("div");
      profileDescription.classList.add("profile-description");
      profileDescription.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.mutualFriendNum} mutual friends</p>
      `;
      requestProfile.appendChild(profile);
      requestProfile.appendChild(profileDescription);

      const requestBtnGrp = document.createElement("div");
      requestBtnGrp.classList.add("request-btn-group");
      requestBtnGrp.innerHTML = `
        <span class="btn btn-primary">Accept</span>
        <span class="btn btn-cancel">Decline</span>
      `;

      requestBlk.appendChild(requestProfile);
      requestBlk.appendChild(requestBtnGrp);
      requestPanel.appendChild(requestBlk);
    });

    this.dom = requestPanel;
    return this.dom;
  }
}
