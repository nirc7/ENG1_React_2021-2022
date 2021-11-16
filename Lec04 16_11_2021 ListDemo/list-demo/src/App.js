import logo from './logo.svg';
import './App.css';
import ParentComp from './ClassComps/ParentComp';
import ListDemo from './ClassComps/ListDemo';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListDemo />
        <ParentComp />
      </header>
    </div>
  );
}

export default App;
