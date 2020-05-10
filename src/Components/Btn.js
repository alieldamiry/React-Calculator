import React from 'react';
import './Btn.css';

const btn = (props)=> {
    return(
        <button className="Btn" onClick={props.click}>
            {props.children}
        </button>
    );
}

export default btn;