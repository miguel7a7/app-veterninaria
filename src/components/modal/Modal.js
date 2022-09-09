import React from 'react'
import { useSelector } from 'react-redux'
import './modal.css'

export const Modal = ({ children, closeModal }) => {
  const { modalOpen } = useSelector((state) => state.modal)

  const handleModalClose = (e) => {
    if (e.target.matches('.modal__container')) {
      closeModal()
    }
  }

  return (
    <div
      onClick={handleModalClose}
      className={`modal__container ${modalOpen ? 'modal-open' : 'modal-close'}`}
    >
      <div className="modal__content">{children}</div>
    </div>
  )
}
