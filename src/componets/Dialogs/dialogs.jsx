import React from "react";
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';

const ContactItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.contactItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>

  );
}

const MessagesItem = (props) => {
  return (
    <div className={s.message}>
    {props.message}
  </div>
  );
}

let dialogs = [
  {id: 1, name: "Fred"},
  {id: 2, name: "Jhon"},
  {id: 3, name: "Steve"},
]

let messages = [
  {message: "Hello! My Friend"},
  {message: "How are you?"}
]

let dialogsElements = dialogs.map(dialog => <ContactItem name={dialog.name} id={dialog.id}></ContactItem>)
let messagesElements = messages.map(message => <MessagesItem message={message.message}></MessagesItem>)

const Dialogs = () => {
    return (
      <div className={s.wrapperDialogs}>
        <div className={s.contactDialogs}>
          { dialogsElements }
        </div>
        <div className={s.messagesDialogs}>
          {messagesElements}
        </div>
      </div>

    );
}

export default Dialogs;