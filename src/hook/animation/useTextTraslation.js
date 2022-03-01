import React,{useState} from 'react';
import {useSpring, config, animated} from 'react-spring';

const useTextTraslation = ({text}) => {
    const [textElement, setTextElement] = useState('Hello');
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
      config: config.molasses,
      onRest: () => set(flip),
    })

    // setTextElement(text)
  
    return <animated.h1 style={props}>{textElement}</animated.h1>
    
}


export default useTextTraslation

