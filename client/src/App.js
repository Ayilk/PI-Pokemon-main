import './App.css';
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './componentes/LandingPage';
import Home from './componentes/Home'; 
import PokemonCreate from './componentes/PokemonCreate';
import Detail from './componentes/Detail';
import Nav from './componentes/Nav';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
           <Route exact path='/' element={ <LandingPage/> } />
           <Route path='/home' element={ <Home/> } />
           <Route path='/pokemon' element={ <PokemonCreate/> } />
           <Route path='/home/:id' element={ <Detail/> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
