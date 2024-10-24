export class ProfileImg {
  dom = null;
  userProfile = null;

  constructor(userProfile) {
    this.userProfile = userProfile;
  }
  build(userProfile) {
    this.dom = document.createElement("div");
    this.dom.classList.add("profile-photo");

    const profileImg = document.createElement("img");
    profileImg.src = userProfile.img_src;
    profileImg.alt = "profile";
    this.dom.appendChild(profileImg);
    console.log(this.dom);

    return this.dom;
  }
}
