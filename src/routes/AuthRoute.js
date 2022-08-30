import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../login/Login'
import { Registro } from '../login/Registro'

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registro />} />

      <Route path="/*" element={<Login />} />
    </Routes>
  )
}
