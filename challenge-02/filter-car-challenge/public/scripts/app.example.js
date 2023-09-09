class App {
  constructor() {
    this.clearButton = document.getElementById('clear-btn')
    this.loadButton = document.getElementById('load-btn')
    this.carContainerElement = document.getElementById('cars-container')

    this.buttonForm = document.getElementById('btn-form')
    this.typeDriver = document.querySelector('#inputType')
    this.capacityInput = document.querySelector('#inputCapacity')
    this.dateInput = document.querySelector('#inputDate')
    this.timeInput = document.querySelector('#inputTime')
  }

  async init() {
    await this.load()

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.buttonForm.onclick = this.run
  }

  run = async () => {
    this.clear()
    const typeDriver = this.typeDriver.value
    const capacity = this.capacityInput.value
    const date = this.dateInput.value
    const time = this.timeInput.value
    const newDate = new Date(`${date} ${time}`)

    if (typeDriver.length === 0) {
      return
    }

    const filtered = (data) =>
      data.available &&
      data.capacity >= +capacity &&
      new Date(data.availableAt).getTime() >= newDate

    const cars = await Binar.listCars(filtered)
    Car.init(cars)

    // validation cars length
    if (cars.length === 0) {
      this.carContainerElement.classList.remove('container-cars')
      const node = document.createElement('div')
      const h1 = document.createElement('h1')
      node.appendChild(h1)
      node.classList.add('empty-car')
      h1.innerHTML = 'No Suitable Car'

      this.carContainerElement.appendChild(node)
    } else {
      this.clear()
      this.carContainerElement.classList.add('container-cars')
    }

    Car.list.forEach((car) => {
      const node = document.createElement('div')
      node.innerHTML = car.render()
      this.carContainerElement.appendChild(node)
    })
  }

  async load() {
    const cars = await Binar.listCars()

    Car.init(cars)
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild

    while (child) {
      child.remove()
      child = this.carContainerElement.firstElementChild
    }
  }
}
