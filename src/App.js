import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import PersonList from './components/PersonList';
import RemovePerson from './components/RemovePerson';

function App() {
  // const dataValues = ['Apple', 'Banana', 'Potato']
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hello potatis!</h1>
       {dataValues.map(items =>(
        <Header headerValue={items} />
       ))}
      </header> */}
     <PersonList/>
     <RemovePerson/>
    </div>
  );
}

export default App;
