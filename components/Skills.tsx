'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { skill: "TailwindCSS" },
    { skill: "Javascript" },
    { skill: "React" },
    { skill: "MongoDB" },
    { skill: "Git" },
    { skill: "VS Code" },
    
  ];
  return (
    <motion.div
    className="mx-auto max-w-2xl md:px-4 px-8 mt-8"
    initial={{ filter: 'blur(10px)' }}
    animate={{ filter: 'blur(0px)' }}
    transition={{ duration: 0.3 }}
  >
      <h2 className="text-xl text-slate-100">Skills & Tools</h2>
      <div className="flex flex-wrap gap-2 mt-2 max-w-2xl">
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
          >
            {skill.skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
