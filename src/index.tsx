import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './components/root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store } from './model';

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
