import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/Index.scss';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
