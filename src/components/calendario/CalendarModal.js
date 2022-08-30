import React, { useState } from 'react'
import { Modal } from '../modal/Modal'
import DateTimePicker from 'react-datetime-picker'

import './styles/calendarioModal.css'
import moment from 'moment'

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nouPlus1 = now.clone().add(1, 'hours')

export const CalendarModal = ({ isOpenModal, closeModal }) => {
  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nouPlus1.toDate())

  const [formValues, setFormValues] = useState({
    title: 'Evento',
    notes: '',
    start: now.toDate(),
    end: nouPlus1.toDate(),
  })

  const { title, notes, start, end } = formValues

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleStartDateChange = (e) => {
    setDateStart(e)
    setFormValues({
      ...formValues,
      start: e,
    })
  }

  const handleEndtDateChange = (e) => {
    setDateEnd(e)
    setFormValues({
      ...formValues,
      end: e,
    })
  }

  // Mensaje de Alerta toast
  /* const errorToastModal = () => {
    toast('Error, fecha 2 debe ser mayor ', {
      className: 'custom-toast',
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    })
  } */

  // Envio de formulario
  const handleSubmitForm = (e) => {
    e.preventDefault()

    const momentStart = moment(start)
    const momentEnd = moment(end)

    if (momentStart.isSameOrAfter(momentEnd)) {
      console.log('fecha 2 debe ser mayor')
      return null
    }
  }

  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <h1> Nuevo evento </h1>

      <hr />
      <form onSubmit={handleSubmitForm}>
        <div className="form-control">
          <label>Fecha y hora inicio</label>
          <DateTimePicker onChange={handleStartDateChange} value={dateStart} />
        </div>

        <div className="form-control">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndtDateChange}
            value={dateEnd}
            minDate={dateStart}
          />
        </div>

        <div className="form-control">
          <label>Titulo y notas</label>
          <input
            type="text"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small className="text-muted">Una descripción corta</small>
        </div>

        <div className="form-control">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
