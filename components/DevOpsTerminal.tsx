'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaFileAlt,
  FaTrash,
} from 'react-icons/fa';
import { SiKubernetes, SiDatadog } from 'react-icons/si';
import { VscTerminal } from 'react-icons/vsc';

interface OutputLine {
  type: 'cmd' | 'output' | 'error' | 'success' | 'highlight' | 'link';
  text: string;
  href?: string;
}

const COMMAND_OUTPUTS: Record<string, OutputLine[]> = {
  whoami: [
    { type: 'highlight', text: '═══ DEEPAK YADAV ═══' },
    { type: 'success', text: '• Role:        DevOps Engineer' },
    { type: 'output', text: '• Company:     Zoos Global (Datadog Implementation Partner)' },
    { type: 'output', text: '• Location:    Mumbai, Maharashtra, India' },
    { type: 'output', text: '• Core Stack:  AWS (EKS, VPC, Route 53) · Kubernetes · Terraform · Datadog APM & Logs' },
    { type: 'output', text: '• Background:  Production Fullstack & Frontend (React, Node.js, MongoDB)' },
    { type: 'output', text: '• Focus:       Bridging software engineering & cloud infra for rapid debugging & high reliability' },
    { type: 'highlight', text: '• Status:      Open to DevOps / Cloud / SRE Engineer opportunities' },
  ],
  skills: [
    { type: 'highlight', text: '═══ TECHNICAL TOOLBOX ═══' },
    { type: 'success', text: '• Cloud Platforms:  AWS (EC2, VPC, IAM, S3, Route 53, EKS, CloudWatch, Lambda, RDS) · GCP · Azure' },
    { type: 'success', text: '• Containers:       Kubernetes (EKS) · Docker · Helm' },
    { type: 'success', text: '• IaC & Automation: Terraform · Ansible Playbooks · Bash Scripting' },
    { type: 'success', text: '• Observability:    Datadog (APM, Logs, Metrics, Monitors, Dashboards) · Kibana' },
    { type: 'output', text: '• CI/CD:            GitHub Actions · GitLab CI/CD · Jenkins' },
    { type: 'output', text: '• Networking/Linux: Ubuntu · Nginx · DNS · SSL/TLS · CORS' },
    { type: 'output', text: '• Software Dev:     JavaScript · Node.js · Express.js · React.js · MongoDB' },
  ],
  experience: [
    { type: 'highlight', text: '═══ WORK EXPERIENCE ═══' },
    { type: 'success', text: '[1] Zoos Global — DevOps Engineer (June 2026 – Present)' },
    { type: 'output', text: '    • Deployed & tuned Datadog monitoring (monitors, dashboards, log pipelines) for client fleets.' },
    { type: 'output', text: '    • Automated Datadog agent rollouts across Linux servers using Ansible.' },
    { type: 'output', text: '    • Authored reusable Terraform modules for IAM / EKS / networking across environments.' },
    { type: 'output', text: '    • Diagnosed EKS production failures (ImagePullBackOff, node readiness, IAM/subnet misconfig).' },
    { type: 'output', text: '    • Traced production incidents across AWS, K8s, and app logs with change control fixes.' },
    { type: 'success', text: '[2] Plootus (AI SDR Platform) — Frontend Engineer (April 2025 – June 2026)' },
    { type: 'output', text: '    • Executed zero-downtime domain migration on AWS Route 53 with SSL/TLS, DNS & OAuth cutover.' },
    { type: 'output', text: '    • Supported AWS deployment workflows alongside Node.js/MongoDB microservices.' },
    { type: 'output', text: '    • Shipped AI Campaign Management UI with LLM polling (Claude & Gemini API).' },
    { type: 'success', text: '[3] InStat IH — Frontend Developer / Elite Projects Analyst (April 2024 – Dec 2024)' },
    { type: 'output', text: '    • Owned frontend development across sports-data product surfaces with responsive React UI.' },
  ],
  certifications: [
    { type: 'highlight', text: '═══ VERIFIED DATADOG CERTIFICATIONS ═══' },
    { type: 'success', text: '✓ Datadog Fundamentals                         [July 2026 – July 2029]' },
    { type: 'success', text: '✓ Datadog Log Management Fundamentals          [August 2026 – August 2029]' },
    { type: 'success', text: '✓ Datadog APM & Distributed Tracing Fundamentals [August 2026 – August 2029]' },
    { type: 'output', text: 'Status: All 3 certifications active & validated on Datadog partner tier.' },
  ],
  'kubectl get pods': [
    { type: 'output', text: 'NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE' },
    { type: 'success', text: 'production    portfolio-frontend-7f8d69-x9q4     1/1     Running   0          24d' },
    { type: 'success', text: 'production    api-service-5d6c8b-km7p            1/1     Running   0          24d' },
    { type: 'success', text: 'datadog       datadog-agent-daemonset-j28v       1/1     Running   0          42d' },
    { type: 'success', text: 'ingress-nginx ingress-nginx-controller-8h2b       1/1     Running   0          42d' },
    { type: 'highlight', text: 'All pods healthy (100% Ready, 0 restarts across 3 EKS worker nodes)' },
  ],
  'datadog status': [
    { type: 'output', text: '==================================================' },
    { type: 'highlight', text: 'Datadog Agent v7.54.0 (Zoos Global Implementation Partner)' },
    { type: 'output', text: '==================================================' },
    { type: 'success', text: '✓ Agent Status: RUNNING (Linux Fleet via Ansible)' },
    { type: 'success', text: '✓ APM & Distributed Tracing: ACTIVE (OpenTelemetry integrated)' },
    { type: 'success', text: '✓ Log Pipelines: 100% operational (Latency < 45ms)' },
    { type: 'success', text: '✓ Anomaly Monitors: 24 active monitors configured' },
    { type: 'success', text: '✓ Validated Certifications: 3/3 (Fundamentals, APM Tracing, Log Mgmt)' },
  ],
  contact: [
    { type: 'highlight', text: '═══ CONTACT DEEPAK ═══' },
    { type: 'success', text: '• Email:    yadavd4631@gmail.com' },
    { type: 'output', text: '• Phone:    +91 932 024 1574' },
    { type: 'output', text: '• LinkedIn: https://www.linkedin.com/in/yadavd4631' },
    { type: 'output', text: '• GitHub:   https://github.com/yadavd4631' },
    { type: 'output', text: '• Twitter:  https://x.com/yadavd4631' },
    {
      type: 'link',
      text: '📄 Open Resume (Google Drive)',
      href: 'https://drive.google.com/file/d/1nuYbrD8agtCswq5huyF0sBVFnezWU3K5/view?usp=sharing',
    },
  ],
  resume: [
    { type: 'highlight', text: '═══ DEEPAK YADAV RESUME ═══' },
    { type: 'output', text: 'DevOps Engineer · AWS · Kubernetes/EKS · Terraform · Datadog' },
    { type: 'success', text: 'Latest resume is linked and ready to view:' },
    {
      type: 'link',
      text: '➜ Click here to view Resume on Google Drive',
      href: 'https://drive.google.com/file/d/1nuYbrD8agtCswq5huyF0sBVFnezWU3K5/view?usp=sharing',
    },
  ],
  help: [
    { type: 'highlight', text: '═══ AVAILABLE COMMANDS ═══' },
    { type: 'output', text: '  • whoami           - View Deepak\'s bio, background & role summary' },
    { type: 'output', text: '  • skills           - List cloud, DevOps, container & coding skills' },
    { type: 'output', text: '  • experience       - Print professional DevOps & engineering roles' },
    { type: 'output', text: '  • certifications   - View verified Datadog certifications' },
    { type: 'output', text: '  • kubectl get pods - Inspect mock production Kubernetes pods' },
    { type: 'output', text: '  • datadog status   - Check observability metrics & agent status' },
    { type: 'output', text: '  • contact          - Get direct email, phone, and profile links' },
    { type: 'output', text: '  • resume           - Access latest resume link' },
    { type: 'output', text: '  • clear            - Clear terminal screen' },
  ],
};

