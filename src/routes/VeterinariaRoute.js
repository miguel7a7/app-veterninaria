import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Calendario } from '../pages/Calendario'
import { Inicio } from '../pages/Inicio'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'
import { BtnToggle } from '../components/btnToggle/BtnToggle'
import { Propietarios } from '../pages/Propietarios'
import { Mascotas } from '../pages/Mascotas'
import { Servicios } from '../pages/Servicios'
import { Veterinarios } from '../pages/Veterinarios'
import { Cuidadores } from '../pages/Cuidadores'
import '../app.css'

export const VeterinariaRoute = () => {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false)

  const isToggleSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar)
  }
  return (
    <div className="app__container">
      <div className="app__content d-flex">
        <div className={`app__sidebar ${isActiveSidebar ? 'active' : ''}`}>
          <Sidebar isToggleSidebar={isToggleSidebar} />
        </div>
        <div className="app__main">
          <div className="app__navbar">
            <Navbar isToggleSidebar={isToggleSidebar} />
          </div>
          <article className="app__article-content">
            <Routes>
              <Route path="inicio" element={<Inicio />} />
              <Route path="calendario" element={<Calendario />} />
              <Route path="propietarios" element={<Propietarios />} />
              <Route path="mascotas" element={<Mascotas />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="veterinarios" element={<Veterinarios />} />
              <Route path="cuidadores" element={<Cuidadores />} />

              <Route path="/*" element={<Inicio />} />
            </Routes>
          </article>
        </div>
      </div>

      <div
        className={`app__btn-toggle ${
          isActiveSidebar ? 'active__btntoggle' : ''
        }`}
      >
        <BtnToggle
          isToggleSidebar={isToggleSidebar}
          isActiveSidebar={isActiveSidebar}
        />
      </div>
    </div>
  )
}
