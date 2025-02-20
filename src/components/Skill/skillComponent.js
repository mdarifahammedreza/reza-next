"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React.js & Next.js", level: 85 },
  { name: "Vue.js", level: 75 },
  { name: "Node.js & Express.js", level: 85 },
  { name: "MongoDB & SQL", level: 80 },
  { name: "GraphQL & REST API", level: 70 },
  { name: "Tailwind CSS & Bootstrap", level: 90 },
  { name: "Material UI & ShadCN UI", level: 85 },
  { name: "AI/ML (Python, TensorFlow)", level: 70 },
  { name: "PyTorch", level: 75 },
  { name: "Quantum Computing (Qiskit)", level: 60 },
  { name: "Cybersecurity & Cryptography", level: 65 },
  { name: "Web Scraping & Automation", level: 75 },
  { name: "Docker & DevOps", level: 60 },
  { name: "Git & GitHub", level: 90 },
];

const SkillComponent = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-700 text-center mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-cyan-400 font-semibold">
                  {skill.name}
                </span>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <motion.div
                  className="bg-cyan-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
//               