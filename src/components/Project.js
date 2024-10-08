import { useState, useRef, useEffect } from "react";

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

function Project({ title, url, i, mouseX, mouseY }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (!url) {
      setIsOpen((prevState) => !prevState);
    }
  }

  const order = String(i + 1).padStart(3, "0");

  return (
    <>
      {useEffect(() => {}, [mouseX, mouseY])}
      {url ? (
        <a
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          href={url}
          className="feed__project"
          onClick={handleClick}
        >
          <ProjectContents title={title} order={order} isOpen={isOpen} />
        </a>
      ) : (
        <article
          style={{
            backgroundPosition: `${mouseX}px ${mouseY}px`,
          }}
          className="feed__project"
          onClick={handleClick}
        >
          <ProjectContents title={title} order={order} isOpen={isOpen} />
        </article>
      )}
    </>
  );
}
export default Project;
