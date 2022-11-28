import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';

import Counter from './counter';

import reducer from './reducer';
import * as actions from './actions'

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
const root = ReactDOM.createRoot(document.getElementById('root'));

const update = () => {
  root.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }} />);
};

update();
store.subscribe(update);
