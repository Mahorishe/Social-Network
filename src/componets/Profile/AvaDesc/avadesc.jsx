import React from "react";
import s from './avadesc.module.css';


const AvaDesc = () => {
    return (
      <div className={s.content}>
        <img className={s.avatar} src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
        <div>
          <ul>
            <li>Nickname: Serge Zhirnov</li>
            <li>Phone: 8 999 212 95 35</li>
            <li>Address: Kaliningrad</li>
            <li>Hobby: Football</li>
            <li>Age: 25</li>
          </ul>
        </div>
      </div>
    );
}

export default AvaDesc;