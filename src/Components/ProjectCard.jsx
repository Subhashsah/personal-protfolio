import React from 'react';
import { motion } from 'framer-motion';
const stackColors = {
  'React': 'bg-blue-100 text-blue-700 border-blue-200',
  'Node.js': 'bg-green-100 text-green-700 border-green-200',
  'Express': 'bg-gray-100 text-gray-700 border-gray-200',
  'MongoDB': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'MySQL': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  // Add more as needed
};
export default function ProjectCard({ project }) {
  return (
    <motion.article layout whileHover={{ scale: 1.02 }} className="bg-gray-400 p-4 rounded-2xl shadow">
      <img src={project.screenshot} alt={project.title} className="h-40 w-full object-cover rounded-lg mb-3" />
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-muted my-2">{project.description}</p>
      <div className="flex gap-2 flex-wrap mb-2">
        {project.stack.map(s => (
          <span key={s} className="text-xs px-2 py-1 rounded border">{s}</span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
        <a href={project.demo} className="text-sm">Demo</a>
      </div>
    </motion.article>
  );
}