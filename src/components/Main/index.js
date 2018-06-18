import React from 'react';
import style from './style.module.css'

class Main extends React.Component {
    render() {
        return (
            <div className={style.main}>
                <input className={style.input} placeholder="Username" />
                <button className={style.submitButton}>Submit</button>
            </div>
        )
    }
}

export default Main;