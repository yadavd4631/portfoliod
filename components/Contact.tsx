'use client';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    href: 'https://x.com/yadavd4631',
    icon: <FaTwitter size={18} />,
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/yadavd4631',
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:yadavd4631@gmail.com',
    icon: <FaEnvelope size={18} />,
    label: 'Email',
  },
];

export default function Contact() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-12 mb-24"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100 mb-3 font-semibold tracking-tight">Reach out to me.</h2>
      <p className="text-slate-400 leading-relaxed text-sm">
        Feel free to reach out to me via email, LinkedIn, or Twitter for any
        queries, collaboration opportunities, or further details.
      </p>
      
      <div className="mt-6 flex flex-wrap gap-4">
        {contactMethods.map((method, index) => (
          <Link legacyBehavior key={index} href={method.href} passHref>
            <a
              className="group flex items-center gap-2.5 bg-slate-800/40 border border-slate-700/50 text-slate-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                {method.icon}
              </span>
              <span>{method.label}</span>
            </a>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
