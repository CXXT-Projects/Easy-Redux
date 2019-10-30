import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentDidMount() {
    this._updateThemeColor()
  }

  _updateThemeColor() {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render() {
    return (
      <div>
        <button style={{ color: this.state.themeColor }}>Red</button>
        <button style={{ color: this.state.themeColor }}>Blue</button>
      </div>
    )
  }
}

ThemeSwitch.contextTypes = {
  store: PropTypes.object,
}

export default ThemeSwitch;
