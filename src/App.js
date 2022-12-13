import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PeopleList from './components/PeopleList';
import AddPerson from './components/AddPerson';

function App() {  
  return (
    <Router>    
    <div className="App">
      <Routes>
        <Route path='/' exact element={<PeopleList/>}/>
        <Route path='/Create' element={<AddPerson/>}/>
      </Routes>
   
    </div>
    </Router>
  );
}

export default App;
