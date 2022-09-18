import React, {useState} from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import './App.css'
import Header from './componets/Header/header';
import Navbar from './componets/Navbar/navbar';
import Profile from './componets/Profile/profile';
import Dialogs from './componets/Dialogs/dialogs';


function App(props) {
  debugger;
  return (
   <BrowserRouter>
       <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper-content'>
      <Routes>
        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} 
                                                 addPost={props.addPost} 
                                                 updateTextArea={props.updateTextArea}/>}/>
        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} addPost={props.addPost}/>}/>
      </Routes>
      </div>

    </div>
   </BrowserRouter>



  );
}

export default App;
