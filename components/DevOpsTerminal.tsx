'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscTerminal } from 'react-icons/vsc';

interface OutputLine {
  type: 'cmd' | 'output' | 'error' | 'success';
  text: string;
}

const COMMAND_OUTPUTS: Record<string, OutputLine[]> = {
  'kubectl get nodes': [
    { type: 'output', text: 'NAME                          STATUS   ROLES    AGE   VERSION' },
    { type: 'success', text: 'ip-10-0-1-42.ec2.internal     Ready    node     38d   v1.29.3-eks' },
    { type: 'success', text: 'ip-10-0-2-88.ec2.internal     Ready    node     38d   v1.29.3-eks' },
    { type: 'success', text: 'ip-10-0-3-19.ec2.internal     Ready    node     38d   v1.29.3-eks' },
  ],
  'datadog status': [
    { type: 'output', text: '==================================================' },
    { type: 'output', text: 'Datadog Agent v7.54 (Zoos Global Partner Tier)' },
    { type: 'output', text: '==================================================' },
    { type: 'success', text: '✓ Status: RUNNING (Linux Fleet via Ansible)' },
    { type: 'success', text: '✓ APM & Distributed Tracing: ACTIVE' },
    { type: 'success', text: '✓ Log Pipelines: Healthy (Ingestion Latency < 45ms)' },
    { type: 'success', text: '✓ Certifications: 3/3 Validated (Fundamentals, Logs, APM)' },
  ],
  'terraform plan': [
    { type: 'output', text: 'Refreshing Terraform state in-memory prior to plan...' },
    { type: 'output', text: '  module.vpc.aws_vpc.main: Refreshing state... [id=vpc-082f4bc]' },
    { type: 'output', text: '  module.eks.aws_eks_cluster.prod: Refreshing state... [id=prod-eks]' },
    { type: 'output', text: '  module.iam.aws_iam_role.irsa: Refreshing state... [id=irsa-role]' },
    { type: 'success', text: 'No changes. Your infrastructure matches the configuration.' },
  ],
  'cat architecture': [
    { type: 'output', text: '[Route 53 DNS] ──> [AWS ALB (SSL/TLS)] ──> [Nginx Ingress Controller]' },
    { type: 'output', text: '                                                  │' },
    { type: 'output', text: '                      ┌───────────────────────────┴───────────────────────────┐' },
    { type: 'output', text: '                      ▼                                                       ▼' },
    { type: 'output', text: '              [Node.js / Express Pods]                               [React Frontend Pods]' },
    { type: 'output', text: '                      │                                                       │' },
    { type: 'output', text: '                      └───────────────────────────┬───────────────────────────┘' },
    { type: 'output', text: '                                                  ▼' },
    { type: 'success', text: '                            [Datadog DaemonSet (APM + Distributed Tracing)]' },
  ],
  help: [
    { type: 'output', text: 'Available interactive commands:' },
    { type: 'output', text: '  • kubectl get nodes    - List active Kubernetes EKS worker nodes' },
    { type: 'output', text: '  • datadog status       - Check observability agent & active certs' },
    { type: 'output', text: '  • terraform plan       - Inspect IaC deployment state' },
    { type: 'output', text: '  • cat architecture     - Print production cloud routing architecture' },
    { type: 'output', text: '  • clear                - Clear the terminal' },
  ],
};

const SUGGESTIONS = [
  'kubectl get nodes',
  'datadog status',
  'terraform plan',
  'cat architecture',
  'help',
];

export default function DevOpsTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([
    { type: 'cmd', text: 'kubectl get nodes' },
    ...COMMAND_OUTPUTS['kubectl get nodes'],
  ]);
  const [input, setInput] = useState('');
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
        text: `zsh: command not found: ${trimmed}. Type 'help' to see available commands.`,
      });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
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
            Interactive Cloud Terminal
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400">eks-cluster-prod</span>
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
          <span className="text-slate-400 text-[11px] font-mono">deepak@aws-eks: ~ (bash)</span>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            AWS us-east-1
          </span>
        </div>

        {/* Quick action chips */}
        <div className="bg-slate-900/40 px-4 py-2 border-b border-slate-800/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] text-slate-500 whitespace-nowrap mr-1">Quick Run:</span>
          {SUGGESTIONS.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700/80 text-blue-300 hover:text-white border border-slate-700/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              {cmd}
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="text-[11px] px-2 py-0.5 rounded bg-slate-800/40 hover:bg-slate-700/60 text-slate-400 hover:text-white border border-slate-800 transition-colors whitespace-nowrap cursor-pointer ml-auto"
          >
            clear
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-4 max-h-72 min-h-48 overflow-y-auto space-y-1.5 leading-relaxed text-slate-300">
          {history.map((line, index) => {
            if (line.type === 'cmd') {
              return (
                <div key={index} className="flex items-center gap-2 text-slate-200 font-semibold pt-1">
                  <span className="text-emerald-400">deepak@aws-eks:~$</span>
                  <span>{line.text}</span>
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
            return (
              <div key={index} className="text-slate-400 pl-4 whitespace-pre-wrap">
                {line.text}
              </div>
            );
          })}

          {/* Prompt line */}
          <div className="flex items-center gap-2 pt-1 text-slate-200">
            <span className="text-emerald-400">deepak@aws-eks:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or click quick buttons..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </motion.div>
  );
}
