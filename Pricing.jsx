/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="index.html#top" className="nav-logo">
          <img src="assets/mark.png" alt="" />
          <span>Canaria Records</span>
        </a>
        <div className="nav-links">
          <a href="index.html#about">エンジニア</a>
          <a href="index.html#consult">相談</a>
          <a href="index.html#pricing">サブスク</a>
          <a href="single.html">単発</a>
          <a href="index.html#gear">機材</a>
          <a href="#contact" className="btn btn-primary">はじめる</a>
        </div>
      </div>
    </nav>
  );
}
Object.assign(window, { Nav });
