function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars)

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = cars

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    for (let j = 0; j < cars.length - i - 1; j++) {
      if (cars[j].year < cars[j + 1].year) {
        let pos = cars[j]
        cars[j] = cars[j + 1]
        cars[j + 1] = pos
      }
    }
  }

  // console.log(result)
  // Rubah code ini dengan array hasil sorting secara descending
  return result
}
