import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaLock,
  FaRobot,
} from "react-icons/fa";

const ServiceComponent = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Full-Stack Development",
      desc: "Building scalable and high-performance web applications using MERN and Next.js.",
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      desc: "Integrating AI/ML models into applications for automation and predictive analytics.",
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "Designing and optimizing relational and NoSQL databases for efficient data handling.",
    },
    {
      id: 4,
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      desc: "Deploying applications using cloud platforms and automating CI/CD pipelines.",
    },
    {
      id: 5,
      icon: <FaLock />,
      title: "Cybersecurity",
      desc: "Implementing security best practices to protect applications and user data.",
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "Developing efficient and user-friendly software solutions tailored to business needs.",
    },
  ];
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
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
            <div className="text-cyan-400 text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
