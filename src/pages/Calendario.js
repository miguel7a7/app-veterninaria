import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../helpers/calendario-mensajes'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import './styles/calendario.css'
import { CalendarEvents } from '../components/calendario/CalendarEvents'
import { CalendarModal } from '../components/calendario/CalendarModal'
import { useModal } from '../hooks/useModal'

moment.locale('es')

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Cumpleaños de jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: 'teal',
    notes: 'A no rendirse',
    user: {
      _id: 123,
      name: 'Miguel Angel',
    },
  },
]

export const Calendario = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false)
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
    // console.log(e)
    openModal()
  }

  // funcion para seleccionar evento
  const onSelecEvent = (e) => {
    // console.log(e)
  }

  // funcion para saber si estamos en semana o mes
  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
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
          view={lastView}
          components={{
            event: CalendarEvents,
          }}
        />
      </div>
      <CalendarModal isOpenModal={isOpenModal} closeModal={closeModal} />
    </div>
  )
}
