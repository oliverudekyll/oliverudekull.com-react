import { useState, useEffect, useRef } from "react";
import { useMouse } from "react-use";

import "./assets/css/_reset.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

function Link({ value, href }) {
  return (
    <a className="nav-bar__link" href={href}>
      <span className="link__bracket">[</span>
      {value}
      <span className="link__bracket">]</span>
    </a>
  );
}

function Contact() {
  return (
    <nav className="nav-bar__contact">
      <Link href="mailto:oliverudekll@gmail.com" value="Email" />
      <Link href="https://www.instagram.com/oliverudekyll" value="Instagram" />
      <Link href="" value="Drafts" />
    </nav>
  );
}

function NavBar() {
  return (
    <div className="nav-bar">
      <Contact />
      <p>Contact for full portfolio</p>
    </div>
  );
}

function StateIcon({ isOpen }) {
  return (
    <div className="project__state-icon">
      <div className="state-icon__stem"></div>
      <div
        className={`state-icon__stem ${isOpen ? "vertical--open" : "vertical"}`}
      ></div>
    </div>
  );
}

function Project({ title, url, i, docX, docY }) {
  const [isOpen, setIsOpen] = useState(false);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;

  function handleClick() {
    if (!url) {
      setIsOpen((prevState) => !prevState);
    }
  }

  const order = [i + 1];
  while (order.length < 3) {
    order.unshift(0);
  }

  return (
    <div>
      {url ? (
        <a
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          href={url}
          className="feed__project"
          onClick={handleClick}
        >
          <StateIcon isOpen={isOpen} />
          <div className="project__order">{order.join("")}</div>
          <div className="project__title">{title}</div>
        </a>
      ) : (
        <article
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          className="feed__project"
          onClick={handleClick}
        >
          <StateIcon isOpen={isOpen} />
          <div className="project__order">{order.join("")}</div>
          <div className="project__title">{title}</div>
        </article>
      )}
    </div>
  );
}

function Feed() {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);

  const projects = [
    {
      title: "Float",
    },
    {
      title: "So Called Neutral",
      url: "https://socalledneutral.oliverudekull.com/",
    },
    {
      title: "If This Be Not I",
    },
    {
      title: "Woman Sitting at the Machine (Thinking)",
    },
    {
      title: "Inklingroom",
    },
    {
      title: "Erik Merisalu",
      url: "http://www.erikmerisalu.com/",
    },
    {
      title: "Chants for Recognition",
    },
    {
      title: "Thru the Motions",
    },
    {
      title: "Elementary",
    },
  ];
  return (
    <main ref={ref} className="feed">
      {projects.map((project, i) => (
        <Project
          key={i}
          i={i}
          title={project.title}
          docX={docX}
          docY={docY}
          {...(project.hasOwnProperty("url") ? { url: project.url } : {})}
        />
      ))}
    </main>
  );
}

function App() {
  const reftest = useRef(null);

  console.log("ref:", reftest.current);

  return (
    <div className="App">
      <NavBar />
      <Feed />
    </div>
  );
}

export default App;
