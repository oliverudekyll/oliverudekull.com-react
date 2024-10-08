import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Drafts from "./pages/Drafts.js";
import About from "./pages/About.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drafts" element={<Drafts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
