const body = document.querySelector('body')
const $register = document.querySelectorAll('[register]')
const $modalClose = document.querySelector('[modal\\@close]')
const $formRegister = document.querySelector('[form\\@register]')

for (var i = 0; i < $register.length; i++) {
  $register[i].addEventListener('click', (event) => {
    event.preventDefault()
    body.classList.add('»modal')
  })
}

$modalClose.addEventListener('click', (event) => {
  event.preventDefault()
  body.classList.remove('»modal')
})


$formRegister.addEventListener('submit', (event) => {
  event.preventDefault()
})
