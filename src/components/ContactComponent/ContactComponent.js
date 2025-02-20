"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactComponent = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-700 text-center mb-10">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="space-y-6 w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" size={30} />
              <p className="text-gray-300">reza35-951@diu.edu.bd</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" size={30} />
              <p className="text-gray-300">+880 1234 567 890</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" size={30} />
              <p className="text-gray-300">Joypurhat, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"></textarea>
              <button className="w-full bg-cyan-500 py-3 rounded-lg text-white font-semibold hover:bg-cyan-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
