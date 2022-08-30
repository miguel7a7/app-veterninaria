import React from 'react'

import { AiFillHome, AiFillGitlab } from 'react-icons/ai'
import {
  BsFillCalendarDateFill,
  BsPeopleFill,
  BsPersonLinesFill,
  BsPersonSquare,
  BsCardChecklist,
} from 'react-icons/bs'
import './sidebar.css'

import dod from '../assets/svg/dog.svg'
import { NavLink } from 'react-router-dom'

export const Sidebar = ({ isToggleSidebar }) => {
  const activeStyle = {
    color: '#ff8c00',
  }

  return (
    <div className="sidebar__container">
      <div className="sidebar__content">
        <div className="sidebar__img">
          <img src={dod} alt="logo-dog" />
        </div>
        <ul className="sidebar__items">
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/inicio"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <AiFillHome />
              <span>Inicio</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/calendario"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsFillCalendarDateFill />
              <span>Calendario Citas</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/propietarios"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsPeopleFill />
              <span>Propietarios</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/mascotas"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <AiFillGitlab />
              <span>Mascotas</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/servicios"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsCardChecklist />
              <span>Servicios</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/veterinarios"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsPersonLinesFill />
              <span>Veterninarios</span>
            </NavLink>
          </li>
          <li className="sidebar__item" onClick={isToggleSidebar}>
            <NavLink
              to="/cuidadores"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsPersonSquare />
              <span>Cuidadores</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
