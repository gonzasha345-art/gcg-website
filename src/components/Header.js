import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Components.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Gonzales Construction Group home">
          <img src="/assets/logo.svg" alt="Gonzales Construction Group logo" className="brand__logo" />
          <div>
            <span className="brand__name">Gonzales Construction Group LLC</span>
            <span className="brand__tagline">Residential Contracting &amp; Concrete Work</span>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
