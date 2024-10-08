import { useState, useEffect, useRef } from "react";
import { useMouse } from "react-use";

import "../assets/css/_reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

import Footer from "../components/Footer.js";
import Feed from "../components/Feed.js";

function Home() {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;

  return (
    <div ref={ref} className="home">
      <Feed mouseX={mouseX} mouseY={mouseY} />
      <Footer mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}

export default Home;
