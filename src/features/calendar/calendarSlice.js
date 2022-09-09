import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment/moment'

const initialState = {
  events: [
    {
      id: new Date().getTime(),
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
  ],
  activeEvent: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // funciones
    eventAddNew: (state, action) => {
      /* return {
        ...state,
        events: [...state.events, action.payload],
      } */

      state.events = [...state.events, action.payload]
    },

    eventSetActive: (state, action) => {
      /* return {
        ...state,
        activeEvent: action.payload,
      } */
      state.activeEvent = action.payload
    },

    eventClearActiveEvent: (state, action) => {
      /* return {
        ...state,
        activeEvent: null,
      } */
      state.activeEvent = null
    },

    eventUpdate: (state, action) => {
      /* return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      } */
      state.events = state.events.map((e) =>
        e.id === action.payload.id ? action.payload : e
      )
    },

    eventDelete: (state, action) => {
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      }
    },
  },
})

export const {
  eventAddNew,
  eventSetActive,
  eventClearActiveEvent,
  eventUpdate,
  eventDelete,
} = calendarSlice.actions

export default calendarSlice.reducer
