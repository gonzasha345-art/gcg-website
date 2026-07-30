import '../styles/Components.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h2>Gonzales Construction Group LLC</h2>
          <p>Reliable residential contracting and concrete solutions built with craftsmanship and care.</p>
        </div>
        <div>
          <h2>Coverage</h2>
          <p>Serving homeowners with practical planning, durable materials, and jobsite professionalism.</p>
        </div>
        <div>
          <h2>Next Step</h2>
          <p>Use the contact page to request an estimate, ask about project timelines, or start a consultation.</p>
        </div>
      </div>
      <div className="site-footer__bar">
        <div className="container">
          <p>© {new Date().getFullYear()} Gonzales Construction Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
