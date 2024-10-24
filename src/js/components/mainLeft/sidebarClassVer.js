// import { sidebar } from '../../../../data/db.json'

export default class Sidebar {
  // All info needed
  sidebarInfo = null
  dom = null

  constructor() {
    this.sidebarInfo = sidebarInfo
    this.build()
    return this.dom

  }
  build = () => {
    this.#createSidebar()
  }

  // 不可修改里面的内容
  #createSidebar() {
    this.dom = document.createElement("div")
    this.dom.classList.add('sidebar')
    this.sidebarInfo.forEach(item => {
      const sidebarItem = this.#createSidebarItem(item);
      this.dom.appendChild(sidebarItem)
    });
    // return this.dom  
  }

  #createSidebarItem(item) {
    const sidebarItem = this.#createBasicSidebarItem(item)
    const icon = this.#createIcon(item)
    const title = this.#createTitle(item)

    sidebarItem.appendChild(icon)
    sidebarItem.appendChild(title)
    return sidebarItem
  }

  #createBasicSidebarItem(item) {
    const sidebarItem = document.createElement('a')
    sidebarItem.classList.add('menu-item')
    sidebarItem.classList.add(item.name)
    return sidebarItem
  }

  #createIcon(item) {
  const span = document.createElement('span');
  const i = document.createElement('i')
  item.icon_class_list.forEach(iconClass => {
    i.classList.add(iconClass)
  })
  span.appendChild(i)
  return span
  

  }

  #createTitle(item) {
    const h2 = document.createElement('h2')
    h2.textContent = item.name;
    return h2
  }
}

// const sidebar = new Sidebar(sidebar)