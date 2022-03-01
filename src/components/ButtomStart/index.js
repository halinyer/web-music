import React from 'react'
import { Buttom,ButtomIcon,ButtomText } from './ButtomStartElement'
import { BsFillPlayFill } from "react-icons/bs";


const ButtomStart = () => {
  return (
    <Buttom>
        <ButtomIcon>
            <div>
              <BsFillPlayFill/>
            </div>
        </ButtomIcon>
        <ButtomText>
            Get Start
        </ButtomText>
    </Buttom>
  )
}

export default ButtomStart