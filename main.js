// === pega o elemento nav dentro do header === //
const nav = document.querySelector('#header nav')
// === pega todos os elementos que tiverem a classe toggle dentro do nav === //
const toggle = document.querySelectorAll('nav .toggle')
// === pega todos os links que estão dentro da lista e que contem tag a === //
const links = document.querySelectorAll('nav ul li a')
// ====== Abre e fecha o menu ===== //
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
// ===== fecha o menu ao clicar em qualquer link do menu ===== //
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLL REVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .socials
  `,
  { interval: 100 }
)

const header = document.querySelector('#header')
const navHeight = header.scrollHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
const backTop = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
}

/* Menu ativo */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointIni = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointIni && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
