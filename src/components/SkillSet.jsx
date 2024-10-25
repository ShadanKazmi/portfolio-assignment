import React from 'react';
import javaLogo from '../assets/java.svg';
import reactLogo from '../assets/icon-react.svg';
import nextjsLogo from '../assets/icon-nextjs.svg';
import nodejsLogo from '../assets/node.svg';
import mongodbLogo from '../assets/icon-mongodb.svg';
import expressjsLogo from '../assets/icon-express.svg';
import salesforceLogo from '../assets/salesforce.svg';
import flutterLogo from '../assets/flutter.svg';
import mysqlLogo from '../assets/sql.png';
import gitLogo from '../assets/icon-git.svg';
import js from '../assets/icon-javscript.svg';
import ts from '../assets/icon-typescript.svg';
import tcss from '../assets/icon-tailwindcss.svg';

const SkillSet = () => {
  const skills = [
    { src: javaLogo, alt: 'Java' },
    { src: js, alt: 'JavaScript' },
    { src: ts, alt: 'TypeScript' },
    { src: mongodbLogo, alt: 'MongoDB' },
    { src: expressjsLogo, alt: 'ExpressJS' },
    { src: reactLogo, alt: 'ReactJS' },
    { src: nodejsLogo, alt: 'NodeJS' },
    { src: nextjsLogo, alt: 'NextJS' },
    { src: tcss, alt: 'Tailwind CSS' },
    { src: salesforceLogo, alt: 'Salesforce' },
    { src: flutterLogo, alt: 'Flutter' },
    { src: mysqlLogo, alt: 'MySQL' },
    { src: gitLogo, alt: 'Git' }
  ];

  return (
    <div data-aos="fade-left" className="skills-container bg-gradient-to-r from-blue-900 via-blue-850 to-blue-800 text-white p-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-4">Skills</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transition-transform transform hover:scale-110 hover:bg-blue-900 p-4 rounded-md"
          >
            <img src={skill.src} alt={skill.alt} width={64} height={64} className="mb-2" />
            <span>{skill.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
