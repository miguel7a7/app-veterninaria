import React from 'react'

import '../../pages/styles/calendario.css'

export const CalendarEvents = ({ event }) => {
  const { title, user } = event
  return (
    <div className="calendarevents__container">
      <strong className="calendarevents__title">{title}</strong>
      <span className="calendarevents__name">- {user.name}</span>
    </div>
  )
}
