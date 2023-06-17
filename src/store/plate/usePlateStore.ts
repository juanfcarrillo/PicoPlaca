import { create } from 'zustand'
import Plate from '../../domain/Plate/Plate'

interface IPlateStore {
  plate: Plate
  plateIndetifier: string
  setPlate: (plate: Plate) => void
  setPlateIdentifier: (plateIdentifier: string) => void
}

const useStorePlate = create<IPlateStore>()((set) => ({
  plate: {} as Plate,
  setPlate: (plate: Plate) => set({ plate }),
  plateIndetifier: '',
  setPlateIdentifier: (plateIndetifier: string) => set({ plateIndetifier })
}))

export default useStorePlate
