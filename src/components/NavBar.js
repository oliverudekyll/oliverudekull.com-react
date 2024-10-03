import Link from "./Link.js";

function Contact(mouseX, mouseY) {
  return (
    <nav
      style={{
        backgroundPosition: `${mouseX}px ${mouseY}px`,
      }}
      className="nav-bar__contact"
    >
      <Link href="/about" value="About" />
      <Link href="/drafts" value="Drafts" />
      <Link href="mailto:oliverudekll@gmail.com" value="Email" />
      <Link href="https://www.instagram.com/oliverudekyll" value="Instagram" />
    </nav>
  );
}

function NavBar(docX, docY) {
  const ratio = 100;

  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;
  return (
    <div className="nav-bar">
      <Contact mouseX={mouseX} mouseY={mouseY} />
      <p className="nav-bar__body">Contact for full portfolio</p>
    </div>
  );
}

export default NavBar;
