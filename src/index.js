import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let dialogs = [
    {id: 1, name: "Fred"},
    {id: 2, name: "Jhon"},
    {id: 3, name: "Steve"},
  ]
  
let messages = [
    {message: "Hello! My Friend"},
    {message: "How are you?"}
  ]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<App  dialogs = {dialogs} messages = {messages}/>
);
