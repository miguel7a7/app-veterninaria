import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Propietarios = () => {
  const notify = () => toast.error('Wow so easy !')

  return (
    <div>
      <h2>Propietarios</h2>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}
