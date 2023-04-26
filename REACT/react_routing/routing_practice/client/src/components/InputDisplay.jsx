import React from 'react'
import { useParams } from 'react-router-dom'

const InputDisplay = () => {
    let {input, textColor, bgColor} = useParams();
    if (!textColor || !CSS.supports('color',textColor) || !CSS.supports('color',bgColor)) {
        textColor = 'black';
        bgColor = 'white';
    }
    return (
        <h1 style={{color:textColor, background:bgColor}}>The {isNaN(+input) ? 'word ' : 'number '} is: {input}</h1>
    )
}

export default InputDisplay