import React from 'react';
import style from './style.module.css'
import { inject, observer } from 'mobx-react';

@inject('NameStore')
@observer
class Main extends React.Component {
    changeName = (e) => {
        e.preventDefault();
        const name = this.name.value;
        this.props.NameStore.addName(name);
        this.name.value = '';
    }


    render() {
        const { NameStore } = this.props;

        return (
            <div className={style.main}>
                <form onSubmit={event => this.changeName(event)}>
                    <input className={style.input} placeholder="Username" ref={input => this.name = input} />
                    <button className={style.submitButton}>Submit</button>
                </form>
            </div >
        )
    }
}

export default Main;