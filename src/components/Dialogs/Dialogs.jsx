import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = state.messages.map(mess => <Message message={mess.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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