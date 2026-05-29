'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Plootus",
    period: "April 2025 – Present",
    description: "AI-Powered SDR Platform",
    bullets: [
      "Architected and shipped CMAB Phase 2 AI Campaign Management UI with paginated script generation and real-time polling on LLM responses.",
      "Redesigned Campaign Hub with health indicators and a mode-first creation flow.",
      "Rebuilt the company suggestion system using an event-driven Jaro–Winkler matcher, reducing lookup latency.",
      "Executed a zero-downtime production domain migration to AWS Route 53."
    ],
  },
  {
    role: "Frontend Developer",
    company: "InStat IH",
    period: "April 2024 – December 2024",
    description: "Sports-Data Analytics",
    bullets: [
      "Owned frontend development across sports-data product surfaces.",
      "Built and maintained responsive React interfaces used in day-to-day analyst workflows.",
      "Collaborated cross-functionally to optimize UI performance and data presentation."
    ],
  },
];

export default function Experience() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-8 font-semibold tracking-tight">Experience</h2>
      
      <div className="relative border-l border-slate-700/60 ml-3 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Glowing timeline dot */}
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-600 ring-[4px] ring-[#0f172a] group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all duration-300"></span>
            
            {/* Header info */}
            <div className="flex flex-col mb-3">
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-slate-300 font-medium text-sm">{exp.company}</span>
                <span className="text-slate-600 hidden sm:inline text-xs">•</span>
                <span className="text-slate-400 text-xs font-medium tracking-wide bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md">
                  {exp.period}
                </span>
              </div>
            </div>
            
            {/* Description / Sub-heading */}
            <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-semibold">
              {exp.description}
            </p>
            
            {/* Custom Bullets */}
            <ul className="flex flex-col gap-3 list-none text-[15px] text-slate-400 leading-relaxed">
              {exp.bullets.map((bullet, i) => (
                <li 
                  key={i} 
                  className="relative pl-5 before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:bg-slate-700 before:rounded-full group-hover:before:bg-blue-500/50 before:transition-colors duration-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
