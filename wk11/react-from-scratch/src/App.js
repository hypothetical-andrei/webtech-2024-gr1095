import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  ) 
}

export default App