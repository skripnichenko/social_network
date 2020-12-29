import React from 'react';
import c from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={c.dialog}>{props.message}</div>
}

export default Message;