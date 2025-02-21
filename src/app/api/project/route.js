const projects = [{
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
export async function GET() {
    return new Response(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
       },
    });
  }

export  async function POST(req, res) {
  const { method } = req;
  if (method === "POST") {
    res.status(200).json({ name: "POST" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}