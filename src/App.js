import React from 'react';
import Header from './Header';
import Content from './Content'
import themeReducer from './reducers/themeReducer';
import { createStore } from './createStore';
import ThemeContext from './themeContext';

const themeStore = createStore(themeReducer);

class App extends React.Component {

  render() {
    return (
      <ThemeContext.Provider value={themeStore}>
        <Header />
        <Content />
      </ThemeContext.Provider>
    )
  }
}

export default App;
