import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalOpen: false,
}

const modalSlice = createSlice({
  name: 'uiModal',
  initialState,
  extraReducers: {},
  reducers: {
    // funciones
    isOpenModal: (state, action) => {
      // return {
      //   ...state,
      //   modalOpen: true,
      // }
      state.modalOpen = true
    },

    isCloseModal: (state, action) => {
      state.modalOpen = false
      // return {
      //   ...state,
      //   modalOpen: false,
      // }
    },
  },
})

export const { isOpenModal, isCloseModal } = modalSlice.actions

export default modalSlice.reducer
