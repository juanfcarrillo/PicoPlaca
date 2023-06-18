import React from 'react'
import useStorePlate from '../../store/plate/usePlateStore'
import { Typography } from '@mui/material'
export interface PlateProps {}

const Plate: React.FC<PlateProps> = () => {
  const plateIndetifier = useStorePlate(store => store.plateIndetifier)

  return (
    <div className='min-h-[140px] min-w-[300px] mt-8 px-7 py-5 border-stone-900 border-4 rounded-md'>
      <Typography fontSize={60} fontWeight='bold'>{plateIndetifier}</Typography>
    </div>
  )
}

export default Plate
