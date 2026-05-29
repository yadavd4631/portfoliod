import IntroScreen from '@/components/IntroScreen';
import AboutSection from '@/components/about-section';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <IntroScreen />
      <div className="flex flex-col mt-10 w-full text-slate-300 mx-auto overflow-hidden">
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
