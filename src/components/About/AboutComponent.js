const AboutComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center h-auto md:h-[40rem] w-full">
      {/* Left Section - About Me */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#0e2335] 80% to-black 20%">
        <div className="p-6 md:p-10 h-full flex flex-col justify-center items-center">
          <div className="p-4 md:p-6 text-white rounded-lg shadow-2xl w-full md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-4">
              About Me
            </h2>
            <p className="mb-4 text-sm md:text-base">
              I am <span className="font-semibold">Md Arif Ahammed Reza</span>,
              a passionate
              <span className="text-cyan-400"> Full-Stack Developer</span>{" "}
              specializing in
              <span className="text-cyan-400"> MERN, Next.js, and AI/ML</span>.
              Currently, I am pursuing a
              <span className="text-cyan-400">
                {" "}
                Bachelor’s in Software Engineering at Daffodil International
                University (2022-2026)
              </span>
              .
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-700 mb-2">
              Interests & Hobbies
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-300 text-sm md:text-base">
              <li>
                <span className="text-cyan-400">Interests:</span> Quantum
                Computing, Artificial Intelligence, Advanced Computing,
                Robotics, Cybersecurity
              </li>
              <li>
                <span className="text-cyan-400">Hobbies:</span> Coding,
                Research, Gym, Playing Chess, Exploring New Technologies
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-700 mb-2">
              Aim
            </h3>
            <p className="mb-4 text-sm md:text-base">
              I aspire to{" "}
              <span className="text-cyan-400">
                pursue a Master’s in Quantum Computing in Germany
              </span>{" "}
              and contribute to the development of{" "}
              <span className="text-cyan-400">
                AI-driven quantum computing systems
              </span>
              . My ultimate goal is to make
              <span className="text-cyan-400">
                {" "}
                advanced computing more accessible to the public
              </span>{" "}
              while pushing the boundaries of
              <span className="text-cyan-400"> AI and quantum computing</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div className="w-full md:w-1/2 h-[20rem] md:h-full bg-cover bg-right bg-[url('https://i.ibb.co/Bw7qLhB/COVER.png')] flex items-center justify-center p-4 md:p-5">
        {/* You can add more content inside this section if needed */}
      </div>
    </div>
  );
};

export default AboutComponent;
