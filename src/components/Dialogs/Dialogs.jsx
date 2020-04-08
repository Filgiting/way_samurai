import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={style.message}>
            { props.message }
        </div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Fil'},
        {id: 4, name: 'Bil'}
    ]
    let messages = [
        {id: 1, message: 'Hi Dimas karabas'},
        {id: 2, message: 'Hi Lex flex'},
        {id: 3, message: 'Hi Fil bil'},
        {id: 4, message: 'Hi Bil dil'}
    ]

    let dialogsElement = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElement = messages.map( mess => <Message message={mess.message} /> );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElement }
            </div>

            <div className={style.messages}>
                { messagesElement }
            </div>
        </div>
    );
}

export default Dialogs;