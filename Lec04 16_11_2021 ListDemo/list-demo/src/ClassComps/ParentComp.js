import React, { Component } from 'react';
import ChildComp from './ChildComp.js';

export default class ParentComp extends Component {

  getDataFromChild = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <div>Parent</div>
        <ChildComp id={7}  tellPapa={this.getDataFromChild}/>
      </div>
    )
  }
}
