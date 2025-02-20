"use client";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "CBSG (Capacity Building Service Group)",
    duration: "Jan 2025 - Present",
    description:
      "Developed a marketing website using Vue.js, Express.js, and MySQL. Deployed on GoDaddy server.",
  },
  {
    role: "MERN Stack Developer",
    company: "Freelance Projects",
    duration: "2023 - Present",
    description:
      "Built multiple full-stack applications using Next.js, MongoDB, and AI/ML integrations.",
  },
  {
    role: "Software Engineer Intern",
    company: "Deferred Combiters Ltd.",
    duration: "2024 - 2025",
    description:
      "Worked on enterprise web applications and optimized backend API performance.",
  },
];

const ExperienceComponent = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-700 text-center mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Briefcase className="text-cyan-400" size={40} />
              <div>
                <h3 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
