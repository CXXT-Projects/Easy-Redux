// build a store
export const createStore = (reducer) => {
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
