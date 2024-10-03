import { useState, useEffect, useRef } from "react";

import "../assets/css/_reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

import NavBar from "../components/NavBar.js";
import Feed from "../components/Feed.js";
import Drafts from "../pages/Drafts.js";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Feed />
    </div>
  );
}

export default Home;
