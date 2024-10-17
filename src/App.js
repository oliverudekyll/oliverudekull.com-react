import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { projectLoader } from "./helpers/Functions.js";
import Home from "./pages/Home.js";
import Drafts from "./pages/Drafts.js";
import About from "./pages/About.js";
import Project from "./pages/Project.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route
            path="/projects/:projectId"
            loader={projectLoader}
            element={<Project />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
