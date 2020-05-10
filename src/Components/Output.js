import React from 'react'
import './Output.css'

const output = (props) => {
    return (
    <div className="Output">{props.children}</div>
    );
}

export default output;