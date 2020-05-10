import React from 'react';
import './Btn.css';

const calculateBtn = (props)=> {
    return (
        <button onClick={props.calculate} className="Btn lg-Btn">
            {props.children}
        </button>
    );
}

export default calculateBtn;