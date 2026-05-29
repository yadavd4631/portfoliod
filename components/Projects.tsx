'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Asterisks — Gym Management SaaS",
    description:
      "Co-founder & frontend lead on a multi-tenant gym management platform, built alongside a C# backend developer and a domain-expert trainer. Owning frontend architecture and product decisions; pilot deployment is live at Iron Forge Fitness.",
    tech: ["React.js", "TailwindCSS", "Multi-tenant Architecture", "C# Backend"],
    github: null,
    live: "https://www.asterisks.app/",
    badge: "In Progress",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-6 font-semibold tracking-tight">Projects</h2>
      
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 transition-all duration-300"
          >
            {/* Title & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.badge && (
                <span className="text-[10px] uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-semibold">
                  {project.badge}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-slate-400 leading-relaxed text-sm mb-5">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-slate-900/60 text-slate-300 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-4 text-sm font-medium mt-1">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
