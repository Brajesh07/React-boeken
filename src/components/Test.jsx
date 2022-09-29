import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div >
      {this.state.matches && (<h1>Big Screen</h1>)}
      {!this.state.matches && (<h3>Small Screen</h3>)}
      </div>
    );
  }
}

export default Test;