import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ListPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'cahrlie' }];

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: ListPersons,
      counter: ListPersons.length
    }
  }

  cngtxtName = (e) => {
    this.setState({ txtName: e.target.value });
  }


  btnAddPerson = () => {
    let count = this.state.counter + 1;
    let newPersonsList =
      [...this.state.persons,
      {
        id: count,
        name: this.state.txtName
      }];

   
    console.log(count);
    this.setState({
      persons: newPersonsList,
      counter: count
    });
  }

  btnDelPerson = (pId) => {
    let newPersonsList = this.state.persons.filter((per) => per.id !== pId);
    this.setState({ persons: newPersonsList });
  }

  render() {

    let personsStr = this.state.persons.map((per) =>
      <li key={per.id} className="list-group-item">{per.id} -- {per.name}

        <svg onClick={() => this.btnDelPerson(per.id)}
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>


      </li>
    );

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input type="text" onChange={this.cngtxtName} /> <br />
          <button className="btn btn-success" onClick={this.btnAddPerson}>Add Person</button> <br /> <br />

          <ul className="list-group">
            {personsStr}
          </ul>
        </header>
      </div>
    );
  }
}


