import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-section__grid">
          <div>
            <p className="section-label">Built for lasting results</p>
            <h1>Dependable residential construction and concrete work for every stage of your project.</h1>
            <p className="hero-section__text">
              Gonzales Construction Group LLC delivers practical planning, strong workmanship, and clear communication
              for homeowners who need trusted residential contracting support.
            </p>
            <div className="hero-section__actions">
              <Link className="button button--primary" to="/contact">Request an Estimate</Link>
              <Link className="button button--secondary" to="/services">Explore Services</Link>
            </div>
          </div>
          <img src="/assets/hero-placeholder.svg" alt="Illustration of a residential construction project" className="hero-section__image" />
        </div>
      </section>

      <section className="overview-section">
        <div className="container overview-section__grid">
          <article>
            <h2>Company Overview</h2>
            <p>
              From site preparation to finishing details, our team focuses on reliable scheduling, material quality,
              and durable construction methods that support everyday living.
            </p>
          </article>
          <article>
            <h2>Why Homeowners Choose Us</h2>
            <p>
              We prioritize straightforward communication, safe work practices, and solutions tailored to each
              property, scope, and budget.
            </p>
          </article>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <p className="section-label">Featured Services</p>
          <div className="featured-section__cards">
            <article className="feature-card">
              <h3>Residential Contracting</h3>
              <p>Project coordination, renovation support, framing, repairs, and dependable on-site execution.</p>
            </article>
            <article className="feature-card">
              <h3>Concrete Work</h3>
              <p>Concrete placement, finishing, pads, walkways, and structural flatwork designed for durability.</p>
            </article>
            <article className="feature-card">
              <h3>Quality Commitment</h3>
              <p>Thoughtful planning, best-practice installation methods, and a focus on long-term performance.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
