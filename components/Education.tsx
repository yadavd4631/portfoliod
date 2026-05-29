'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    institution: "Maharaja Agrasen Himalayan Garhwal University (MAHGU)",
    degree: "Master of Computer Applications (MCA)",
    period: "Graduated January 2023",
    coursework: ["Web Technologies", "Database Management Systems", "Software Engineering"],
  }
];

export default function Education() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-6 font-semibold tracking-tight">Education</h2>
      
      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-slate-700/50 text-blue-400 rounded-lg">
                <FaGraduationCap size={20} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 mb-3">
                  <span className="text-slate-300 font-medium text-sm">{edu.institution}</span>
                  <span className="hidden sm:inline text-slate-600 text-xs">•</span>
                  <span className="text-slate-400 text-xs font-medium tracking-wide bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md w-fit">
                    {edu.period}
                  </span>
                </div>
                
                {edu.coursework && (
                  <div className="mt-2">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest font-semibold">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i} 
                          className="bg-slate-900/60 text-slate-300 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-700/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
