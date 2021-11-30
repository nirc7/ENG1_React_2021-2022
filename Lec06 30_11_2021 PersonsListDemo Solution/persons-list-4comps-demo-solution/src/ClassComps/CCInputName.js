import React, { Component } from 'react'

export default class CCInputName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personName: ''
    }
  }

  chgName = (e) => {
    this.setState({ personName: e.target.value }
      , () => console.log(this.state.personName));
  }

  btnAddPerson = () => {
    this.props.sendData(this.state.personName);
  }

  render() {
    return (
      <div>
        NAME:<input type="text"
          placeholder="insert your name..."
          onChange={this.chgName}
        /> {this.state.personName} <br />
        <button onClick={this.btnAddPerson} >Add Person</button>
      </div>
    )
  }
}
