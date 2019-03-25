import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './compiled_css/core/styles/index.css';
import App from './App';

const Intercom = (window as any).Intercom;
Intercom('boot', {
  app_id: 'kwgbdtf8'
});

ReactDOM.render(<App/>, document.getElementById('root'));
