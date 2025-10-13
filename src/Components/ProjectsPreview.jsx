import React from 'react';
import PROJECTS from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsPreview() {
  const preview = PROJECTS.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {preview.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
      <div className="mt-4">
        <a href="/projects" className="underline">View all projects</a>
      </div>
    </section>
  );
}