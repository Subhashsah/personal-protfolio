import React, { useState, useMemo } from 'react';

import { motion } from 'framer-motion';
import useProjects from '../hooks/useProject';
import ProjectCard from '../Components/ProjectCard';

export default function ProjectsPage() {
  const [filter, setFilter] = useState(null);
  const projects = useProjects(filter);

  // memoize tags for filter UI
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach(p => p.tags.forEach(t => set.add(t)));
    return [...set];
  }, [projects]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="mb-4 flex gap-2">
        <button className="px-3 py-1 rounded border" onClick={() => setFilter(null)}>All</button>
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} className="px-3 py-1 rounded border">{t}</button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </main>
  );
}