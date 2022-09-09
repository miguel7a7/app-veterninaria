import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Propietarios = () => {
  const closeAfter15 = () =>
    toast.error('Will close after 15s', { autoClose: 3000 })

  const closeAfter7 = () =>
    toast.success('Will close after 7s', { autoClose: 3000 })

  return (
    <div>
      <button onClick={closeAfter15}>Close after 15 seconds</button>
      <button onClick={closeAfter7}>Close after 7 seconds</button>
      <ToastContainer />
    </div>
  )
}
