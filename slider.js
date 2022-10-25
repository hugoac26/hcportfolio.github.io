
const imgs = [
  'https://img.icons8.com/color/512/000000/python--v1.png',
  'https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png',
  'https://img.icons8.com/color/512/000000/javascript--v1.png',
  'https://img.icons8.com/color/512/000000/html-5--v1.png',
  'https://img.icons8.com/color/512/000000/css3.png',
  'https://cdn.icon-icons.com/icons2/2699/PNG/512/php_horizontal_logo_icon_170852.png',
  'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vba_icon_130097.png',

]

const template = document.createElement('template')
template.innerHTML = `
    <div class="container">
      <button class="forward">
        <img id="forwardIcon" src="assets/arrow_forward_ios_white_24dp.svg">
      </button>
      <div class="scroll">
        
      </div>
      <button class="backward">
        <img id="backwardIcon" src="assets/arrow_back_ios_white_24dp.svg">
      </button>
    </div>
  `

class listView extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({mode: 'open'})
    
    const importCss = document.createElement('style')
    importCss.innerHTML = `@import \'slider.css\'`

    const importScript = document.createElement('script')
    importScript.src = 'actions.js'

    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.appendChild(importCss)
    this.shadowRoot.appendChild(importScript)
    
    let list = ''
    let i = 0
    imgs.forEach(component)
    
    function component (model) {
      i += 1
      if (i == 1) {
        list += `
        <section id="${i}" class="active">
          <img src="${model}">
        </section>
        `
      } else {
        list += `
        <section id="${i}">
          <img src="${model}">
        </section>
        `
      }
    }

    const scroll = this.shadowRoot.querySelector('.scroll')
    scroll.innerHTML = list
  }
}

window.customElements.define('list-view', listView)