function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Tempat penampungan hasil
  const result = []

  // Tulis code-mu disini

  // using for loop
  for (let i = 0; i < cars.length; i++) {
    let carsAvailable = cars[i].available

    if (carsAvailable) {
      result.push(cars[i])
    }
  }

  // using mapping
  // cars.map((car) => (car.available ? result.push(car) : ''))

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result
}
