import { useState } from 'react';
import '../styles/Contact.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: 'Residential Contracting',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="contact-page container">
      <div className="page-intro">
        <p className="section-label">Contact</p>
        <h1>Start your next project with a straightforward conversation.</h1>
        <p>
          Use the form below to share your project goals, request an estimate, or ask about residential contracting and
          concrete work availability.
        </p>
      </div>

      <div className="contact-page__grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Service Needed
            <select name="service" value={formData.service} onChange={handleChange}>
              <option>Residential Contracting</option>
              <option>Concrete Work</option>
              <option>Project Consultation</option>
            </select>
          </label>
          <label>
            Project Details
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="button button--primary">Send Request</button>
          {submitted ? <p className="contact-form__success">Thanks! Your request has been captured for follow-up.</p> : null}
        </form>

        <aside className="contact-card">
          <h2>Company Information</h2>
          <ul>
            <li><strong>Company:</strong> Gonzales Construction Group LLC</li>
            <li><strong>Specialties:</strong> Residential contracting and concrete work</li>
            <li><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</li>
            <li><strong>Response Goal:</strong> Estimate requests acknowledged within one business day</li>
          </ul>
          <p>
            Placeholder contact assets are included in this starter site so your production phone number, email, and
            service area can be updated easily before launch.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
