import React, { useState, useEffect } from 'react'
import { Modal } from '../modal/Modal'
import DateTimePicker from 'react-datetime-picker'
import { ToastContainer } from 'react-toastify'

import './styles/calendarioModal.css'
import moment from 'moment'
import { alertaError } from '../../helpers/alertasMessages'
import { useDispatch, useSelector } from 'react-redux'
import { isCloseModal } from '../../features/modal/modalSlice'
import {
  eventAddNew,
  eventClearActiveEvent,
  eventUpdate,
} from '../../features/calendar/calendarSlice'

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nouPlus1 = now.clone().add(1, 'hours')

const initialEvent = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: nouPlus1.toDate(),
}

export const CalendarModal = ({ isOpenModal }) => {
  const dispatch = useDispatch()
  const { activeEvent } = useSelector((state) => state.calendar)

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nouPlus1.toDate())

  const [formValues, setFormValues] = useState(initialEvent)

  const { title, notes, start, end } = formValues

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent)
    } else {
      setFormValues(initialEvent)
    }
  }, [activeEvent, setFormValues])

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

  // Cerrando Modal
  const closeModal = () => {
    // Cerrando Modal
    dispatch(isCloseModal())
    // Restaurando el evento seleccionado
    dispatch(eventClearActiveEvent())
    // Reset Modal
    setFormValues(initialEvent)
  }

  // Envio de formulario
  const handleSubmitForm = (e) => {
    e.preventDefault()

    const momentStart = moment(start)
    const momentEnd = moment(end)

    // verificacion fecha fin sea mayor que fecha inicio
    if (momentStart.isSameOrAfter(momentEnd))
      return alertaError('La fecha fin debe ser mayor que la fecha inicio!!!')

    // verificacion que title no sea null ni menos de 2 caracteres
    if (title.trim().length < 2)
      return alertaError('Revise el campo titulo, minimo 2 caracteres')

    if (activeEvent) {
      dispatch(eventUpdate(formValues))
    } else {
      // Enviando Formulario a Dispatch
      dispatch(
        eventAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: '123',
            name: 'Miguel',
          },
        })
      )
    }

    // Cerrando Modal
    closeModal()
  }

  return (
    <Modal closeModal={closeModal}>
      <h1> {activeEvent ? 'Editar Evento' : 'Nuevo Evento'} </h1>
      <ToastContainer />
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
          <span>Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
