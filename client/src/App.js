import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './componentes/LandingPage';
import Home from './componentes/Home'; 
import PokemonCreate from './componentes/PokemonCreate';
import Detail from './componentes/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry Pokemon</h1>
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
