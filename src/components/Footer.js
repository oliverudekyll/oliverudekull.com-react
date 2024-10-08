import Link from "./Link.js";

function NavBar({ mouseX, mouseY }) {
  return (
    <nav
      style={{
        backgroundPosition: `${mouseX / 1}px ${mouseY / 1}px`,
      }}
      className="footer__nav-bar"
    >
      <Link href="/about" value="About" />
      <Link href="/drafts" value="Drafts" />
      <Link href="mailto:oliverudekll@gmail.com" value="Email" />
      <Link href="https://www.instagram.com/oliverudekyll" value="Instagram" />
    </nav>
  );
}

function Footer({ mouseX, mouseY }) {
  return (
    <footer className="footer">
      <NavBar mouseX={mouseX} mouseY={mouseY} />
      <p className="footer__body">Contact for full portfolio</p>
    </footer>
  );
}

export default Footer;
