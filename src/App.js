import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css'
import Navbar from './components/Navigation/Navbar'
import NavRouter from './components/Navigation/NavRouter'

function App() {
    


  return(
    <BrowserRouter>
      <Navbar />
      <NavRouter />
    </BrowserRouter>
      )
}

export default App;
