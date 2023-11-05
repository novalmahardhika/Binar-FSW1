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

export type CarType = {
  [x: string]: any
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
  isOpen: boolean
  isEmpty?: boolean

  // isEmpty: boolean
}

type CarTypeContext = {
  isValue: CarStateType
  // isEmpty: boolean
  cars: CarType
  filterCars: CarType
  setFilterCars: Dispatch<SetStateAction<CarStateType>>
  setIsValue: Dispatch<SetStateAction<CarStateType>>
  // setIsEmpty: Dispatch<SetStateAction<boolean>>
}

export const CarContext = createContext<CarTypeContext | null>(null)

export default function CarProvider({ children }: { children: ReactNode }) {
  const [isValue, setIsValue] = useState<any>({
    typeDriver: 'Pilih Tipe Driver',
    date: undefined,
    time: 'Pilih Waktu',
    capacity: '',
    isOpen: false,
    isEmpty: false,
  })
  const [cars, setCars] = useState<any>()
  const [filterCars, setFilterCars] = useState<any>()
  // const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
    )
      .then((res) => res.json())
      .then((data) => setCars(updatedCar(data)))
      .catch((err) => {
        throw new Error('Fetching Failed')
      })
  }, [])

  return (
    <CarContext.Provider
      value={{
        isValue,
        setIsValue,
        cars,
        filterCars,
        setFilterCars,
        // isEmpty,
        // setIsEmpty,
      }}
    >
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => {
  const context = useContext(CarContext)

  if (!context) {
    throw new Error('useCarContext should be used CarContext')
  }

  return context
}
