import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TempleHistory from './components/TempleHistory'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<TempleHistory />} />
      </Routes>
    </Router>
    </>
  )
}

export default App