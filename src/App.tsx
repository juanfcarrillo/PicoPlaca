import { TextField, Typography } from '@mui/material'
import './App.css'

function App() {
  return (
    <main className='h-screen w-screen flex-1 flex-col p-10'>
      <Typography variant='h1' fontSize={30} fontWeight='bold' textAlign='center'>Consulta Pico y Placa</Typography>
      <TextField label='Placa' placeholder='JD834G'/>
    </main>
  )
}

export default App
