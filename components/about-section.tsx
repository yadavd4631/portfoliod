'use client';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yadavd4631",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/yadavd4631",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/yadavd4631",
    icon: FaTwitterSquare,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/10jxbcwCZwRP8x1yDInqVzLbVi0L9bkv0/view?usp=sharing",
    icon: FaFileAlt,
  },
];

export default function AboutSection() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 pt-12 relative"
      initial={{ filter: "blur(10px)", y: 20, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
            Hi, I'm Deepak 👋
          </h1>
          <p className="text-slate-400 font-medium">Frontend Engineer</p>
        </div>
        
        <div className="text-base flex items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex gap-4">
              {Socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="group relative flex items-center text-slate-300 hover:text-white transition-colors">
                    <social.icon
                      size={22}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-white text-black text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <span className="hidden md:block text-slate-700">|</span>
            <a
              href="mailto:yadavd4631@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
              target="_blank"
            >
              yadavd4631@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col">
        <h2 className="text-xl text-slate-100 mb-4 font-semibold tracking-tight">About Me.</h2>
        <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-slate-400">
          <p>
            I'm a Frontend Engineer currently building production AI-integrated SaaS at{" "}
            <span className="text-slate-200 font-medium">Plootus</span> — an AI
            voice agent platform for SDR teams.
          </p>
          <p>
            I specialize in crafting beautiful, high-performance interfaces using React, Tailwind CSS, and Framer Motion. I'm also highly comfortable extending into the backend — designing REST APIs, modeling data in MongoDB, and deploying infrastructure on AWS. I enjoy taking ownership of features from Technical Requirement Documents (TRDs) all the way to production.
          </p>
          <p>
            I am actively looking for new opportunities where I can contribute
            my skills, build innovative products, and grow professionally.{" "}
            <a
              href="mailto:yadavd4631@gmail.com"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
            >
              Contact me
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
