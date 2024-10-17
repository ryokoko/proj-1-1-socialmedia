// Create-post Btn
export function createMainBtn() {
const createBtnLabel = document.createElement("label");
createBtnLabel.classList.add("btn");
createBtnLabel.classList.add("btn-primary");
createBtnLabel.innerHTML = "Create Post";
createBtnLabel.htmlFor = "create-post";

return createBtnLabel;
}
