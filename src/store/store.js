import { configureStore } from '@reduxjs/toolkit'
import calendarSlice from '../features/calendar/calendarSlice'
import modalSlice from '../features/modal/modalSlice'

// const { configureStore } = require('@reduxjs/toolkit')

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    calendar: calendarSlice,
  },
})
