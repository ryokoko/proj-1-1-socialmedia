export class Sidebar {
  sidebarInfo = null;
  dom = null;

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo;
  }

  #build() {
    const sidebar = document.createElement("div");
    this.dom = sidebar;
    this.dom.classList.add("sidebar");

    this.sidebarInfo.forEach((item) => {
      const menuItem = new MenuItem(item).build();
      this.dom.appendChild(menuItem);
    });

    return this.dom;
  }

  // changeThisValue(value) {
  //   this.value = value
  // }
  get build() {
    return this.#build
  }

}

export class MenuItem {
  title = null;
  iconList = null;
  dom = null;

  constructor(itemInfo) {
    this.title = itemInfo.name;
    this.iconList = itemInfo.icon_class_list;
  }

  build() {
    this.dom = document.createElement("a");
    this.don.classList.add("menu-item");

    this.dom.innerHTML = `
      <span>
        <i class="${this.iconList.join(" ")}" />
      </span>
      <h2>${this.title}</h2>
    `;
    return this.dom;     
  }
}
