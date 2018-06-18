import React from 'react';
import style from './style.module.css'
import Logo from './logo.svg';

class Cover extends React.Component {
    render() {
        return (
            <div className={style.cover}>
                <Logo />
                <h1 className={style.header}>Welcome on board,{'{username}'}!</h1>
            </div>
        )
    }
}

export default Cover;