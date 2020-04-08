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

const Dialogs = () => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Dima' id='1' />
                <DialogItem name='Lex' id='2' />
                <DialogItem name='Fil' id='3' />
                <DialogItem name='Bil' id='4' />
            </div>

            <div className={style.messages}>
                <Message message='Hi Dimas karabas' />
                <Message message='Hi Lex flex' />
                <Message message='Hi Fil bil' />
                <Message message='Hi Bil dil' />
            </div>
        </div>
    );
}

export default Dialogs;