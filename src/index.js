import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

import {Provider} from 'mobx-react';
import NameStore from './stores/NameStore';


ReactDOM.render(<Provider NameStore={NameStore}><App /></Provider>, document.getElementById('root'));
