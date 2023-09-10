class Car {
  static list = []

  static init(cars) {
    this.list = cars.map((i) => new this(i))
  }
  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id
    this.plate = plate
    this.manufacture = manufacture
    this.model = model
    this.image = image
    this.rentPerDay = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(rentPerDay)
    this.capacity = capacity
    this.description = description
    this.transmission = transmission
    this.available = available
    this.type = type
    this.year = year
    this.options = options
    this.specs = specs
    this.availableAt = availableAt
  }

  render() {
    return `
    <div class="card-cars shadow-lg">      
      <div >
        <img src="${this.image}" alt="${this.manufacture}" class="img-fluid" >
        <p class="fw-bold mt-3">${this.manufacture}/${this.model}</p>
        <h6 class="fw-bold">${this.rentPerDay}/Hari</h6>
        <p>${this.description}</p>
      </div>

    <div class="card-icons">
      <div>
        <img src="./assets/fi_users.svg" style="width:20px; height:20px">
        <span>${this.capacity} Orang</span>
      </div>

      <div>
        <img src="./assets/fi_settings.svg" style="width:20px; height:20px">
        <span>${this.transmission}</span>
      </div>

      <div>
        <img src="./assets/fi_calendar.svg" style="width:20px; height:20px">
        <span>Tahun ${this.year}</span>
      </div>
    </div>

      <button class="btn btn-success">Pilih Mobil</button>
    </div>
    `
  }
}
