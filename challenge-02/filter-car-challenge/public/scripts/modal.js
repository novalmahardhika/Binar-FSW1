const form = document.querySelector('.container-input')
const modal = document.querySelector('.modal-custom')

// input Form
const typeDriver = document.querySelector('#inputType')
const dateInput = document.querySelector('#inputDate')
const timeInput = document.querySelector('#inputTime')
const capacityInput = document.querySelector('#inputCapacity')

// Modal
form.addEventListener('click', () => {
  modal.style.display = 'block'
})

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
})
