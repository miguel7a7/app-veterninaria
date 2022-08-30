import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRoute } from './AuthRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { VeterinariaRoute } from './VeterinariaRoute'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRoute />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <VeterinariaRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
