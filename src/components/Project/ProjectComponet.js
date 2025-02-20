"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TaskBlaze",
    description: "AI-powered task management system built with Next.js.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Library Locker System",
    description:
      "Smart vending machine for key management using Next.js & MongoDB.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "FiniteAI",
    description:
      "Vue.js-powered AI-driven app for financial insights and predictions.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Restaurant Management System",
    description:
      "Full-stack system enabling online food ordering & SSL payments.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "CBSG Marketing Website",
    description:
      "Business website for CBSG, built with Vue.js & deployed on GoDaddy.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
];

const ProjectComponent = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cyan-700 text-center mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-[200px] object-cover"
              />
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-cyan-500 hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
