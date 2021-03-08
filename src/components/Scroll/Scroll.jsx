import React from 'react';
import './Scroll.css';
const Scroll = (props) => {
    return(
        <div className="scroll" style={{overflowY:'scroll',height:"700px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;