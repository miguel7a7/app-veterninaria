import React from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AppRoute } from './routes/AppRoute'

export const AppVeterinaria = () => {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </>
  )
}
