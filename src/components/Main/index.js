import React from 'react';
import styles from './styles.module.css'

class Main extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <input className={styles.input} placeholder="Username" />
                <button className={styles.submitButton}>Submit</button>
            </div>
        )
    }
}

export default Main;