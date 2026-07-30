import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

const services = [
  {
    title: 'Residential Contracting',
    description:
      'Comprehensive support for homeowners who need an experienced contractor to manage planning, construction, and finishing details.',
    highlights: ['Renovation and repair support', 'Framing and carpentry coordination', 'Project scheduling and oversight'],
    image: `${process.env.PUBLIC_URL}/assets/contracting-placeholder.svg`,
    alt: 'Illustration representing residential contracting work',
  },
  {
    title: 'Concrete Work',
    description:
      'Concrete solutions designed for stability, appearance, and long-term wear across residential properties.',
    highlights: ['Driveways, sidewalks, and patios', 'Foundations, pads, and slab preparation', 'Finishing, curing, and site cleanup'],
    image: `${process.env.PUBLIC_URL}/assets/concrete-placeholder.svg`,
    alt: 'Illustration representing residential concrete work',
  },
];

function Services() {
  return (
    <section className="services-page container">
      <div className="page-intro">
        <p className="section-label">Services</p>
        <h1>Construction services centered on quality craftsmanship and dependable execution.</h1>
        <p>
          Every project is approached with clear coordination, jobsite organization, and a commitment to durable
          results for your home.
        </p>
      </div>
      <div className="services-page__list">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
