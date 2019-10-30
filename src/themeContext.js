import React from 'react';
import themeReducer from './reducers/themeReducer';
import { createStore } from './createStore';

const themeStore = createStore(themeReducer);

const ThemeContext = React.createContext(themeStore);

export default ThemeContext;
