import React from 'react'
import { Burguer } from './BurguerElement'

const BurguerButtom = ({click,handleClick}) => {
  return (
      <Burguer >
          <div onClick={handleClick} className={`icon nav-icon-5 ${click ? 'open': ''}`}>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </Burguer>
  )
}

export default BurguerButtom