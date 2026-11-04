'use client';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import { SiDatadog, SiKubernetes } from 'react-icons/si';

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-2xl md:px-4 px-8 pt-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/80 border border-slate-800/80 rounded-xl text-xs backdrop-blur-md shadow-inner">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400">All Systems Operational</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">Uptime: 99.99%</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-md">
            <FaCloud className="text-blue-400 text-[10px]" /> AWS us-east-1
          </span>
          <span className="flex items-center gap-1 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-md">
            <SiKubernetes className="text-indigo-400 text-[10px]" /> EKS v1.29
          </span>
          <span className="flex items-center gap-1 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-md">
            <SiDatadog className="text-purple-400 text-[10px]" /> Datadog APM
          </span>
        </div>
      </div>
    </motion.div>
  );
}
