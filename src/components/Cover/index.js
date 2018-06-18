import React from 'react';
import style from './style.module.css'
import Logo from './logo.svg';
import { inject, observer } from 'mobx-react';

@inject('NameStore')
@observer
class Cover extends React.Component {
    render() {
        const { NameStore } = this.props;

        return (
            <div className={style.cover}>
                <Logo />
                <h1 className={style.header}>Welcome on board,{'{' + NameStore.currentName + '}'}!</h1>
            </div>
        )
    }
}

export default Cover;