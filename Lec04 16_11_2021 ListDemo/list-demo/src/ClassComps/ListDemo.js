import React, { Component } from 'react'

const listPerson = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class ListDemo extends Component {

  render() {
    let personsStr = listPerson.map((per, index) =>
      <a key={index} href="#"
        className="list-group-item list-group-item-action">
        {per.id} -- {per.name} -- {index}</a>);

    return (
      <div style={{ margin: 15, fontSize: 25 }}>
        <div className="list-group">
          {personsStr}
        </div>
      </div>
    )
  }
}

