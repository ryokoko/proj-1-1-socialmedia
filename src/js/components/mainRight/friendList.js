import { ProfileImg } from "../profileImg"


export class FriendList {
  dom = null;
  friendMessageList = null;

  constructor(friendMessageList = []) {
    this.friendMessageList = friendMessageList;
  }

  build(friendMessageList) {
    const friendList = document.createElement('div')
    friendList.classList.add('friend-list')


    friendMessageList.forEach(item => {
      const friendMessage = document.createElement('div')
      friendMessage.classList.add('profile')

      // profile pic
      const friendProfile = new ProfileImg().build(item);
      const profileDescription = document.createElement('div')
      profileDescription.classList.add('profile-description')
      profileDescription.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.msg}</p>
      `
      friendMessage.appendChild(friendProfile)
      friendMessage.appendChild(profileDescription)

      friendList.appendChild(friendMessage);
    });

    this.dom = friendList

    return this.dom
  }
}