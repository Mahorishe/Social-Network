import state, { subscribe } from './redux/state';
import { addPost, updateTextArea } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
export const renderDOM = (state, addPost, updateTextArea) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
    <App  state={state} addPost={addPost} updateTextArea={updateTextArea}/>
    );
}
renderDOM(state, addPost, updateTextArea);
subscribe(renderDOM);
