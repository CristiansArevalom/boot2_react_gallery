import './App.css';
import {Componente1} from './components/Componente1';
import {Componente2} from './components/Componente2';
import {Componente3} from './components/Componente3';
import {Componente4} from './components/Componente4';
import {Componente5} from './components/Componente5';
import {Componente6} from './components/Componente6';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';

//Para usar los componentes, se deben importarññ
function App() {
  return (
    <>
    
    <BrowserRouter>
      <div>
          <h1 id="title" className="text-center my-3">Proyecto Galeria</h1>
      </div>
      <div id='main-img-container' className='container'>
      <Routes>
        <Route path='/componente1' element={<Componente1 className='image-size'/>}/>
        <Route path='/componente2' element={<Componente2 className='image-size'/>}/>
        <Route path='/componente3' element={<Componente3 className='image-size'/>}/>
        <Route path='/componente4' element={<Componente4 className='image-size'/>}/>
        <Route path='/componente5' element={<Componente5 className='image-size'/>}/>
        <Route path='/componente6' element={<Componente6 className='image-size'/>}/>
      </Routes>
      </div>
      <div className = 'container'>
      <Navigation/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
