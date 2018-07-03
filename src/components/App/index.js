import React from 'react';
import Cover from '../Cover';
import Main from '../Main';
import styles from './styles.module.css'

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <Cover />
                <Main />
            </div>
        )
    }
}

export default App;