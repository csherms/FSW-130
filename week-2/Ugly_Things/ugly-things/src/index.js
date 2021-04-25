import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ListContextProvider} from './context'


ReactDOM.render(  
  <ListContextProvider>
    <App />
  </ListContextProvider>,
  document.getElementById('root')
);