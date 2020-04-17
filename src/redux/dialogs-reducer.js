const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Fil'},
        {id: 4, name: 'Bil'}
    ],
    messages: [
        {id: 1, message: 'Hi Dimas karabas'},
        {id: 2, message: 'Hi Lex flex'},
        {id: 3, message: 'Hi Fil bil'},
        {id: 4, message: 'Hi Bil dil'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;