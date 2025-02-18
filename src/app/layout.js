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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   bg-[#0e2335]  text-white     antialiased bg-grid-white relative overflow-hidden`}>
          <Navbar />
        <Spotlight
          fill="rgba(20, 255, 255, 0.8)"
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.05) 50%, rgba(20, 255, 255, 0) 80%)" 
gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
duration={.0001}
          
        />

        {children}
      </body>
    </html>
  );
}
