import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElement = props.state.messages.map( mess => <Message message={mess.message} /> );

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