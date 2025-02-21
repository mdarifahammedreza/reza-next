"use client";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

const ServiceComponent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/service")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-[#0e2335] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6">
          My Services
        </h2>
        <p className="text-gray-300 mb-12">
          I provide a range of services, from web development to AI-driven
          solutions, ensuring high performance and security.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          const IconComponent = FaIcons[service.icon] || FaIcons.FaCode; // Fallback icon

          return (
            <div
              key={service.id}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <div className="text-cyan-400 text-5xl mb-4">
                <IconComponent />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComponent;
