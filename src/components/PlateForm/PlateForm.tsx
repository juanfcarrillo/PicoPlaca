import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import useStorePlate from '../../store/plate/usePlateStore'
import Plate, { ensureValidPlate, getLastDigit } from '../../domain/Plate/Plate'
import { getPicoPlacaRestriction } from '../../domain/PicoPlaca/PicoPlaca'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

export interface PlateFormProps {}

const PlateForm: React.FC<PlateFormProps> = () => {
  const [plateIdentifier, setPlateIdentifier] = useState<string>('')
  const [date, setDate] = useState<Dayjs | null>(null)

  const plate = useStorePlate(store => store.plate)
  const setPlate = useStorePlate(store => store.setPlate)

  function getPlateRestricion () {
    const plateLastDigit = getLastDigit(plateIdentifier)
    const plateRestriction = getPicoPlacaRestriction(plateLastDigit)

    const plate: Plate = {
      identifier: plateIdentifier,
      lastDigit: plateLastDigit,
      restriction: plateRestriction
    }

    ensureValidPlate(plate)

    setPlate({ ...plate })
  }

  return (
    <form>
      <TextField label='Placa' placeholder='JD834G' value={plateIdentifier} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPlateIdentifier(e.target.value.toUpperCase())} />
      <DatePicker label='Fecha a circular' value={date} onChange={setDate} />
      <TimePicker label='Hora a circular' />
      <h2>{plateIdentifier}</h2>
      {(plate.restriction != null) && <h2>{JSON.stringify(plate.restriction)}</h2>}
      <Button variant='contained' onClick={getPlateRestricion}>Ver horario</Button>
    </form>
  )
}

export default PlateForm
