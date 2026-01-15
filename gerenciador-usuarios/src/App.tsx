import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import UserDetail from "./pages/UserDetail"
import Favorites from "./pages/Favorites"

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/favorites">Favoritos</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </nav>
    </div>
  );
};

export default App
