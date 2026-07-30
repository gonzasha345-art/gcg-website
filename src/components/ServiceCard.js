function ServiceCard({ title, description, highlights, image, alt }) {
  return (
    <article className="service-card">
      <img src={image} alt={alt} className="service-card__image" />
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ServiceCard;
