import React from 'react';
import Cover from '../Cover';
import Main from '../Main';
import style from './style.module.css'

class App extends React.Component {
    render () {
        return (
            <div className={style.App}>
                <Cover />
                <Main />
            </div>
        )
    }
}

export default App;