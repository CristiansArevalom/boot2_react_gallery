import './App.css';
import {Componente1} from './components/Componente1';
import {Componente2} from './components/Componente2';
import {Componente3} from './components/Componente3';
import {Componente4} from './components/Componente4';
import {Componente5} from './components/Componente5';
import {Componente6} from './components/Componente6';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Para usar los componentes, se deben importarññ
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/componente1' element={<Componente1/>}/>
        <Route path='/componente2' element={<Componente2/>}/>
        <Route path='/componente3' element={<Componente3/>}/>
        <Route path='/componente4' element={<Componente4/>}/>
        <Route path='/componente5' element={<Componente5/>}/>
        <Route path='/componente6' element={<Componente6/>}/>


      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
