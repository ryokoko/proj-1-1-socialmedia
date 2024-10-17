import { profile, sidebar } from "../../data/db.json";

import { createProfileArea } from "./components/mainLeft/profileArea";
import { createSidebarItem } from "./components/mainLeft/sidebar";
import { createMainBtn } from "./components/mainLeft/btn";

export const profileArea = createProfileArea(profile);
export const sidebarPanel = createSidebarItem(sidebar);
// console.log(sidebarPanel)
export const createBtnLabel = createMainBtn(profile);
