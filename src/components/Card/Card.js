import React from 'react';
import "./Card.css"

const Card = ({ imageSrc, title, subtitle, link }) => {
  return (
    <a href={link} className="cardstyle">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </a>
  );
};

export default Card;
