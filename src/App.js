import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {css} from "@emotion/core";
import PropagateLoader  from 'react-spinners/PropagateLoader';
import Navbar from './Components/Navbar';

import './App.css'
import Header from './Components/Header';
import Products from './Components/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Detail from './Components/Detail';
import Inicio from './pages/Inicio';

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
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/detalle" element={<Detail />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;