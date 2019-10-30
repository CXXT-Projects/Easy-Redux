import React, { Component } from 'react';
import ThemeContext from './themeContext';

export const connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends Component {
    constructor() {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount() {
      const themeStore = this.context
      this._updateProps()
      themeStore.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const themeStore = this.context
      let stateProps = mapStateToProps(themeStore.getState(), this.props)
      this.setState({
        allProps: {
          ...stateProps,
          ...this.props
        }
      })
    }

    render() {
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  Connect.contextType = ThemeContext;

  return Connect;
}
