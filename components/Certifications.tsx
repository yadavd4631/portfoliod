'use client';
import { motion } from 'framer-motion';
import { SiDatadog } from 'react-icons/si';

const certifications = [
  {
    title: "Datadog Fundamentals",
    issuer: "Datadog",
    period: "July 2026 – July 2029",
    status: "Active",
  },
  {
    title: "Datadog Log Management Fundamentals",
    issuer: "Datadog",
    period: "August 2026 – August 2029",
    status: "Active",
  },
  {
    title: "Datadog APM and Distributed Tracing Fundamentals",
    issuer: "Datadog",
    period: "August 2026 – August 2029",
    status: "Active",
  },
];

export default function Certifications() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-6 font-semibold tracking-tight">Certifications</h2>

      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg group-hover:scale-105 transition-transform">
                <SiDatadog size={22} />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-base font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-[11px] font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full w-fit">
                    {cert.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="text-slate-300 font-medium">{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span>{cert.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
