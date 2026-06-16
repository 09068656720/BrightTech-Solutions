import React from "react";
import ServiceCard from "./ServiceCard";
import"./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build fast website",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful user experiences",
    },
    {
      title: "Web Development",
      description: "We build fast website",
    },
    {
      title: "Content/Essay writing",
      description: "You will never regret our write up",
    },
  ];

  return(
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {/* Iterating over the array using.map() */}
        {
          services.map((service, index) =>(
            <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Services;
