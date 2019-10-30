import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  constructor() {
    super();
    this.state = { themeColor: '' }
  }

  componentDidMount() {
    this._updateThemeColor();
    const { store } = this.context;
    store.subscribe(() => this._updateThemeColor());
  }

  _updateThemeColor() {
    const { store } = this.context;
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render() {
    return (
      <h1 style={{ color: this.state.themeColor }}>Easy-Redux app</h1>
    )
  }
}

Header.contextTypes = {
  store: PropTypes.object
}

export default Header;
