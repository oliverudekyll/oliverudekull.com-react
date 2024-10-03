import Link from "./Link.js";

function Contact() {
  return (
    <nav className="nav-bar__contact">
      <Link href="mailto:oliverudekll@gmail.com" value="Email" />
      <Link href="https://www.instagram.com/oliverudekyll" value="Instagram" />
      <Link href="/drafts" value="Drafts" />
    </nav>
  );
}

function NavBar() {
  return (
    <div className="nav-bar">
      <Contact />
      <p className="nav-bar__body">Contact for full portfolio</p>
    </div>
  );
}

export default NavBar;
