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

// form submit
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   modal.style.display = 'none'

//   // if (
//   //   typeDriver.value === '' ||
//   //   dateInput.value === '' ||
//   //   timeInput.value === ''
//   // ) {
//   //   console.log('fuck')
//   // }

//   console.log(
//     typeDriver.value,
//     dateInput.value,
//     timeInput.value,
//     capacityInput.value
//   )
// })
