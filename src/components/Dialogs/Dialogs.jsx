import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
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
                <div className={style.message}>fdfdfsd</div>
                <div className={style.message}>dfsdfsdf</div>
                <div className={style.message}>sfsdfsdf</div>
            </div>
        </div>
    );
}

export default Dialogs;