import React, { useState } from 'react'
import { AiFillSetting, AiOutlinePoweroff } from 'react-icons/ai'
import { Link } from 'react-router-dom'

//  import manitas from '../assets/svg/manitas.svg'
import adopta from '../assets/svg/adopta.svg'
import './navbar.css'

export const Navbar = () => {
  const [btnToggleSetting, setBtnToggleSetting] = useState(false)

  const isOpenSetting = () => {
    setBtnToggleSetting(!btnToggleSetting)
  }

  return (
    <div className="nav__container mb-1">
      <div className="nav__content">
        <img
          src={adopta}
          alt="manitas"
          loading="lazy"
          className="nav__logo-img"
        />

        <div className="nav__setting">
          <div className="nav__setting-user d-flex">
            <p>
              Bienvenido: <span>Miguel Angel</span>
            </p>
            <button className="nav__setting-btn" onClick={isOpenSetting}>
              <AiFillSetting />
            </button>
          </div>
          <ul
            className={`${
              btnToggleSetting
                ? 'nav__setting-list none__btn-setting'
                : 'nav__setting-list'
            }`}
          >
            <li>
              <Link to="/" className="d-flex nav__item">
                <span>
                  <AiFillSetting />
                </span>
                <p>Configuraciones</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="d-flex nav__item">
                <span>
                  <AiOutlinePoweroff />
                </span>
                <p>Cerrar Sesión</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
