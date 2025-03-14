'use client';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    href: 'https://x.com/yadavd4631',
    icon: <FaTwitter />,
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/yadavd4631',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:yadavd4631@gmail.com',
    icon: <FaEnvelope />,
    label: 'Email',
  },
];

export default function Contact() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-8]"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100">Reach out to me.</h2>
      <p className="text-base tracking-tight">
        Feel free to reach out to me via email, LinkedIn, or Twitter for any
        queries, collaboration opportunities, or further details.
      </p>
      <div className="mt-4 mb-4">
        <div className="mt-4 flex flex-wrap gap-4">
          {contactMethods.map((method, index) => (
            <Link legacyBehavior key={index} href={method.href} passHref>
              <a
                className="bg-slate-100 text-slate-800 p-2 border rounded shadow text-sm font-semibold flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.icon}
                <span className="ml-2">{method.label}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
