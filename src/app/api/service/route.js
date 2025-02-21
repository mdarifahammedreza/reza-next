let Services = [
  {
    id: 1,
    icon: "FaCode",
    title: "Full-Stack Development",
    desc: "Building scalable and high-performance web applications using MERN and Next.js.",
  },
  {
    id: 2,
    icon: "FaRobot",
    title: "AI & Machine Learning",
    desc: "Integrating AI/ML models into applications for automation and predictive analytics.",
  },
  {
    id: 3,
    icon: "FaDatabase",
    title: "Database Management",
    desc: "Designing and optimizing relational and NoSQL databases for efficient data handling.",
  },
  {
    id: 4,
    icon: "FaCloud",
    title: "Cloud & DevOps",
    desc: "Deploying applications using cloud platforms and automating CI/CD pipelines.",
  },
  {
    id: 5,
    icon: "FaLock",
    title: "Cybersecurity",
    desc: "Implementing security best practices to protect applications and user data.",
  },
  {
    id: 6,
    icon: "FaLaptopCode",
    title: "Software Development",
    desc: "Developing efficient and user-friendly software solutions tailored to business needs.",
  },
  {
    id: 7,
    icon: "FaCogs",
    title: "Automation",
    desc: "Creating automation workflows to improve efficiency and reduce human effort.",
  },
  {
    id: 8,
    icon: "FaChartLine",
    title: "Data Science",
    desc: "Extracting insights from data using statistical analysis and machine learning.",
  },
  {
    id: 9,
    icon: "FaServer",
    title: "Backend Development",
    desc: "Building robust and scalable backend architectures with Node.js and Express.",
  },
  {
    id: 10,
    icon: "FaMobileAlt",
    title: "Mobile Development",
    desc: "Creating cross-platform mobile apps with React Native and Flutter.",
  },
];

export async function GET() {
  return new Response(JSON.stringify(Services), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function POST(req, res) {
  const { method } = req;
  if (method === "POST") {
    res.status(200).json({ name: "POST" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
