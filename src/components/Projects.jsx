import React, { useState, useEffect } from 'react';
import project1Img from '../assets/arcadia.png'; 
import project2Img from '../assets/team.png';
import project3Img from '../assets/news.png';

const projects = [
  {
    title: 'Arcadia',
    image: project1Img,
    tags: ['React.js', 'Next JS', 'TailwindCSS'],
    description: 'A platform offering detailed information on games, including ratings and descriptions...',
    link: 'https://arcadia-theta.vercel.app/'
  },
  {
    title: 'One Space',
    image: project2Img,
    tags: ['MongoDB', 'Express.js','React.js', 'Node.js','TailwindCSS'],
    description: 'The only workspace your team needs. A collaborative environment designed for seamless team communication...',
    link: 'https://one-space-zeta.vercel.app/'
  },
  {
    title: 'News App',
    image: project3Img,
    tags: ['MongoDB', 'Express.js','React.js', 'Node.js'],
    description: 'A comprehensive news application for all your informational needs...',
    link: 'https://news-app-mu-plum.vercel.app/'
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="projects" className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-white">Projects</h2>
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'block' : 'hidden'} w-full flex items-center justify-center`}
            >
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 shadow-xl rounded-lg w-11/12 md:w-3/4">
                <div className="w-full md:w-1/2 p-4 cursor-pointer" onClick={() => window.open(project.link, '_blank')}>
                  <img src={project.image} alt={project.title} className="rounded-lg w-full h-80 object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-4 cursor-pointer" onClick={() => window.open(project.link, '_blank')}>
                  <div className="card-body">
                    <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-600 text-white mr-2 mb-2 p-2 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 px-4">
            <button onClick={handlePrev} className="bg-blue-600 text-white p-2 rounded-full">❮</button>
            <button onClick={handleNext} className="bg-blue-600 text-white p-2 rounded-full">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
