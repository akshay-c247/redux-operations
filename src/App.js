import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Read from './components/Read';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <BrowserRouter>
     <Routes>
    <Route exact path='/' element={<Create/>}></Route>
    <Route exact path='/read' element={<Read/>}></Route>
     </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
