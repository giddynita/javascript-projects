const email = document.getElementById('email')
const password = document.getElementById('password')
const emailAlert = document.getElementById('email-alert')
const form = document.querySelector('form')
const symbol = document.getElementById('symbol')
const characters = document.getElementById('characters')

form.addEventListener('submit', (e) => {
  const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  if (password.value.length > 5 && symbols.test(password.value)) {
    password.classList.remove('danger')
  } else {
    e.preventDefault()
    password.classList.add('danger')
    alert('Meet password requirement(s)')
  }
})

password.addEventListener('input', () => {
  const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  password.value.length > 5
    ? (characters.checked = true)
    : (characters.checked = false)

  symbols.test(password.value)
    ? (symbol.checked = true)
    : (symbol.checked = false)
  if (password.value.length > 5 && symbols.test(password.value)) {
    password.classList.add('success')
    password.classList.remove('danger')
  } else {
    password.classList.add('danger')
    password.classList.remove('success')
  }
})
