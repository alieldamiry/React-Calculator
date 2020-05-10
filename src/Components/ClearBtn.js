import React from 'react';
import './Btn.css';

const clearBtn = (props)=> {
    return (
        <button onClick={props.click} className="Btn lg-Btn">
            {props.children}
        </button>
    );
}

export default clearBtn;