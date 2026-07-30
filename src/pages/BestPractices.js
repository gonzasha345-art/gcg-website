import '../styles/BestPractices.css';

const practices = [
  {
    title: 'Detailed Project Planning',
    description: 'We review scope, sequencing, and job requirements early so each phase is organized before work begins.',
  },
  {
    title: 'Durable Materials & Methods',
    description: 'Our work is guided by practical material choices and installation methods that support long-term performance.',
  },
  {
    title: 'Clean & Safe Jobsites',
    description: 'We maintain orderly work areas, respect the property, and keep safety top of mind throughout the project.',
  },
  {
    title: 'Clear Communication',
    description: 'Homeowners receive direct updates on milestones, timelines, and project needs so expectations stay aligned.',
  },
];

function BestPractices() {
  return (
    <section className="best-practices-page container">
      <div className="page-intro">
        <p className="section-label">Best Practices</p>
        <h1>Our commitment to quality is built into every step of the job.</h1>
        <p>
          Gonzales Construction Group LLC emphasizes consistency, planning, and workmanship standards that help deliver
          dependable residential and concrete projects.
        </p>
      </div>
      <div className="best-practices-page__grid">
        {practices.map((practice) => (
          <article key={practice.title} className="practice-card">
            <h2>{practice.title}</h2>
            <p>{practice.description}</p>
          </article>
        ))}
      </div>
      <img src="/assets/quality-placeholder.svg" alt="Illustration representing construction quality best practices" className="best-practices-page__image" />
    </section>
  );
}

export default BestPractices;
