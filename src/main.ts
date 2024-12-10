import './scss/style.scss'

const body = document.querySelector('body') as HTMLBodyElement
const main = document.querySelector('main') as HTMLDivElement
const btnOpen = document.querySelector('#button-open') as HTMLButtonElement
const btnClose = document.querySelector('#button-close') as HTMLButtonElement
const media = globalThis.matchMedia('(width < 69.375em') as MediaQueryList
const navContent = document.querySelector('.nav__content') as HTMLDivElement
const navOverlay = document.querySelector('.nav__overlay') as HTMLDivElement

function openMobileMenu() {
  // console.log('open menu')

  btnOpen.setAttribute('aria-expanded', 'true')
  body.classList.add('noscroll')
  navContent.removeAttribute('inert')
  main.setAttribute('inert', '')
  btnClose.focus()
}

function closeMobileMenu() {
  // console.log('close menu')

  btnOpen.setAttribute('aria-expanded', 'false')
  body.classList.remove('noscroll')
  navContent.setAttribute('inert', '')
  main.removeAttribute('inert')
  btnOpen.focus()
}

function setupNav(e: MediaQueryList | MediaQueryListEvent) {
  // console.log(`window.matchMedia is ${e.matches}`)

  if (e.matches) {
    // is mobile
    // console.log('is mobile')

    navContent.setAttribute('inert', '')

    setTimeout(() => {
      navContent.style.display = 'block'
      navOverlay.style.display = 'block'
    }, 500)
  } else {
    // is desktop
    // console.log('is desktop')

    navContent.removeAttribute('inert')
    main.removeAttribute('inert')

    navContent.style.display = ''
  }
}

btnOpen.addEventListener('click', () => openMobileMenu())
btnClose.addEventListener('click', () => closeMobileMenu())
media.addEventListener('change', (e) => setupNav(e))

setupNav(media)

// document.addEventListener('keyup', (e) => {
//   if (e.key === 'Tab') {
//     console.log(document.activeElement)
//   }
// })
