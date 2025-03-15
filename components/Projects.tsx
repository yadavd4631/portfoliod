'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Real-Time Chat Application – React.js, Firebase, Open AI",
    description:
      "Developed a React.js-based chat app with real-time messaging, user authentication, and image sharing using Firebase (Authentication, Firestore, Storage). Enhanced with Open AI API for an interactive chatbot to handle user queries. Designed a responsive UI with CSS Flexbox.",

    tech: [
      "React.js",
      "Firebase (Authentication, Firestore, Storage)",
      "CSS",
      "Open AI API",
      "TailwindCSS",
    ],
    github: "https://github.com/yadavd4631/chat-app",
    live: "https://github.com/yadavd4631/Chatapp",
  },
  {
    title: "Music Streaming Website",
    description:
      "This project is built using React.js and Tailwind CSS with static data. It allows users to play songs online with a built-in music player. The app includes custom music controls for playing, pausing, and skipping tracks. It features a responsive and clean UI, designed with Tailwind CSS for a smooth user experience.",
    tech: ["React.js", "TailwindCSS"],
    github: "https://github.com/yadavd4631/Spotify-Clone",
    live: "https://musicspotifyclone.vercel.app/",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" my-4 rounded-lg ">
            <h2 className="text-base font-semibold text-slate-200">
              {index + 1}. {project.title}
            </h2>
            <p className="text-slate-300 mt-1 text-base tracking-tight">
              {project.description || 'No description available.'}
            </p>
            <div className="mt-2">
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm">
              <a
                href={project.github}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a
                href={project.live}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
