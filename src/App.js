// src/App.js
import React ,{useEffect ,useState} from 'react';
import Header from './componentes/Header';
import Carousel from './componentes/Carousel';
import Productos from './componentes/Productos';
import Footer from './componentes/Footer';
import axios from 'axios';
import Web from './componentes/Web';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hombre from './componentes/Hombre';
import Mujer from './componentes/Mujer';



 
  function App() {
    const [name,setName] = useState (null); 
  useEffect ( () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto') 
  .then(res => {
    console.log(res.data);
    setName(res.data.name);
  });
  },[]);
 
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Web>
          <Carousel />
          <Productos />
          <div><p>Este es el dato obtenido del servidor: {name}</p></div>
          </Web>
        } />

        <Route path="/hombre" element={
        <Web>
          <Hombre />
          </Web>
        } />
        
        <Route path="/mujer" element={
        <Web>
          <Mujer />
          </Web>
        } />
       ç
      </Routes>
     </Router>
  );
}

export default App;