// Aliases for user convenience
COMMAND_OUTPUTS['about'] = COMMAND_OUTPUTS['whoami'];
COMMAND_OUTPUTS['cat about'] = COMMAND_OUTPUTS['whoami'];
COMMAND_OUTPUTS['cat whoami'] = COMMAND_OUTPUTS['whoami'];
COMMAND_OUTPUTS['cat skills'] = COMMAND_OUTPUTS['skills'];
COMMAND_OUTPUTS['cat experience'] = COMMAND_OUTPUTS['experience'];
COMMAND_OUTPUTS['cat certs'] = COMMAND_OUTPUTS['certifications'];
COMMAND_OUTPUTS['certs'] = COMMAND_OUTPUTS['certifications'];
COMMAND_OUTPUTS['kubectl'] = COMMAND_OUTPUTS['kubectl get pods'];
COMMAND_OUTPUTS['datadog'] = COMMAND_OUTPUTS['datadog status'];

const ACTION_BUTTONS = [
  { label: 'whoami', cmd: 'whoami', icon: FaUser, color: 'text-emerald-400' },
  { label: 'skills', cmd: 'skills', icon: FaTools, color: 'text-blue-400' },
  { label: 'experience', cmd: 'experience', icon: FaBriefcase, color: 'text-amber-400' },
  { label: 'certifications', cmd: 'certifications', icon: FaCertificate, color: 'text-purple-400' },
  { label: 'kubectl', cmd: 'kubectl get pods', icon: SiKubernetes, color: 'text-cyan-400' },
  { label: 'datadog', cmd: 'datadog status', icon: SiDatadog, color: 'text-fuchsia-400' },
  { label: 'contact', cmd: 'contact', icon: FaEnvelope, color: 'text-rose-400' },
  { label: 'resume', cmd: 'resume', icon: FaFileAlt, color: 'text-yellow-400' },
];

