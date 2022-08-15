import React, {useState} from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import './App.css'

import Header from './componets/Header/header';
import Navbar from './componets/Navbar/navbar';
import Profile from './componets/Profile/profile';
import Dialogs from './componets/Dialogs/dialogs';


function App(props) {

  return (
   <BrowserRouter>
       <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper-content'>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
      </Routes>
      </div>

    </div>
   </BrowserRouter>



  );
}

export default App;
