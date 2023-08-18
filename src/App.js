import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {css} from "@emotion/core";
import PropagateLoader  from 'react-spinners/PropagateLoader';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import Products from './Components/Products';
import ListaHotel from './Components/ListaHotel';
import Inicio from './pages/Inicio';
import Detail from './Components/Detail';

function App() {

  const [loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/hoteles" element={<ListaHotel />} />
            <Route path="/detalle/:id/:capacidad" element={<Detail />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;