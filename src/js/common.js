import { profile, sidebar } from "../../data/db.json";

import { ProfileArea } from "./components/mainLeft/profileArea";
import { createSidebarItem } from "./components/mainLeft/sidebar";
import Sidebar from './components/mainLeft/sidebarClassVer'
import { MainBtn } from "./components/mainLeft/btn";

export const profileArea = new ProfileArea().build(profile);
console.log(profileArea);
export const sidebarPanel = createSidebarItem(sidebar);
console.log(sidebarPanel)
const btn = new MainBtn();
export const createBtnLabel = btn.dom;
console.log(createBtnLabel);
