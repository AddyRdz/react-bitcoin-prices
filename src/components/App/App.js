import { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import Home from "../Home/Home";
import Currencies from '../Currencies/Currencies'
import Price from '../Price/Price'
import "./App.css";

function App(){
  const [price, setPrice] = useState()

    return (
      <div>
        <nav>
          <Link to='/'>
            <img
              src='https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png'
              alt=''
            />
            <h1>Bitcoin prices</h1>
          </Link>
          <Link to='/currencies'>Currencies</Link>
          <Link to='/price'>Price</Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/price:currency' render={() => <Price setPrice={ setPrice } price={ price } /> } />
          </Routes>
        </main>
      </div>
    )
}

export default App;
