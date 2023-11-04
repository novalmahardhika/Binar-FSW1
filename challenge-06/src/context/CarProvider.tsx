'use client'

import { updatedCar } from '@/lib/updatedCars'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type CarType = {
  map(arg0: (car: any) => React.JSX.Element): React.ReactNode
  id: string
  image: string
  manufacture: string
  type: string
  rentPerDay: number
  description: string
  capacity: number | string
  transmission: string
  year: number
}

type CarStateType = {
  typeDriver?: string
  date: Date | undefined
  time: string
  capacity: number | string
}

type CarTypeContext = {
  isValue: CarStateType
  cars: CarType
  filterCars: CarType
  setFilterCars: Dispatch<SetStateAction<CarStateType>>
  setIsValue: Dispatch<SetStateAction<CarStateType>>
  // filteredCars: (a: any, b: any) => any
}

export const CarContext = createContext<CarTypeContext | null>(null)

export default function CarProvider({ children }: { children: ReactNode }) {
  const [isValue, setIsValue] = useState<any>({
    date: new Date(),
    time: 'Pilih Waktu',
    capacity: '',
  })

  const [cars, setCars] = useState<any>()
  const [filterCars, setFilterCars] = useState<any>()
  // const mergeData = new Date(
  //   `${isValue.date.toISOString().slice(0, 10)} ${isValue.time}`
  // )

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
    )
      .then((res) => res.json())
      .then((data) => setCars(updatedCar(data)))
  }, [])

  // const filteredCar = (mergeTime: any, capacity: number) => {
  //   const pickDate = mergeTime.getTime()

  //   const filter = cars?.filter((car: any) => {
  //     car.available &&
  //       new Date(car.availableAt).getTime() >= pickDate &&
  //       car.capacity >= +capacity
  //   })

  //   return filter
  // }

  // const filter = cars?.filter(
  //   (car: any) =>
  //     car.available &&
  //     new Date(car.availableAt).getTime() >= mergeData.getTime() &&
  //     car.capacity >= +isValue.capacity
  // )
  // console.log(cars)
  // console.log(filter)
  // console.log(typeof mergeData.getTime())

  // console.log(isValue.date?.toISOString().slice(0, 10))
  // console.log(isValue.time)
  // console.log(
  //   'newDate',
  //   new Date(`${isValue.date.toISOString().slice(0, 10)} ${isValue.time}`)
  // )

  return (
    <CarContext.Provider
      value={{
        isValue,
        setIsValue,
        cars,
        filterCars,
        setFilterCars,
      }}
    >
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => {
  const context = useContext(CarContext)

  if (!context) {
    throw new Error('useCar must be used within CarContextProvider')
  }

  return context
}
