import React,{useState} from 'react';
import {useSpring, config, animated} from 'react-spring';

const ElementAnimation = ({delay,children}) => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: delay,
      config: config.molasses,
      onRest: () => set(flip),
    })
  
    return <animated.div  style={props}>
        {children}
    </animated.div>
    
}


export default ElementAnimation
