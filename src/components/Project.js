import { useState } from "react";

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
        {order.join("")}
      </div>
      <div className="project__title">{title}</div>
    </>
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
    <>
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
