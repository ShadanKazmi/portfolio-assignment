import React from 'react';
import aboutMePic from '../assets/photo.jpg';

const AboutMe = () => {
  return (
    <div
      data-aos="fade-up"
      id="about"
      className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white animate-fadeIn"
      style={{ paddingLeft: "30%", borderBottom: "150px solid transparent" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6">
              I am a passionate and driven individual with a deep love for technology and innovation. I graduated with a degree in BTech in Computer Science Engineering at Vellore Institute of Technology, Bhopal, where I honed my programming skills and expanded my knowledge. I started with a strong foundation in C++ during my high school years and have since expanded my expertise to include Java and Python. Recently, I've focused on full-stack web development, specializing in the MERN stack to build robust and scalable web applications.
            </p>
            <p className="text-lg mb-6">
              My hands-on experience includes developing a variety of projects in Java, from desktop applications to enterprise-level software solutions. Using the MERN stack, I've created intuitive and user-friendly web applications that offer seamless user experiences and strong backend support.
            </p>
            <p className="text-lg mb-6">
              What sets me apart is my technical proficiency, adaptability, and eagerness to embrace new challenges. I thrive in fast-paced environments and am known for my meticulous attention to detail, ensuring precision while navigating complex projects. As I progress in my professional journey, I remain committed to continuous learning and growth, always seeking opportunities to push boundaries and make meaningful contributions to the ever-evolving tech landscape.
            </p>
            <p className="text-lg">
              I'm excited to connect with fellow professionals, mentors, and like-minded individuals who share my enthusiasm for technology and innovation. Let's connect and explore the possibilities together!
            </p>
          </div>
          <div className="flex-1 mb-8 md:mb-0">
            <div className="relative w-full h-64 md:w-80 md:h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutMePic}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
