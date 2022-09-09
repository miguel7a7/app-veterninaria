import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { isOpenModal } from '../features/modal/modalSlice'

export const AddNewFab = () => {
  const dispatch = useDispatch()

  const handleBtnFab = () => {
    dispatch(isOpenModal())
  }
  return (
    <button className="fab__content" onClick={handleBtnFab}>
      <MdAddCircleOutline className="fab__incon" />
    </button>
  )
}
