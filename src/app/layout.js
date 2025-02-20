import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Arif Ahammed Reza - Full-Stack Developer | MERN, Next.js, AI & ML",
  description:
    "Full-Stack Developer specializing in MERN, Next.js, and AI/ML integration. Expert in building intelligent, high-performance web applications with modern UI and automation.",
  keywords:
    "Md Arif Ahammed Reza, Full-Stack Developer, MERN, Next.js, AI, ML, MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Bootstrap, Machine Learning",
  author: "Md Arif Ahammed Reza",
  locale: "en_US",
  og: {
    type: "website",
    title:
      "Md Arif Ahammed Reza - Full-Stack Developer | MERN, Next.js, AI & ML",
    description:
      "I specialize in building scalable, high-performance applications using MERN stack, Next.js, and AI/ML integration.",
    image: "/panda.jpg",
    url: "https://www.example.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0e2335] text-white antialiased bg-grid-white relative overflow-x-hidden`}>
        <Navbar />
        <Spotlight
          fill="rgba(20, 255, 255, 0.8)"
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.05) 50%, rgba(20, 255, 255, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
          duration={20}
        />
        {children}
      </body>
    </html>
  );
}
