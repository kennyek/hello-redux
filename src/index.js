import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

store.subscribe(render);

render();
registerServiceWorker();
