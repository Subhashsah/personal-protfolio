import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import DsaSection from '../Components/DsaSection';
import ProjectsPreview from '../Components/ProjectsPreview';
import Contact from '../Components/Contact';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <ProjectsPreview />
      <DsaSection />
      <Contact />
    </div>
  );
}