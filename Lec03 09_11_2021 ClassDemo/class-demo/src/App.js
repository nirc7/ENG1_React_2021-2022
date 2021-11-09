import logo from './logo.svg';
import './App.css';
import FCPerson from './FunctionalComps/FCPerson';
import CCStudent from './ClassComps/CCStudent';
import CCCalc from './ClassComps/CCCalc';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCalc/>
        <CCStudent id={1} name="avi" grade={95.7}/>
        <CCStudent/>
        <FCPerson id={7} name={"avi"} />
        <FCPerson id={9} name={"benny"} />
      </header>
    </div>
  );
}

export default App;
