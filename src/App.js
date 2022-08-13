import React, {useState} from 'react';
import './App.css'

import Header from './componets/Header/header';
import Navbar from './componets/Navbar/navbar';
import Profile from './componets/Profile/profile';

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
