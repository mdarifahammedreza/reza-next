"use client"; // ✅ Mark this as a Client Component

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ Ensure framer-motion is imported correctly
import Image from "next/image";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://reza-hnd6ke66i-rezas-projects-ed87c688.vercel.app/api/project"
        );
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-[#0e2335] to-[#2a3e52] text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-cyan-400 text-center mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}>
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Set a fixed width
                height={300} // Set a fixed height
                className="rounded-md mb-6 w-full h-[200px] object-cover transition-all duration-300"
              />
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                className="text-cyan-500 hover:underline text-lg font-medium">
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
