"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  console.log("active", active);
  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <nav
      className="flex justify-between py-2 px-6 items-center relative shadow-sm border-b border-gray-800/20 font-geist-sans z-50"
      role="navigation">
      <h1 className="font-bold text-2xl hover:bg-slate-900">
        Re<span className="text-cyan-500 animate-glow">za</span>
      </h1>
      <ul className="flex justify-between space-x-10 items-center">
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer text-lg px-3 py-2 rounded-md 
              ${active === item ? "text-cyan-500 border-b-2" : "text-white"}
              hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
              `}
            onClick={() => handleClick(item)}>
            <Link href={`/${item === "Home" ? "/" : item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      {/* Glowing effect on the text initially */}
      <style jsx>{`
        .animate-glow {
          animation: glowingText 2s infinite alternate;
        }

        @keyframes glowingText {
          0% {
            color: rgba(0, 255, 255, 0.5);
            shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          }
          50% {
            color: rgba(0, 255, 255, 0.75);
            shadow: 0 0 10px rgba(0, 255, 255, 1);
          }
          100% {
            color: rgba(0, 255, 255, 1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
