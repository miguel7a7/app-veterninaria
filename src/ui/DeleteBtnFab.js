import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { eventDelete } from '../features/calendar/calendarSlice'

export const DeleteBtnFab = () => {
  const dispatch = useDispatch()

  const handleBtnDeleteFab = () => {
    dispatch(eventDelete())
  }
  return (
    <button className="fab__content-delete" onClick={handleBtnDeleteFab}>
      <MdDelete className="fab__icon-delete" />
      <span className="fab__icon-title">Borrar Evento</span>
    </button>
  )
}
