'use client';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Express.js"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "MongoDB", "REST API Design", "Data Modeling"],
  },
  {
    category: "AI Integration",
    skills: ["Claude API", "Gemini API"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "GitLab CI/CD", "Vercel", "Netlify", "AWS Route 53", "Firebase"],
  },
  {
    category: "Engineering Practices",
    skills: ["TRD Authoring", "Cross-Functional Collaboration", "Code Review"],
  },
];

export default function Skills() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-6 font-semibold tracking-tight">Skills &amp; Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div 
            key={group.category} 
            className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 transition-colors duration-300"
          >
            <h3 className="text-sm font-semibold text-slate-200 mb-4 tracking-wide">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-900/60 text-slate-300 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-700/50 hover:text-white hover:bg-slate-700/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
