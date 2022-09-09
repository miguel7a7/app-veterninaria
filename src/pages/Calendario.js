import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../helpers/calendario-mensajes'
import moment from 'moment'
import { CalendarEvents } from '../components/calendario/CalendarEvents'
import { CalendarModal } from '../components/calendario/CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenModal } from '../features/modal/modalSlice'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import './styles/calendario.css'
import {
  eventClearActiveEvent,
  eventSetActive,
} from '../features/calendar/calendarSlice'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteBtnFab } from '../ui/DeleteBtnFab'

moment.locale('es')

const localizer = momentLocalizer(moment)

export const Calendario = () => {
  const dispatch = useDispatch()
  // Leendo los eventos agragados
  const { events, activeEvent } = useSelector((state) => state.calendar)
  // Localstorage guardado de la vista
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )
  // Estilos del evento Item
  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: '#1a202d',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
      fontSize: '12px',
      fontWeight: '100',
    }

    return { style }
  }

  // funcion para abrir modal
  const onDoubleClick = (e) => {
    dispatch(isOpenModal())
  }

  // funcion para seleccionar evento
  const onSelecEvent = (e) => {
    dispatch(eventSetActive(e))
  }

  // funcion para saber si estamos en semana o mes
  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
  }

  // funcion para cunado se hace click sin abrir el modal
  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent())
  }

  return (
    <div>
      <div className="calendario__container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelecEvent}
          onView={onViewChange}
          onSelectSlot={onSelectSlot}
          selectable={true}
          view={lastView}
          components={{
            event: CalendarEvents,
          }}
        />
      </div>

      <AddNewFab />

      {activeEvent && <DeleteBtnFab />}

      <CalendarModal />
    </div>
  )
}
