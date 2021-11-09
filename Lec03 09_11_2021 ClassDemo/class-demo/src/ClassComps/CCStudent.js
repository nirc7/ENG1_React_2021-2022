import React, { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);
    //let num = 7;
    this.number = 8;
    this.state = {
      sId: 7,
      sName: 'dora'
    };
  }

  btnAddOne = () => {
    //this.state =....
    //this.setState({ sId: 100, sAge:30 });
    //this.setState({ sId:this.state.sId+1 , sAge:30 }); //ERROR dependency
    this.setState((prevState) => ({ sId: prevState.sId + 1 }));
    //code...
  }

  chgTxt = (e) => {
    this.setState({ sName: e.target.value + "!" });
  }

  render() {
    return (
      <div style={{
        fontSize: 25,
        border: 'solid red 3px', margin: 15, padding: 10, borderRadius: 5
      }}>
        <div>CCStudent</div>
        <div>id={this.props.id} name={this.props.name} grade={this.props.grade}</div>
        <button onClick={this.btnAddOne}>Add One</button>
        <div>SID={this.state.sId}</div>
        <input type="text" onChange={this.chgTxt} /> {this.state.sName}
      </div >
    );
  }
}