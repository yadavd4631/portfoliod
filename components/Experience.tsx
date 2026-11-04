'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Zoos Global",
    location: "Mumbai, Maharashtra, India",
    period: "June 2026 – Present",
    description: "Datadog Implementation Partner · Cloud & Observability",
    bullets: [
      "Deploy and tune Datadog monitoring (monitors, dashboards, log pipelines) for client environments as a Datadog implementation partner.",
      "Rolled out Datadog agents across Linux fleets using Ansible, replacing manual per-server setup.",
      "Wrote reusable Terraform modules for IAM / EKS / networking and applied them across multiple environments.",
      "Diagnosed EKS failures (ImagePullBackOff, node readiness, IAM and subnet misconfig) and documented fixes for recurring cases.",
      "Traced production incidents across AWS, Kubernetes and application logs, with fixes applied under change control.",
      "Supported CI/CD pipelines (GitHub Actions, GitLab, Jenkins) with Docker, Nginx, SSL/TLS and DNS setup.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Plootus",
    location: "",
    period: "April 2025 – June 2026",
    description: "AI-Powered SDR Platform",
    bullets: [
      "Executed a zero-downtime production domain migration from v1.plootus.ai to plootus.ai on AWS Route 53, managing DNS, SSL, CORS, OAuth redirect URIs, and deployment cutover.",
      "Worked on AWS-based deployment workflows alongside Node.js/Express and MongoDB services, supporting production rollouts of customer-facing features. Integrated Claude and Gemini APIs into campaign and agent management flows, including real-time polling on LLM responses.",
      "Authored TRDs for Prospect Hub v2 (Accounts, Insights, Smart List Builder) to align founders, PM, and engineers on scope and rollout before implementation.",
      "Shipped React/Tailwind interfaces for the AI voice-agent platform, including the AI Campaign Management UI (CMAB Phase 2) and Campaign Hub redesign.",
    ],
  },
  {
    role: "Frontend Developer (titled Elite Projects Analyst)",
    company: "InStat IH",
    location: "",
    period: "April 2024 – December 2024",
    description: "Sports-Data Analytics",
    bullets: [
      "Owned frontend development across sports-data product surfaces, building and maintaining responsive React interfaces used in day-to-day analyst workflows.",
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
                {exp.location && (
                  <>
                    <span className="text-slate-600 hidden sm:inline text-xs">•</span>
                    <span className="text-slate-400 text-xs">{exp.location}</span>
                  </>
                )}
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
