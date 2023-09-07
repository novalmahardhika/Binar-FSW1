class App {
  constructor() {
    this.clearButton = document.getElementById('clear-btn')
    this.loadButton = document.getElementById('load-btn')
    this.carContainerElement = document.getElementById('cars-container')
    this.form = document.querySelector('.container-input')
    this.capacityInput = document.querySelector('#inputCapacity')
    this.value = 0
  }

  async init() {
    await this.load()

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    // this.form.onsubmit = this.submit
  }

  // submit = (e) => {
  //   e.preventDefault()

  //   this.value = +this.capacityInput.value
  // }

  run = () => {
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
