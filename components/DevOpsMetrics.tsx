'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaServer, FaCodeBranch } from 'react-icons/fa';
import { SiDatadog } from 'react-icons/si';

const metrics = [
  {
    value: "99.99%",
    label: "Production Uptime",
    desc: "Zero-downtime AWS Route 53 domain cutover & failover architecture",
    icon: FaShieldAlt,
    color: "from-emerald-400 to-teal-400",
    border: "hover:border-emerald-500/40",
  },
  {
    value: "100%",
    label: "Infra as Code",
    desc: "Reusable Terraform modules for EKS, IAM, VPC & Networking",
    icon: FaCodeBranch,
    color: "from-blue-400 to-indigo-400",
    border: "hover:border-blue-500/40",
  },
  {
    value: "100+",
    label: "Fleet Nodes Automated",
    desc: "Ansible playbooks for fleet-wide Datadog monitoring rollout",
    icon: FaServer,
    color: "from-amber-400 to-orange-400",
    border: "hover:border-amber-500/40",
  },
  {
    value: "3x",
    label: "Datadog Certified",
    desc: "Official certifications in Fundamentals, APM Tracing & Logs",
    icon: SiDatadog,
    color: "from-purple-400 to-fuchsia-400",
    border: "hover:border-purple-500/40",
  },
];

export default function DevOpsMetrics() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-8"
      initial={{ filter: 'blur(10px)', y: 15 }}
      animate={{ filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`group bg-slate-850/50 bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 flex flex-col justify-between transition-all duration-300 hover:bg-slate-800/60 ${metric.border}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-2xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </span>
              <metric.icon className="text-slate-500 group-hover:text-slate-300 transition-colors text-sm" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">{metric.label}</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">{metric.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
