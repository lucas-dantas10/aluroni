import { Cardapio } from "pages/Cardapio";
import { Inicio } from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}