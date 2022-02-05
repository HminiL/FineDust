
import React from "react";
import { Route, Routes } from "react-router-dom"; 
import {FineDustSearch,} from "./features/finedust";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FineDustSearch />} />
        <Route path="/home" element={<FineDustSearch />} />
      </Routes>
    </div>
  );
};

export default App;