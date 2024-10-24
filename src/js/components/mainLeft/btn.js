export class MainBtn {
  dom = null

  constructor() {
    this.build()
  }
// Create-post Btn
  build() {
    this.dom = document.createElement("label");
    this.dom.classList.add("btn");
    this.dom.classList.add("btn-primary");
    this.dom.innerHTML = "Create Post";
    this.dom.htmlFor = "create-post";
    console.log(this.dom)

    return this.dom;
  }
}
