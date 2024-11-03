import { profile, sidebar, highlight, message, request } from "../../data/db.json";

import { ProfileArea } from "./components/mainLeft/profileArea";
import { createSidebarItem } from "./components/mainLeft/sidebar";
import Sidebar from './components/mainLeft/sidebarClassVer'
import { MainBtn } from "./components/mainLeft/btn";
import { Highlight } from "./components/mainMiddle/highlight";
import { createMessage } from "./components/mainRight/createMessage";
import { FriendList } from "./components/mainRight/friendList";
import { RequestList } from "./components/mainRight/requestList";

export const profileArea = new ProfileArea().build(profile);
// console.log(profileArea);
export const sidebarPanel = createSidebarItem(sidebar);
// console.log(sidebarPanel)
const btn = new MainBtn();
export const createBtnLabel = btn.dom;
// console.log(createBtnLabel);
export const highlightSection = new Highlight().build(highlight);
console.log(highlightSection)

export const messagePanel = createMessage();
export const friendList = new FriendList().build(message)
messagePanel.appendChild(friendList)
console.log(messagePanel);

export const requestPanel = new RequestList().build(request);



