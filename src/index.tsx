import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import './core/firebase/auth';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
