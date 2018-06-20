import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

import {Provider} from 'mobx-react';
import NameStore from './stores/NameStore';

const root = <Provider nameStore={NameStore}><App /></Provider>;

ReactDOM.render(root, document.getElementById('root'));
