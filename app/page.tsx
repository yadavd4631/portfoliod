import IntroScreen from '@/components/IntroScreen';
import SystemStatus from '@/components/SystemStatus';
import AboutSection from '@/components/about-section';
import DevOpsMetrics from '@/components/DevOpsMetrics';
import DevOpsTerminal from '@/components/DevOpsTerminal';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <IntroScreen />
      <div className="flex flex-col mt-4 w-full text-slate-300 mx-auto overflow-hidden">
        <SystemStatus />
        <AboutSection />
        <DevOpsMetrics />
        <DevOpsTerminal />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
