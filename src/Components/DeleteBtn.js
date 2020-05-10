import React from 'react';
import './Btn.css';

const deleteBtn = (props)=> {
    return(
        <button className="Btn" onClick={props.click}>
            {props.children}
        </button>
    );
}

export default deleteBtn;