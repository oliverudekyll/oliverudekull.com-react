import { useState, useRef, useEffect } from "react";
import { motion, animate, stagger } from "framer-motion";

export function StateIcon({ isOpen }) {
  return (
    <div className="project__state-icon">
      <div className="state-icon__stem"></div>
      <div
        className={`state-icon__stem ${isOpen ? "vertical--open" : "vertical"}`}
      ></div>
    </div>
  );
}

function ProjectContents({ title, order, isOpen }) {
  return (
    <>
      <div className="project__order">
        <StateIcon isOpen={isOpen} />
        {order}
      </div>
      <h2
        className="project__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
    </>
  );
}

const initialValue = {
  opacity: 0,
  y: "-50%",
  filter: "blur(0px)",
};

function Project({ title, url, i, mouseX, mouseY, variants }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (!url) {
      setIsOpen((prevState) => !prevState);
    }
  }

  const order = String(i + 1).padStart(3, "0");

  useEffect(() => {
    const staggerDelay = stagger(0.06);
    const translateAmount = "0%";
    setTimeout(() => {
      animate(
        "article",
        { opacity: 1, y: translateAmount, filter: "blur(0px)" },
        { delay: staggerDelay }
      );
      animate(
        "a",
        { opacity: 1, y: translateAmount, filter: "blur(0px)" },
        { delay: staggerDelay }
      );
    }, 100);
    console.log("jou");
  }, []);

  return (
    <>
      {url ? (
        <motion.a
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initial={initialValue}
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          href={url}
          className="feed__project"
          onClick={handleClick}
        >
          <ProjectContents title={title} order={order} isOpen={isOpen} />
        </motion.a>
      ) : (
        <motion.article
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initial={initialValue}
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          className="feed__project"
          onClick={handleClick}
        >
          <ProjectContents title={title} order={order} isOpen={isOpen} />
        </motion.article>
      )}
    </>
  );
}
export default Project;
