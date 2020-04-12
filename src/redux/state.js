let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 8},
                {id: 3, message: 'Bla Bla Bla', likeCount: 55}
            ],
            newPostText: 'fil_bli_kil.com'
        },
        dialogsPage: {
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
            ]
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('State updates')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;    //Патерн наблюдатель (observer)
    },

    dispatch(action) {      //объект принимающий type:
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 7
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;