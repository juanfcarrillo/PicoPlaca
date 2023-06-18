import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import useStorePlate from '../../store/plate/usePlateStore'
import Plate, { ensureValidPlate, getLastDigit } from '../../domain/Plate/Plate'
import { getPicoPlacaRestriction } from '../../domain/PicoPlaca/PicoPlaca'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import hasRestriction from '../../utils/Plate/hasRestriction'
import { RestrictionDialog } from '../RestrictionDialog'

export interface PlateFormProps {}

const PlateForm: React.FC<PlateFormProps> = () => {
  const plateIdentifier = useStorePlate(store => store.plateIndetifier)
  const setPlateIdentifier = useStorePlate(store => store.setPlateIdentifier)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [date, setDate] = useState<Dayjs | null>(null)
  const [time, setTime] = useState<Dayjs | null>(null)
  const [restriction, setRestriction] = useState<boolean | undefined>()

  const setPlate = useStorePlate(store => store.setPlate)

  function getPlateRestricion (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const plateLastDigit = getLastDigit(plateIdentifier)
    const plateRestriction = getPicoPlacaRestriction(plateLastDigit)

    const plate: Plate = {
      identifier: plateIdentifier,
      lastDigit: plateLastDigit,
      restriction: plateRestriction
    }

    ensureValidPlate(plate)

    checkPlateRestriction(plate)
    setOpenDialog(true)

    setPlate({ ...plate })
  }

  function checkPlateRestriction (plate: Plate) {
    if ((date == null) || (time == null)) return false

    const restriction = hasRestriction(plate, date.toDate(), time.toDate())

    setRestriction(restriction)
  }

  return (
    <form className='grid grid-cols-2 gap-4 max-w-lg' onSubmit={getPlateRestricion}>
      <RestrictionDialog open={openDialog} onClose={() => setOpenDialog(false)} hasRestriction={restriction} />
      <DatePicker label='Fecha a circular' value={date} onChange={setDate} />
      <TimePicker label='Hora a circular' value={time} onChange={setTime} />
      <TextField label='Placa' placeholder='JD-834G' value={plateIdentifier} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPlateIdentifier(e.target.value.toUpperCase())} />
      <Button variant='contained' type='submit' size='small'>Ver restricción</Button>
    </form>
  )
}

export default PlateForm
