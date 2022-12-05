import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';

function App() {
  const dataValues = ['Apple', 'Banana', 'Potato']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hello potatis!</h1>
       {dataValues.map(items =>(
        <Header headerValue={items} />
       ))}
      </header>
    </div>
  );
}

export default App;
