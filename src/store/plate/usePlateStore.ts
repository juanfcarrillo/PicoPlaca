import { create } from 'zustand'
import Plate from '../../domain/Plate/Plate'

interface IPlateStore {
  plate: Plate
  setPlate: (plate: Plate) => void
}

const useStorePlate = create<IPlateStore>()((set) => ({
  plate: {} as Plate,
  setPlate: (plate: Plate) => set({ plate })
}))

export default useStorePlate
