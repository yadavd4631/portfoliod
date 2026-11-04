'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaCertificate,
  FaFileAlt,
  FaEnvelope,
  FaTrash,
  FaExternalLinkAlt,
  FaExpand,
  FaCompress,
  FaCheckCircle,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
  FaAws,
} from 'react-icons/fa';
import {
  SiKubernetes,
  SiDatadog,
  SiTerraform,
  SiDocker,
} from 'react-icons/si';
import { VscTerminal } from 'react-icons/vsc';

interface TerminalEntry {
  id: string;
  command: string;
  content: React.ReactNode;
}

export default function DevOpsTerminal() {
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [entries]);

  // Initial load entry: Welcome banner + About
  useEffect(() => {
    setEntries([
      {
        id: 'init-banner',
        command: 'system-init',
        content: renderWelcomeBanner(),
      },
      {
        id: 'init-about',
        command: 'whoami',
        content: renderAbout(),
      },
    ]);
  }, []);

  function renderWelcomeBanner() {
    return (
      <div className="space-y-2 mb-2 font-mono">
        <pre className="text-blue-400 text-[10px] sm:text-xs leading-none font-bold overflow-x-auto select-none">
{`
  ____                        _      __   __        _             
 |  _ \\  ___  ___ _ __   __ _| | __  \\ \\ / /_ _  __| | __ ___   __
 | | | |/ _ \\/ _ \\ '_ \\ / _\` | |/ /   \\ V / _\` |/ _\` |/ _\` \\ \\ / /
 | |_| |  __/  __/ |_) | (_| |   <     | | (_| | (_| | (_| |\\ V / 
 |____/ \\___|\\___| .__/ \\__,_|_|\\_\\    |_|\\__,_|\\__,_|\\__,_| \\_/  
                 |_|               DEVOPS & CLOUD INFRASTRUCTURE
`}
        </pre>
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 border-b border-slate-800 pb-2">
          <span className="text-emerald-400 font-semibold">● Session Connected:</span>
          <span>AWS us-east-1 (EKS Prod)</span>
          <span className="text-slate-600">•</span>
          <span>Datadog Agent v7.54 Active</span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-300">Click any tab above or type commands below</span>
        </div>
      </div>
    );
  }

  function renderAbout() {
    return (
      <div className="space-y-3 bg-slate-900/50 border border-slate-800/90 rounded-xl p-4 my-1">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-100">Deepak Yadav</h3>
              <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Active in Production
              </span>
            </div>
            <p className="text-xs text-blue-400 font-medium mt-0.5">
              DevOps Engineer · Zoos Global (Datadog Implementation Partner)
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">📍 Mumbai, Maharashtra, India</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => executeCommand('resume')}
              className="flex items-center gap-1.5 text-xs bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <FaFileAlt size={12} />
              <span>Resume</span>
            </button>
            <button
              onClick={() => executeCommand('contact')}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <FaEnvelope size={12} />
              <span>Contact</span>
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-2">
          <p>
            DevOps Engineer at <span className="text-slate-100 font-semibold">Zoos Global</span> working on AWS infrastructure, Kubernetes/EKS, Terraform automation, and enterprise observability.
          </p>
          <p>
            Hold <span className="text-purple-300 font-semibold">3x Datadog certifications</span> (Fundamentals, Log Management, APM & Distributed Tracing). Prior production software engineering background (React, Node.js, MongoDB) provides strong cross-layer debugging across application microservices and cloud infrastructure.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
          <div className="bg-slate-800/40 border border-slate-700/50 p-2 rounded-lg">
            <span className="text-slate-400 block text-[10px]">Uptime SLA</span>
            <span className="text-emerald-400 font-bold text-sm">99.99%</span>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/50 p-2 rounded-lg">
            <span className="text-slate-400 block text-[10px]">IaC Coverage</span>
            <span className="text-blue-400 font-bold text-sm">100% Terraform</span>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/50 p-2 rounded-lg">
            <span className="text-slate-400 block text-[10px]">Certifications</span>
            <span className="text-purple-400 font-bold text-sm">3x Datadog</span>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/50 p-2 rounded-lg">
            <span className="text-slate-400 block text-[10px]">Ansible Fleet</span>
            <span className="text-amber-400 font-bold text-sm">100+ Nodes</span>
          </div>
        </div>
      </div>
    );
  }

  function renderExperience() {
    const roles = [
      {
        company: 'Zoos Global',
        role: 'DevOps Engineer',
        period: 'June 2026 – Present',
        location: 'Mumbai, India',
        badge: 'Datadog Partner',
        badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        bullets: [
          'Deploy and tune Datadog monitoring (monitors, dashboards, log pipelines) for client environments as a Datadog implementation partner.',
          'Rolled out Datadog agents across Linux fleets using Ansible, replacing manual per-server setup.',
          'Wrote reusable Terraform modules for IAM / EKS / networking and applied them across multiple environments.',
          'Diagnosed EKS failures (ImagePullBackOff, node readiness, IAM and subnet misconfig) and documented fixes for recurring cases.',
          'Traced production incidents across AWS, Kubernetes and application logs, with fixes applied under change control.',
          'Supported CI/CD pipelines (GitHub Actions, GitLab, Jenkins) with Docker, Nginx, SSL/TLS and DNS setup.',
        ],
        tags: ['AWS', 'Kubernetes/EKS', 'Terraform', 'Datadog APM', 'Ansible', 'Linux', 'CI/CD'],
      },
      {
        company: 'Plootus (AI SDR Platform)',
        role: 'Frontend Engineer',
        period: 'April 2025 – June 2026',
        location: 'Remote',
        badge: 'Cloud & SaaS',
        badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        bullets: [
          'Executed a zero-downtime production domain migration from v1.plootus.ai to plootus.ai on AWS Route 53, managing DNS, SSL, CORS, OAuth redirect URIs, and deployment cutover.',
          'Worked on AWS-based deployment workflows alongside Node.js/Express and MongoDB services, supporting production rollouts of customer-facing features.',
          'Integrated Claude and Gemini APIs into campaign and agent management flows, including real-time polling on LLM responses.',
          'Shipped React/Tailwind interfaces for the AI voice-agent platform, including the AI Campaign Management UI.',
        ],
        tags: ['AWS Route 53', 'DNS & SSL', 'Node.js', 'Express', 'React', 'MongoDB', 'AI APIs'],
      },
      {
        company: 'InStat IH',
        role: 'Frontend Developer (titled Elite Projects Analyst)',
        period: 'April 2024 – December 2024',
        location: 'Remote',
        badge: 'Sports Analytics',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        bullets: [
          'Owned frontend development across sports-data product surfaces, building and maintaining responsive React interfaces used in day-to-day analyst workflows.',
          'Collaborated cross-functionally to optimize UI performance and large-scale data presentation.',
        ],
        tags: ['React.js', 'JavaScript', 'State Management', 'REST APIs', 'UI/UX'],
      },
    ];

    return (
      <div className="space-y-3 my-1">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
          <FaBriefcase />
          <span>WORK EXPERIENCE TIMELINE</span>
        </div>

        {roles.map((item, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-slate-100">{item.role}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="font-semibold text-slate-200">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[11px] font-medium bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                  {item.period}
                </span>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed list-disc list-inside">
              {item.bullets.map((b, bi) => (
                <li key={bi} className="text-slate-300">
                  <span className="text-slate-300">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((t, ti) => (
                <span key={ti} className="text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/50 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderProjects() {
    const projects = [
      {
        title: 'AWS EKS Production Platform & Terraform Modules',
        period: 'June 2026 – Present',
        role: 'DevOps Engineer',
        badge: 'Cloud Infrastructure',
        badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        desc: 'Architected reusable Terraform modules for provisioning multi-AZ VPC networking, Amazon EKS clusters, and IAM Roles for Service Accounts (IRSA). Configured AWS ALB ingress controllers and automated SSL/TLS certificate rotation via cert-manager. Diagnosed and resolved recurring EKS issues (ImagePullBackOff, node readiness, IAM/subnet misconfig).',
        tech: ['Terraform', 'AWS EKS', 'Kubernetes', 'Helm', 'VPC / Subnets', 'IAM & IRSA', 'ALB Ingress', 'Cert-Manager'],
      },
      {
        title: 'Enterprise Datadog Observability & APM Suite',
        period: 'June 2026 – Present',
        role: 'Observability Engineer · Zoos Global',
        badge: 'Observability',
        badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        desc: 'Automated Datadog agent rollouts across heterogeneous Linux fleets using Ansible playbooks, replacing manual per-server installations. Configured APM distributed tracing, OpenTelemetry ingestion, custom log pipelines, and anomaly detection monitors. Built real-time SLI/SLO dashboards for production microservices.',
        tech: ['Datadog APM', 'Distributed Tracing', 'Ansible Automation', 'Log Pipelines', 'Linux Fleet', 'CloudWatch', 'SLO / SLI'],
      },
      {
        title: 'Zero-Downtime AWS Route 53 Production Domain Migration',
        period: 'April 2025 – June 2026',
        role: 'DevOps & Infrastructure Lead · Plootus',
        badge: 'Cloud Networking',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        desc: 'Planned and executed a seamless zero-downtime cutover between production domains on AWS Route 53 (v1.plootus.ai to plootus.ai). Managed ACM SSL/TLS termination, automated DNS health checks, CORS policies, OAuth redirect cutover, and deployment workflows with 0 minutes of downtime.',
        tech: ['AWS Route 53', 'ACM SSL/TLS', 'Nginx Reverse Proxy', 'DNS Failover', 'CORS & Security', 'Docker'],
      },
      {
        title: 'Asterisks — Gym Management SaaS',
        period: 'February 2026 – July 2026',
        role: 'Co-founder / Engineering',
        badge: 'Shipped SaaS',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        desc: 'Built and shipped a multi-tenant gym management SaaS (WhatsApp-native, React + C# backend) for small Indian gym owners. Owned end-to-end product architecture, cloud deployment, and hosting decisions on Azure App Service with Azure SQL, integrating the WhatsApp Business Cloud API.',
        tech: ['React.js', 'C# Backend', 'Azure App Service', 'Azure SQL', 'WhatsApp Cloud API', 'Multi-tenant'],
        link: 'https://www.asterisks.app/',
      },
    ];

    return (
      <div className="space-y-3 my-1">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
          <FaProjectDiagram />
          <span>PRODUCTION DEVOPS & CLOUD PROJECTS</span>
        </div>

        {projects.map((p, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                {p.title}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </h4>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                {p.badge}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-slate-300">{p.role}</span>
              <span>•</span>
              <span>{p.period}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {p.tech.map((t, ti) => (
                <span key={ti} className="text-[10px] bg-slate-800/80 text-blue-300/90 border border-slate-700/50 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderSkills() {
    const categories = [
      {
        name: 'Cloud Platforms',
        icon: FaCloud,
        color: 'text-blue-400',
        skills: ['AWS (EKS, EC2, VPC, IAM, S3, Route 53, CloudWatch, RDS, Lambda)', 'GCP', 'Azure'],
      },
      {
        name: 'Containers & Orchestration',
        icon: SiKubernetes,
        color: 'text-indigo-400',
        skills: ['Kubernetes (EKS)', 'Docker', 'Helm', 'Container Security'],
      },
      {
        name: 'Infrastructure as Code & Automation',
        icon: SiTerraform,
        color: 'text-cyan-400',
        skills: ['Terraform (Modules, State, Plan)', 'Ansible Playbooks', 'Bash Scripting'],
      },
      {
        name: 'Observability & Monitoring',
        icon: SiDatadog,
        color: 'text-purple-400',
        skills: ['Datadog APM', 'Distributed Tracing', 'Log Ingestion Pipelines', 'Kibana', 'CloudWatch Metrics', 'SLO/SLI'],
      },
      {
        name: 'CI/CD Pipelines & Version Control',
        icon: FaTools,
        color: 'text-emerald-400',
        skills: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Git Workflows'],
      },
      {
        name: 'Linux & Cloud Networking',
        icon: FaServer,
        color: 'text-amber-400',
        skills: ['Ubuntu / Linux Fleet', 'Nginx Reverse Proxy', 'DNS Management', 'SSL/TLS (Cert-Manager)', 'CORS'],
      },
      {
        name: 'Fullstack Software Engineering',
        icon: FaUser,
        color: 'text-rose-400',
        skills: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      },
    ];

    return (
      <div className="space-y-3 my-1">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-1">
          <FaTools />
          <span>TECHNICAL TOOLBOX & EXPERTISE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2">
                <cat.icon className={`${cat.color} text-sm`} />
                <h4 className="text-xs font-bold text-slate-200">{cat.name}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, si) => (
                  <span key={si} className="text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderCertifications() {
    const certs = [
      {
        title: 'Datadog Fundamentals',
        period: 'July 2026 – July 2029',
        issuer: 'Datadog Partner Network',
        status: 'Active & Verified',
      },
      {
        title: 'Datadog Log Management Fundamentals',
        period: 'August 2026 – August 2029',
        issuer: 'Datadog Partner Network',
        status: 'Active & Verified',
      },
      {
        title: 'Datadog APM and Distributed Tracing Fundamentals',
        period: 'August 2026 – August 2029',
        issuer: 'Datadog Partner Network',
        status: 'Active & Verified',
      },
    ];

    return (
      <div className="space-y-3 my-1">
        <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-1">
          <FaCertificate />
          <span>VERIFIED CLOUD & OBSERVABILITY CERTIFICATIONS</span>
        </div>

        <div className="space-y-2.5">
          {certs.map((c, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3">
              <div className="p-2.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg">
                <SiDatadog size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-slate-100">{c.title}</h4>
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {c.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                  <span className="text-slate-300">{c.issuer}</span>
                  <span>•</span>
                  <span>{c.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderArchitecture() {
    return (
      <div className="space-y-3 bg-slate-900/70 border border-slate-800 rounded-xl p-4 my-1 font-mono text-xs">
        <div className="flex items-center gap-2 text-blue-400 font-bold border-b border-slate-800 pb-2">
          <FaShieldAlt />
          <span>PRODUCTION CLOUD ARCHITECTURE & TRAFFIC FLOW</span>
        </div>

        <pre className="text-cyan-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre p-2 bg-[#080d1a] rounded-lg border border-slate-800/80">
{`
                  [Public Internet Traffic / Users]
                                  │
                                  ▼
               ┌─────────────────────────────────────┐
               │    AWS Route 53 (DNS Management)    │
               │   • Zero-Downtime Migration Cutover │
               │   • Health Checks & Low TTL Failover│
               └──────────────────┬──────────────────┘
                                  │
                                  ▼
               ┌─────────────────────────────────────┐
               │ AWS Application Load Balancer (ALB) │
               │   • AWS Certificate Manager SSL/TLS │
               │   • Security Groups & Path Routing  │
               └──────────────────┬──────────────────┘
                                  │
                                  ▼
               ┌─────────────────────────────────────┐
               │    Nginx Ingress Controller (EKS)   │
               │   • Reverse Proxy & CORS Headers    │
               └──────────────────┬──────────────────┘
                                  │
       ┌──────────────────────────┴──────────────────────────┐
       ▼                                                     ▼
┌─────────────────────────────┐               ┌─────────────────────────────┐
│  React.js Frontend Pods     │               │ Node.js/Express App Pods    │
│  • Auto-scaling Deployment  │               │ • REST APIs & Event Workers │
└──────────────┬──────────────┘               └──────────────┬──────────────┘
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      │
                                      ▼
               ┌─────────────────────────────────────┐
               │ Datadog DaemonSet (All Worker Nodes)│
               │   • APM & Distributed Traces        │
               │   • Microsecond Latency Log Pipeline│
               │   • Ansible-Automated Deployment    │
               └─────────────────────────────────────┘
`}
        </pre>
        <p className="text-[11px] text-slate-400">
          This architecture highlights end-to-end reliability from public DNS routing down to pod-level tracing and log pipelines.
        </p>
      </div>
    );
  }

  function renderResume() {
    return (
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 my-1 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-yellow-400">
          <FaFileAlt />
          <span>RESUME OVERVIEW & DOWNLOAD</span>
        </div>

        <div className="space-y-1 text-xs text-slate-300">
          <p className="font-semibold text-slate-100">Deepak Yadav — DevOps Engineer Resume</p>
          <p className="text-slate-400 text-[11px]">
            Updated with Zoos Global DevOps experience, Datadog certifications, AWS/EKS/Terraform projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href="https://drive.google.com/file/d/1nuYbrD8agtCswq5huyF0sBVFnezWU3K5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <FaExternalLinkAlt size={12} />
            <span>Open in Google Drive</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-lg transition-colors"
          >
            <FaFileAlt size={12} />
            <span>Direct PDF Download</span>
          </a>
        </div>
      </div>
    );
  }

  function renderContact() {
    return (
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 my-1 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
          <FaEnvelope />
          <span>GET IN TOUCH WITH DEEPAK</span>
        </div>

        <p className="text-xs text-slate-400">
          Feel free to reach out for DevOps, Cloud Infrastructure, or SRE roles, collaborations, or tech discussions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <a
            href="mailto:yadavd4631@gmail.com"
            className="flex items-center gap-2.5 p-2.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-slate-200 hover:text-white transition-colors"
          >
            <FaEnvelope className="text-rose-400" />
            <span>yadavd4631@gmail.com</span>
          </a>
          <a
            href="tel:+919320241574"
            className="flex items-center gap-2.5 p-2.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-slate-200 hover:text-white transition-colors"
          >
            <FaPhoneAlt className="text-emerald-400" />
            <span>+91 932 024 1574</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yadavd4631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-slate-200 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/yadavd4631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-slate-200 hover:text-white transition-colors"
          >
            <FaGithub className="text-slate-300" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    );
  }

  function renderKubectl() {
    return (
      <div className="bg-[#080d1a] border border-slate-800 rounded-xl p-3 my-1 font-mono text-xs space-y-2">
        <div className="text-cyan-400 font-bold flex items-center justify-between border-b border-slate-800 pb-1.5">
          <span>KUBERNETES CLUSTER (EKS v1.29.3)</span>
          <span className="text-[10px] text-emerald-400">Context: prod-us-east-1</span>
        </div>

        <div className="overflow-x-auto text-[11px] leading-relaxed">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 border-b border-slate-800">
                <th className="pb-1">NAMESPACE</th>
                <th className="pb-1">NAME</th>
                <th className="pb-1">READY</th>
                <th className="pb-1">STATUS</th>
                <th className="pb-1">RESTARTS</th>
                <th className="pb-1">AGE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              <tr className="text-slate-300">
                <td className="py-1 text-slate-400">production</td>
                <td className="text-slate-200 font-semibold">deepak-portfolio-7f8d69-x9q4</td>
                <td className="text-emerald-400">1/1</td>
                <td><span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Running</span></td>
                <td>0</td>
                <td>28d</td>
              </tr>
              <tr className="text-slate-300">
                <td className="py-1 text-slate-400">production</td>
                <td className="text-slate-200 font-semibold">api-backend-5d6c8b-km7p</td>
                <td className="text-emerald-400">1/1</td>
                <td><span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Running</span></td>
                <td>0</td>
                <td>28d</td>
              </tr>
              <tr className="text-slate-300">
                <td className="py-1 text-slate-400">datadog</td>
                <td className="text-purple-300 font-semibold">datadog-agent-daemonset-j28v</td>
                <td className="text-emerald-400">1/1</td>
                <td><span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Running</span></td>
                <td>0</td>
                <td>45d</td>
              </tr>
              <tr className="text-slate-300">
                <td className="py-1 text-slate-400">ingress-nginx</td>
                <td className="text-blue-300 font-semibold">ingress-nginx-controller-8h2b</td>
                <td className="text-emerald-400">1/1</td>
                <td><span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Running</span></td>
                <td>0</td>
                <td>45d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderDatadog() {
    return (
      <div className="bg-[#080d1a] border border-purple-900/40 rounded-xl p-3 my-1 font-mono text-xs space-y-2">
        <div className="text-purple-400 font-bold flex items-center justify-between border-b border-purple-900/40 pb-1.5">
          <span>DATADOG AGENT STATUS (v7.54.0)</span>
          <span className="text-[10px] text-emerald-400">Zoos Global Implementation Partner</span>
        </div>

        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Agent Health:</span>
            <span className="text-emerald-400 font-semibold">RUNNING (DaemonSet on all nodes)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">APM &amp; Distributed Tracing:</span>
            <span className="text-purple-300 font-semibold">ACTIVE (OpenTelemetry Compliant)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Log Pipeline Latency:</span>
            <span className="text-cyan-400 font-semibold">&lt; 42ms Ingestion Time</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Active Monitors:</span>
            <span className="text-amber-400 font-semibold">24 Real-time Anomaly Alerts</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-400">Official Certifications:</span>
            <span className="text-emerald-400 font-semibold">3/3 Validated (Fundamentals, APM, Logs)</span>
          </div>
        </div>
      </div>
    );
  }

  function renderHelp() {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 my-1 text-xs space-y-2">
        <div className="text-slate-200 font-bold border-b border-slate-800 pb-1">
          AVAILABLE TERMINAL COMMANDS:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <div>
            <button onClick={() => executeCommand('whoami')} className="text-emerald-400 font-semibold hover:underline cursor-pointer">
              • whoami / about
            </button>
            <p className="text-slate-400">Deepak's bio, location &amp; summary</p>
          </div>
          <div>
            <button onClick={() => executeCommand('experience')} className="text-amber-400 font-semibold hover:underline cursor-pointer">
              • experience / exp
            </button>
            <p className="text-slate-400">Zoos Global, Plootus &amp; InStat roles</p>
          </div>
          <div>
            <button onClick={() => executeCommand('projects')} className="text-blue-400 font-semibold hover:underline cursor-pointer">
              • projects / proj
            </button>
            <p className="text-slate-400">EKS IaC, Datadog suite, Route 53 migration</p>
          </div>
          <div>
            <button onClick={() => executeCommand('skills')} className="text-cyan-400 font-semibold hover:underline cursor-pointer">
              • skills / tech
            </button>
            <p className="text-slate-400">Cloud, containers, Terraform, Datadog stack</p>
          </div>
          <div>
            <button onClick={() => executeCommand('certifications')} className="text-purple-400 font-semibold hover:underline cursor-pointer">
              • certifications / certs
            </button>
            <p className="text-slate-400">Verified 3x Datadog certifications</p>
          </div>
          <div>
            <button onClick={() => executeCommand('architecture')} className="text-indigo-400 font-semibold hover:underline cursor-pointer">
              • architecture / arch
            </button>
            <p className="text-slate-400">Full visual cloud infrastructure diagram</p>
          </div>
          <div>
            <button onClick={() => executeCommand('resume')} className="text-yellow-400 font-semibold hover:underline cursor-pointer">
              • resume
            </button>
            <p className="text-slate-400">View &amp; download latest resume</p>
          </div>
          <div>
            <button onClick={() => executeCommand('contact')} className="text-rose-400 font-semibold hover:underline cursor-pointer">
              • contact
            </button>
            <p className="text-slate-400">Direct email, phone, and profile links</p>
          </div>
          <div>
            <button onClick={() => executeCommand('kubectl')} className="text-teal-400 font-semibold hover:underline cursor-pointer">
              • kubectl / pods
            </button>
            <p className="text-slate-400">Kubernetes cluster pods status</p>
          </div>
          <div>
            <button onClick={() => executeCommand('datadog')} className="text-fuchsia-400 font-semibold hover:underline cursor-pointer">
              • datadog / agent
            </button>
            <p className="text-slate-400">Datadog APM &amp; log pipeline telemetry</p>
          </div>
          <div>
            <button onClick={() => executeCommand('clear')} className="text-slate-400 font-semibold hover:underline cursor-pointer">
              • clear
            </button>
            <p className="text-slate-500">Clear terminal screen</p>
          </div>
        </div>
      </div>
    );
  }

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;
    const cmd = raw.toLowerCase();

    if (cmd === 'clear') {
      setEntries([]);
      setInput('');
      return;
    }

    let content: React.ReactNode = null;

    if (cmd === 'whoami' || cmd === 'about' || cmd === 'bio') {
      content = renderAbout();
    } else if (cmd === 'experience' || cmd === 'exp' || cmd === 'work') {
      content = renderExperience();
    } else if (cmd === 'projects' || cmd === 'proj') {
      content = renderProjects();
    } else if (cmd === 'skills' || cmd === 'tech' || cmd === 'stack') {
      content = renderSkills();
    } else if (cmd === 'certifications' || cmd === 'certs' || cmd === 'cert') {
      content = renderCertifications();
    } else if (cmd === 'architecture' || cmd === 'arch' || cmd === 'cloud') {
      content = renderArchitecture();
    } else if (cmd === 'resume' || cmd === 'cv') {
      content = renderResume();
    } else if (cmd === 'contact' || cmd === 'email' || cmd === 'phone') {
      content = renderContact();
    } else if (cmd === 'kubectl' || cmd === 'kubectl get pods' || cmd === 'pods' || cmd === 'k8s') {
      content = renderKubectl();
    } else if (cmd === 'datadog' || cmd === 'datadog status' || cmd === 'dd') {
      content = renderDatadog();
    } else if (cmd === 'help') {
      content = renderHelp();
    } else {
      content = (
        <div className="text-red-400 text-xs py-1">
          zsh: command not found: <span className="font-bold">{raw}</span>. Type{' '}
          <button
            onClick={() => executeCommand('help')}
            className="underline font-semibold text-blue-300 hover:text-white cursor-pointer"
          >
            'help'
          </button>{' '}
          or click any tab above to explore Deepak's details.
        </div>
      );
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `${cmd}-${Date.now()}`,
        command: raw,
        content,
      },
    ]);

    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(cmdHistory[cmdHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = [
        'whoami',
        'about',
        'experience',
        'projects',
        'skills',
        'certifications',
        'architecture',
        'resume',
        'contact',
        'kubectl',
        'datadog',
        'help',
        'clear',
      ];
      const match = available.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const TABS = [
    { label: 'about', cmd: 'whoami', icon: FaUser, color: 'text-emerald-400' },
    { label: 'experience', cmd: 'experience', icon: FaBriefcase, color: 'text-amber-400' },
    { label: 'projects', cmd: 'projects', icon: FaProjectDiagram, color: 'text-blue-400' },
    { label: 'skills', cmd: 'skills', icon: FaTools, color: 'text-cyan-400' },
    { label: 'certs', cmd: 'certifications', icon: FaCertificate, color: 'text-purple-400' },
    { label: 'architecture', cmd: 'architecture', icon: FaShieldAlt, color: 'text-indigo-400' },
    { label: 'resume', cmd: 'resume', icon: FaFileAlt, color: 'text-yellow-400' },
    { label: 'contact', cmd: 'contact', icon: FaEnvelope, color: 'text-rose-400' },
    { label: 'kubectl', cmd: 'kubectl', icon: SiKubernetes, color: 'text-teal-400' },
    { label: 'datadog', cmd: 'datadog', icon: SiDatadog, color: 'text-fuchsia-400' },
  ];

  return (
    <motion.div
      className={`mx-auto w-full transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 p-2 sm:p-4 bg-black/90 backdrop-blur-xl flex flex-col'
          : 'max-w-3xl md:px-4 px-4 mt-8'
      }`}
      initial={{ filter: 'blur(10px)', y: 20 }}
      animate={{ filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Terminal Container */}
      <div
        className={`bg-[#060a12] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs ${
          isFullscreen ? 'flex-1 h-full' : 'h-[640px]'
        }`}
      >
        {/* Title bar */}
        <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => executeCommand('clear')}
              title="Clear terminal"
              className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title="Toggle size"
              className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <button
              onClick={() => executeCommand('help')}
              title="Help"
              className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <span className="text-slate-400 text-xs font-semibold ml-2 hidden sm:inline">
              deepak@aws-eks-cluster: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE</span>
            </span>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <FaCompress size={13} /> : <FaExpand size={13} />}
            </button>
          </div>
        </div>

        {/* Command Navigation Tabs */}
        <div className="bg-slate-900/50 px-3 py-2 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold whitespace-nowrap mr-1">
            Browse:
          </span>
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => executeCommand(tab.cmd)}
              className="group flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/50 hover:border-blue-400/50 transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              <tab.icon className={`${tab.color} text-[11px] group-hover:scale-110 transition-transform`} />
              <span>{tab.label}</span>
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-slate-850 hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-500/30 transition-all whitespace-nowrap cursor-pointer ml-auto"
            title="Clear Screen"
          >
            <FaTrash size={10} />
            <span className="hidden sm:inline">clear</span>
          </button>
        </div>

        {/* Scrollable Terminal Screen */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 leading-relaxed text-slate-300 cursor-text select-text"
        >
          {entries.map((entry) => (
            <div key={entry.id} className="space-y-1">
              {entry.command !== 'system-init' && (
                <div className="flex items-center gap-2 text-slate-200 font-semibold pt-1">
                  <span className="text-emerald-400">deepak@aws-eks:~$</span>
                  <span className="text-cyan-300 font-bold">{entry.command}</span>
                </div>
              )}
              <div className="pl-1 sm:pl-2">{entry.content}</div>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 pt-2 text-slate-200">
            <span className="text-emerald-400 font-semibold">deepak@aws-eks:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'about', 'skills', 'experience', 'projects', 'certs', 'resume', 'help'..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs focus:ring-0"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </motion.div>
  );
}