export default function DevOpsTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([
    { type: 'highlight', text: '✨ Welcome to Deepak Yadav\'s Cloud & DevOps Terminal' },
    { type: 'output', text: 'Type a command below or click any of the action buttons above:' },
    { type: 'cmd', text: 'whoami' },
    ...COMMAND_OUTPUTS['whoami'],
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = COMMAND_OUTPUTS[trimmed];
    const newLines: OutputLine[] = [{ type: 'cmd', text: cmdStr }];

    if (output) {
      newLines.push(...output);
    } else {
      newLines.push({
        type: 'error',
        text: `zsh: command not found: '${trimmed}'. Type 'help' to see valid commands.`,
      });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setCmdHistory((prev) => [...prev, cmdStr]);
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
    }
  };

  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12"
      initial={{ filter: 'blur(10px)', y: 20 }}
      animate={{ filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <VscTerminal className="text-blue-400" size={18} />
          <h2 className="text-sm font-semibold tracking-wide text-slate-200">
            Interactive DevOps Terminal
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400">deepak@aws-eks-prod</span>
        </div>
      </div>

      {/* Terminal Window */}
      <div className="bg-[#0b0f19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
        {/* Title bar */}
        <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-slate-400 text-[11px] font-mono">
            deepak@aws-eks-cluster: ~ (bash)
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            AWS us-east-1
          </span>
        </div>

        {/* Clickable Action Chips */}
        <div className="bg-slate-900/60 px-3 py-2.5 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold whitespace-nowrap mr-1">
            Click to run:
          </span>
          {ACTION_BUTTONS.map((item) => (
            <button
              key={item.label}
              onClick={() => executeCommand(item.cmd)}
              className="group flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/50 hover:border-blue-400/50 transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              <item.icon className={`${item.color} text-[11px] group-hover:scale-110 transition-transform`} />
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            title="Clear terminal"
            className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-slate-800/40 hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-500/30 transition-all whitespace-nowrap cursor-pointer ml-auto"
          >
            <FaTrash size={10} />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 max-h-80 min-h-56 overflow-y-auto space-y-2 leading-relaxed text-slate-300">
          {history.map((line, index) => {
            if (line.type === 'cmd') {
              return (
                <div key={index} className="flex items-center gap-2 text-slate-200 font-semibold pt-1">
                  <span className="text-emerald-400">deepak@aws-eks:~$</span>
                  <span className="text-cyan-300">{line.text}</span>
                </div>
              );
            }
            if (line.type === 'highlight') {
              return (
                <div key={index} className="text-blue-300 font-semibold pl-4 whitespace-pre-wrap">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'success') {
              return (
                <div key={index} className="text-emerald-300 pl-4 whitespace-pre-wrap">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={index} className="text-red-400 pl-4 whitespace-pre-wrap">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'link') {
              return (
                <div key={index} className="pl-4 pt-1">
                  <a
                    href={line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold transition-colors"
                  >
                    {line.text}
                  </a>
                </div>
              );
            }
            return (
              <div key={index} className="text-slate-400 pl-4 whitespace-pre-wrap">
                {line.text}
              </div>
            );
          })}

          {/* Interactive input line */}
          <div className="flex items-center gap-2 pt-2 text-slate-200">
            <span className="text-emerald-400 font-semibold">deepak@aws-eks:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'whoami', 'skills', 'experience', 'help'..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs focus:ring-0"
              autoFocus={false}
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </motion.div>
  );
}
