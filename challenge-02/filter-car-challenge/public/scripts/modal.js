const modal = document.querySelector('.modal-custom')
const form = document.querySelector('.container-input')

form.addEventListener('click', () => {
  modal.style.display = 'block'
})

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
})
