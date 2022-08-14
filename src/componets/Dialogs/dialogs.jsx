import React from "react";
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';
const Dialogs = () => {
    return (
      <div className={s.wrapperDialogs}>
        <div className={s.contactDialogs}>
          <div className={s.contactItem}>
            <NavLink to="/dialogs/1">Ilatovskii</NavLink>
          </div>
          <div className={s.contactItem}>
            <NavLink to="/dialogs/2">KAlich</NavLink>
          </div>
          <div className={s.contactItem}>
            <NavLink to="/dialogs/3">Bober</NavLink>
          </div>
          <div className={s.contactItem}>
            <NavLink to="/dialogs/4">Ostrov</NavLink>
          </div>
          <div className={s.contactItem}>
            <NavLink to="/dialogs/5">Guwer</NavLink>
          </div>
        </div>
        <div className={s.messagesDialogs}>
          <div className={s.message}>
            Hello, My Friend!!!
          </div>
        </div>
      </div>

    );
}

export default Dialogs;