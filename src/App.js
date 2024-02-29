import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/nav" element={<NavBar/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
