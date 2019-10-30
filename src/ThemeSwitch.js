import React, { Component } from 'react'
import ThemeContext from './themeContext';

class ThemeSwitch extends Component {
  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentDidMount() {
    this._updateThemeColor();
    const themeStore = this.context;
    themeStore.subscribe(() => this._updateThemeColor());
  }

  _updateThemeColor() {
    const themeStore = this.context;
    const state = themeStore.getState();
    this.setState({ themeColor: state.themeColor })
  }

  handleSwitchColor(color) {
    const themeStore = this.context;
    themeStore.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render() {
    return (
      <div>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}
        >
          Red
        </button>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}
        >
          Blue
        </button>
      </div>
    )
  }
}

ThemeSwitch.contextType = ThemeContext;

export default ThemeSwitch;
