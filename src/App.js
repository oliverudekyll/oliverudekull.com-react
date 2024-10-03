import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Drafts from "./pages/Drafts.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/drafts" element={<Drafts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
