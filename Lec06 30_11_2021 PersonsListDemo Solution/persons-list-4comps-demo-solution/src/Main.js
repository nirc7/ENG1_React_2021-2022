import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FCPersonsList from './FunctionalComps/FCPersonsList';
import CCInputName from './ClassComps/CCInputName';

const globalPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'banny' }, { id: 3, name: 'charlie' }];

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: globalPersons,
      count: globalPersons.length
    }
  }

  getData = (pName) => {
    console.log(pName);
    let newCount = this.state.count + 1;
    let newPersons = [...this.state.persons, { id: newCount, name: pName }];

    this.setState({ persons: newPersons, count: newCount });
  }

  getId = (pId) => {
    let newPersons = this.state.persons.filter(per => per.id !== pId);

    this.setState({ persons: newPersons });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CCInputName sendData={this.getData} />
          <FCPersonsList
            persons={this.state.persons}
            sendId={this.getId} />
        </header>
      </div>
    );
  }
}


