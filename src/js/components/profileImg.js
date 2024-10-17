
export function createProfileImg(userProfile) {
  const profile = document.createElement('div')
  profile.classList.add('profile-photo');
  const profileImg = document.createElement('img')
  profileImg.src = userProfile.img_src;
  profileImg.alt = "profile";
  profile.appendChild(profileImg)


  return profile;
}
