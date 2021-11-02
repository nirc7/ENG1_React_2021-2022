import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader'
import FCPerson from './FuncComp/FCPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <FCPerson id={7} name={"avi"}/>
        <FCPerson id={8} name={"ben"}/>
        <p>Page</p>
      </header>
    </div>
  );
}

export default App;
