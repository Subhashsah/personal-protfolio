import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Subhash — Full-stack Developer</h1>
          <p className="text-lg text-muted mb-6">I build accessible, performant web apps. Frontend focused with strong backend skills and data-structures problem solving (80+ solved problems).</p>
          <div className="flex gap-4">
            <Link to="/projects" className="px-4 py-2 rounded-xl border hover:bg-slate-500">View Projects</Link>
            <a href="#contact" className="px-4 py-2 rounded-xl  border hover:bg-slate-500">Contact</a>
          </div>
        </div>
        <div className="p-6 bg-card rounded-2xl shadow-lg">
          <p className="text-3xl font-normal">Featured Stack</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="px-3 py-1 rounded-md border">React</span>
            <span className="px-3 py-1 rounded-md border">Node.js</span>
            <span className="px-3 py-1 rounded-md border">MongoDB</span>
            <span className="px-3 py-1 rounded-md border">Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
}