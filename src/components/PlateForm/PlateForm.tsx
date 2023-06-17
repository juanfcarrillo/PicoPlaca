import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import useStorePlate from '../../store/plate/usePlateStore'
import Plate, { ensureValidPlate, getLastDigit } from '../../domain/Plate/Plate'
import { getPicoPlacaRestriction } from '../../domain/PicoPlaca/PicoPlaca'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import hasRestriction from '../../utils/Plate/hasRestriction'

export interface PlateFormProps {}

const PlateForm: React.FC<PlateFormProps> = () => {
  const [plateIdentifier, setPlateIdentifier] = useState<string>('')
  const [date, setDate] = useState<Dayjs | null>(null)
  const [time, setTime] = useState<Dayjs | null>(null)
  const [restriction, setRestriction] = useState<boolean>(false)

  const setPlate = useStorePlate(store => store.setPlate)
  const plate = useStorePlate(store => store.plate)

  function getPlateRestricion (e: any) {
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

    setPlate({ ...plate })
  }

  function checkPlateRestriction (plate: Plate) {
    if ((date == null) || (time == null)) return false

    const restriction = hasRestriction(plate, date.toDate(), time.toDate())

    console.log({ restriction })

    setRestriction(restriction)
  }

  return (
    <form className='grid grid-cols-2 gap-4 max-w-lg' onSubmit={getPlateRestricion}>
      <DatePicker label='Fecha a circular' value={date} onChange={setDate} />
      <TimePicker label='Hora a circular' value={time} onChange={setTime} />
      <TextField label='Placa' placeholder='JD834G' value={plateIdentifier} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPlateIdentifier(e.target.value.toUpperCase())} />
      <Button variant='contained' type='submit'>Ver horario</Button>
    </form>
  )
}

export default PlateForm
