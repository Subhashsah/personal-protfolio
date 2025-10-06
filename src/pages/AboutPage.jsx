import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="bg-card p-6 rounded-xl">
        <p className="mb-4">I am a Full-stack developer with a focus on creating performant, accessible UIs using React and Tailwind. My backend experience uses Node.js and Express with both MongoDB and SQL databases. I enjoy algorithmic problem solving (80+ problems solved) and building projects that solve real user needs.</p>

        <h3 className="font-semibold mt-4">Learning Journey</h3>
        <p className="mb-4">I started with HTML/CSS and progressively picked up JavaScript, React, and backend engineering. I invest time on DSA to keep problem-solving sharp and design systems with clean interfaces and clear separation of concerns.</p>

        <h3 className="font-semibold mt-4">Problem Solving Approach</h3>
        <ol className="list-decimal ml-5">
          <li>Understand requirements and constraints.</li>
          <li>Sketch a plan and pick data structures.</li>
          <li>Write clean, tested code and optimize where necessary.</li>
        </ol>
      </div>
    </main>
  );
}