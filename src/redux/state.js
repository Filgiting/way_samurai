let renderEntireTree = () => {

}

let state = {

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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 7
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;    //Патерн наблюдатель (observer)
}

export default state;