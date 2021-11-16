import React, { Component } from 'react'

export default class ChildComp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  btnTellPapa7 = () => {
    this.props.tellPapa(7);
  }

  render() {
    return (
      <div style={{ margin: 15, fontSize:25}}>
        <div>Child</div>
        <div>id={this.props.id}</div>
        <button className="btn btn-success" onClick={this.btnTellPapa7}>tell papa about 7</button>
      </div>
    )
  }
}
