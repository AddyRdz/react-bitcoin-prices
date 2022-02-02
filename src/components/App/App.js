import React, { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../Home/Home"
import Currencies from '../Currencies/Currencies'
import "./App.css"

const App = () => {
  const [ price, setPrice ] = useState()
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
          <Link to='/currencies'>Currency List</Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={ Home } />
            <Route path='/currencies' element={ Currencies } />
          </Routes>
        </main>
      </div>
    )
}

export default App
