import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content'

// build a store
const createStore = (reducer) => {
  let state = null;

  const listeners = []

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    // update the state in the view
    listeners.forEach((listener) => listener());
  }

  // init state
  dispatch({})

  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }

  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer);

class App extends React.Component {
  getChildContext() {
    return { store }
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object,
}

export default App;
