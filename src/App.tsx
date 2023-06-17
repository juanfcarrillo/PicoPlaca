import { Button, TextField, Typography } from '@mui/material'
import './App.css'
import useStorePlate from './store/plate/usePlateStore'
import Plate, { ensureValidPlate, getLastDigit } from './domain/Plate/Plate'
import { getPicoPlacaRestriction } from './domain/PicoPlaca/PicoPlaca'
import { useState } from 'react'

function App () {
  const [plateIdentifier, setPlateIdentifier] = useState<string>('')
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
    <main className='h-screen w-screen flex-1 flex-col p-10'>
      <Typography variant='h1' fontSize={30} fontWeight='bold' textAlign='center'>Consulta Pico y Placa</Typography>
      <TextField label='Placa' placeholder='JD834G' value={plateIdentifier} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPlateIdentifier(e.target.value.toUpperCase())} />
      <h2>{plateIdentifier}</h2>
      {(plate.restriction != null) && <h2>{JSON.stringify(plate.restriction)}</h2>}
      <Button variant='contained' onClick={getPlateRestricion}>Ver horario</Button>
    </main>
  )
}

export default App
