import { ProfileImg } from "../profileImg";

export class Highlight {
  dom = null
  highlightInfo = null

  constructor(highlightInfo) {
    this.highlightInfo = highlightInfo
  }

  build(highlightInfo) {
    const highlight = document.createElement('div')
    highlight.classList.add('highlight')

    highlightInfo.forEach(highlightItem => {
      const hlCard = new HighlightCard().build(highlightItem)

      highlight.appendChild(hlCard)
    }
  );

  this.dom = highlight;

  return this.dom;
  }
}

class HighlightCard {
  dom = null
  highlightInfo = null

  constructor(highlightInfo) {
    this.highlightInfo = highlightInfo
  }

  build(highlightInfo) {
    const highlightCard = document.createElement('div')
    highlightCard.classList.add('description')
    highlightCard.style.backgroundImage = `url("${highlightInfo.background}"`

    const profilePhoto = new ProfileImg().build(highlightInfo)
    
    const highlightTitle = document.createElement('p')
    highlightTitle.textContent = `${highlightInfo.title}`

    highlightCard.appendChild(profilePhoto)
    highlightCard.appendChild(highlightTitle)

    this.dom = highlightCard

    return this.dom
  }
}