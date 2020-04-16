import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElement = state.messages.map(mess => <Message message={mess.message} key={mess.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={ newMessageBody }
                                   onChange={ onNewMessageChange }
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;