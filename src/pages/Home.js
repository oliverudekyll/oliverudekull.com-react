import { useState, useEffect, useRef } from "react";
import { useMouse } from "react-use";
import {
  motion,
  cubicBezier,
  easeInOut,
  backInOut,
  circInOut,
  anticipate,
  linear,
  steps,
} from "framer-motion";

import "../assets/css/_reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

import Footer from "../components/Footer.js";
import Feed from "../components/Feed.js";
import Watermark from "../components/Watermark.js";

function Home() {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;
  const invertedMouseX = (docX / window.innerWidth) * ratio;
  const invertedMouseY = (docY / window.innerHeight) * ratio - 50;

  const transition = {
    duration: 0.75,
    ease: cubicBezier(0.645, 0.045, 0.355, 1),
  };

  return (
    <div ref={ref} className="home">
      <Feed
        mouseX={mouseX}
        mouseY={mouseY}
        initial={{
          opacity: 0,
          y: "-50%",
          lineHeight: 0.45,
          filter: "blur(5px)",
        }}
        animate={{ opacity: 1, y: "0%", lineHeight: 0.9, filter: "blur(0px)" }}
        transition={transition}
      />
      <Footer
        mouseX={mouseX}
        mouseY={mouseY}
        initial={{ opacity: 0, y: "50%", filter: "blur(5px)" }}
        animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
        transition={transition}
      />
      <Watermark
        docX={docX}
        docY={docY}
        mouseX={mouseX / 3}
        mouseY={mouseY / 3}
      />
    </div>
  );
}

export default Home;
