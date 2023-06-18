import { Typography } from '@mui/material'
import './App.css'
import { PlateForm } from './components/PlateForm'
import { AskImage } from './components/AskImage'
import { Plate } from './components/Plate'

function App () {
  return (
    <main className='h-screen w-screen flex flex-1 flex-col items-center p-10 gap-4'>
      <Typography variant='h1' fontSize={30} fontWeight='bold' textAlign='center'>Consulta Pico y Placa</Typography>
      <AskImage />
      <PlateForm />
      <Plate />
    </main>
  )
}

export default App
