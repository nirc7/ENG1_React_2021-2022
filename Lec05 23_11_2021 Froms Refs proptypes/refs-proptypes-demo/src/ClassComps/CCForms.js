import React, { Component } from 'react'

export default class CCForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "insert your name"
    };
  }

  onTextChanged = (event) => {
    debugger;
    let newWord = event.target.value.toUpperCase();
    console.log(newWord);
    newWord = newWord.replace('6', '');
    this.setState({ userName: newWord });
  }

  btnHelloUser = () => {
    alert('hello ' + this.state.userName);
    alert('hello ' + this.stam);//undefined
  }

  render() {
    return (
      <div>
        <form >
          not connected to state input <input type="text" name="stam" /><br />
          connected to state input WO onchange <input type="text" name="userName" value={this.state.userName} /><br />
          connected to state input With onchange <input type="text" name="userName" value={this.state.userName} onChange={this.onTextChanged} />

          <button onClick={this.btnHelloUser} >chang name</button>
        </form>
      </div>
    )
  }
}
