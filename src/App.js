import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/create' element={<Create/>}/>
       <Route exact path='/edit/:id' element={<Update/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
