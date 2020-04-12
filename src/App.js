import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (

        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>

            </div>
        </div>
    );
}

export default App;
