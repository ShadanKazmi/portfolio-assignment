import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-right" className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex-1 text-white text-center md:text-left mb-8 md:mb-0">
            <div className="rounded-lg shadow-lg max-w-lg mx-auto">
              <h1 className="text-6xl font-extrabold mb-4 animate-fadeIn">
                Hello, I am Shadan Kazmi
              </h1>
              <p className="text-lg mb-4 animate-fadeIn delay-300">
                I am a dedicated developer with a passion for crafting innovative and user-friendly web experiences. Dive into my projects and see what I can create. Let's build something amazing together.
              </p>
              <div className="mt-6">
                <a 
                  href="https://drive.google.com/file/d/19GfXzhTxPowlTGdEJ1ZE2OrhGOMUxwhA/view?usp=sharing" 
                  download 
                  className="inline-block bg-yellow-300 text-blue-950 py-2 px-4 rounded-full text-lg font-medium hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon icon={faFileDownload} className="text-lg" /> 
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
