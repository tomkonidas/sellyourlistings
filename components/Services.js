import { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
  });

  return (
    <div>
      <h3>services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
