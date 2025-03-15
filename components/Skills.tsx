'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { skill: "Javascript" },
    { skill: "React" },
    { skill: "Redux" },
    { skill: "REST APIs" },
    { skill: "MongoDB" },
    { skill: "TailwindCSS" },
    { skill: "GitHub" },
    { skill: "VS Code" },
    { skill: "Problem-Solving" },
    { skill: "Analytical Thinking" },
    { skill: "Team Collaboration" },
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
