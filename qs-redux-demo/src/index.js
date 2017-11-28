import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'change':
      state = action.data;
      break;

    default:
      state = 'Hello'
      break;
  }

  return state;
};

const store = createStore(reducer);

const render = () => ReactDOM.render(
    <App 
      value={store.getState()} 
      change={() => store.dispatch({ type: 'change', data: "Change" })} />, document.getElementById('root')
  );

render()

store.subscribe(render);

registerServiceWorker();
