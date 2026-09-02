import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="card">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;