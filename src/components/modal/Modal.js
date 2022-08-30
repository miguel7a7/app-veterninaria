import React from 'react'
import './modal.css'

export const Modal = ({ children, isOpenModal, closeModal }) => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal__container')) {
      closeModal()
    }
  })

  return (
    <div
      className={`modal__container ${
        isOpenModal ? 'modal-open' : 'modal-close'
      }`}
    >
      <div className="modal__content">{children}</div>
    </div>
  )
}
