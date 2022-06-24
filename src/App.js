import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/Home'
import Detaile from './routes/Detaile'

function App(){
    return (
        <Router>
          <Routes>
            <Route path="/movie/:id" element={<Detaile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    )
};

export default App;