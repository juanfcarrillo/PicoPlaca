import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
    <ToastContainer
      position='top-center'
      autoClose={1000}
      theme='dark'
    />
  </LocalizationProvider>
)
