import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  const words = [
    {
      text: "Md ",
    },
    {
      text: " Arif",
    },
    {
      text: " Ahammed ",
    },
    {
      text: "Reza",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full-Stack Developer | MERN Stack | AI & ML Enthusiast"
        />
        <meta
          name="keywords"
          content="Md Arif Ahammed Reza, Full-Stack Developer, MERN Stack, AI, ML, React.js, Node.js, Next.js, Web Development"
        />
        <meta
          property="og:title"
          content="Md Arif Ahammed Reza - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="I specialize in building intelligent, high-performance web applications using MERN Stack and AI/ML integration."
        />
        <meta property="og:image" content="/panda.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta
          name="twitter:title"
          content="Md Arif Ahammed Reza - Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="I specialize in building intelligent, high-performance web applications using MERN Stack and AI/ML integration."
        />
        <meta name="twitter:image" content="/panda.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Md Arif Ahammed Reza - Full-Stack Developer</title>
      </Head>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 p-8 h-screen w-full">
        <section className="relative flex items-center justify-center h-60 w-60 md:h-80 md:w-80 border-8 border-cyan-400 overflow-hidden rounded-full shadow-[0_0_40px_cyan]">
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40"></div>
          <Image
            src="/panda.jpg"
            alt="Profile picture"
            height={320}
            width={320}
            className="object-cover rounded-full"
          />
        </section>
        <section className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
            Hello, I'm{" "}
          </h1>
          <TypewriterEffectSmooth words={words} />
          <p className="text-xl font-semibold text-gray-300 mb-6">
            Full-Stack Developer | MERN Stack | AI & ML Enthusiast
          </p>
          <p className="text-sm text-gray-400 max-w-lg mx-auto md:mx-0">
            I specialize in building intelligent, high-performance web
            applications using MERN Stack (MongoDB, Express.js, React.js,
            Node.js), Next.js, and AI/ML integration. My goal? To turn ideas
            into powerful, scalable solutions with modern UI, automation, and
            cutting-edge AI.
          </p>
          <div className="flex justify-start items-center gap-4 mt-6 font-semibold text-2xl">
            <Link href="https://github.com/mdarifahammedreza" target="_blank">
              <FaGithubSquare />
            </Link>
            <Link
              href="https://www.linkedin.com/in/md-arif-ahammed-reza/"
              target="_blank">
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~01abf4a3c7c5ee0fa3"
              target="_blank">
              <FaSquareUpwork />
            </Link>
            <Link
              href="https://www.instagram.com/mdarifahammedreza/"
              target="_blank">
              <FaInstagramSquare />
            </Link>
            <Link href="https://www.facebook.com/reza412200" target="_blank">
              <FaFacebookSquare />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
