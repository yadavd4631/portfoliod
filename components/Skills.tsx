'use client';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Cloud Platforms",
    skills: ["AWS", "GCP", "Azure", "Amazon EKS", "VPC", "IAM", "EC2", "S3", "Route 53", "RDS", "Lambda", "CloudWatch"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Kubernetes", "Docker", "Helm", "EKS Cluster Management"],
  },
  {
    category: "IaC & Automation",
    skills: ["Terraform", "Ansible", "Bash Scripting"],
  },
  {
    category: "CI/CD & Pipelines",
    skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Git"],
  },
  {
    category: "Observability & Monitoring",
    skills: ["Datadog APM", "Datadog Logs & Metrics", "Datadog Monitors & Dashboards", "Distributed Tracing", "Kibana", "CloudWatch"],
  },
  {
    category: "Linux & Networking",
    skills: ["Ubuntu / Linux", "Nginx", "DNS", "SSL/TLS", "CORS"],
  },
  {
    category: "Software Development",
    skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
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
