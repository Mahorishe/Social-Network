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

let DialogsData = [
  {id: 1, name: "Fred"},
  {id: 2, name: "Jhon"},
  {id: 3, name: "Steve"},
]

let MessagesData = [
  {message: "Hello! My Friend"},
  {message: "How are you?"}
]

const Dialogs = () => {
    return (
      <div className={s.wrapperDialogs}>
        <div className={s.contactDialogs}>
          <ContactItem name={DialogsData[0].name} id={DialogsData[0].id}></ContactItem>
          <ContactItem name={DialogsData[1].name} id={DialogsData[1].id}></ContactItem>
          <ContactItem name={DialogsData[2].name} id={DialogsData[2].id}></ContactItem>
        </div>
        <div className={s.messagesDialogs}>
          <MessagesItem message={MessagesData[0].message}></MessagesItem>
          <MessagesItem message={MessagesData[1].message}></MessagesItem>
        </div>
      </div>

    );
}

export default Dialogs;