import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: 'It\'s my first post', likeCount: 8},
    {id: 2, message: 'Bla Bla Bla', likeCount: 55}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
