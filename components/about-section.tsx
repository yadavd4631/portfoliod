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
      className="mx-auto max-w-2xl md:px-4 px-8"
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-xl font-semibold text-slate-200">
          Hi, I'm Deepak 👋
        </h1>
        <div className="text-base flex items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex gap-4">
              {Socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="group relative flex items-center text-slate-100">
                    <social.icon
                      size={20}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-white text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <a
              href="mailto:yadavd4631@gmail.com"
              className="transition-colors duration-300 flex items-center gap-2 hover:text-white"
              target="_blank"
            >
              <span className="transition-transform duration-300 text-slate-300 hover:text-white text-sm">
                yadavd4631@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col ">
        <h2 className="text-xl text-slate-100 mb-4 font-semibold tracking-tight">About Me.</h2>
        <ul className="mt-2 flex flex-col gap-3 list-disc list-inside text-base tracking-tight text-slate-300">
          <li>
            Frontend engineer building production AI-integrated SaaS at{" "}
            <span className="text-slate-100 font-medium">Plootus</span> — an AI
            voice agent platform for SDR teams. I ship customer-facing surfaces
            in React, Tailwind, and Framer Motion, with hands-on integration of
            Claude and Gemini APIs into campaign and agent management flows.
          </li>
          <li>
            Comfortable extending into backend work — REST API design, MongoDB
            data modeling, and AWS deployment. I also author TRDs to align
            engineering before implementation. Early team member experienced in
            fast-moving startup environments with direct founder, PM, and
            senior-engineer collaboration.
          </li>
          <li>
            Previously, I worked as a{" "}
            <span className="text-slate-100 font-medium">
              Frontend Developer at InStat IH
            </span>{" "}
            (04/2024 – 12/2024), owning frontend development across sports-data
            product surfaces, building and maintaining responsive React
            interfaces used in day-to-day analyst workflows.
          </li>
          <li>
            I am actively looking for new opportunities where I can contribute
            my skills, build innovative products, and grow professionally.{" "}
            <a
              href="mailto:yadavd4631@gmail.com"
              className="text-slate-100 hover:text-blue-300 underline"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
