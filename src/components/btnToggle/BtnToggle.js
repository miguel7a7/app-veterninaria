import React from 'react'

import './btntoggle.css'

export const BtnToggle = ({ isToggleSidebar, isActiveSidebar }) => {
  return (
    <div
      className={`toggle ${isActiveSidebar ? 'active' : ''}`}
      onClick={isToggleSidebar}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
