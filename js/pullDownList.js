const menuBlock = document.querySelector('.menu')
const menuHidden = Array.from(menuBlock.querySelectorAll('.menu__hidden'))
const menuItems = Array.from(menuBlock.getElementsByTagName('p'))

function openMenu(e) {
    e.stopPropagation()
    // console.log("Open menu of", this)
    console.log('bebug!')
    this.classList.toggle("menu-p-psehdo-rotate")
    // console.log(this.getAttribute('toggle'))
    menuHidden.forEach(div => {
        if ((this.getAttribute('toggle')) === (div.getAttribute('toggler'))) {
            div.classList.toggle('menu__show')
        }

    })
}
menuItems.forEach(p => {
    p.addEventListener('mouseup', openMenu)
})

// document.onclick - function (e) {
//     console.log(e.target.className)
// }

const hid = document.querySelector('.menu__hidden')

document.addEventListener('mousedown', (e)=>{
  if (!e.target.closest('.menu__hidden') && !e.target.classList.contains('menu-p-psehdo-rotate')) {
    menuHidden.forEach(el =>{
      el.classList.remove('menu__show')
    menuItems.forEach(el =>{
        el.classList.remove('menu-p-psehdo-rotate')
    })  
    })
  }
  
})