import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const alertaError = (message = 'Error') => {
  return toast.error(message, { autoClose: 2000 })
}
