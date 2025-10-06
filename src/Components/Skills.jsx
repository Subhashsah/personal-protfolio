import React, { useMemo } from 'react';
import SKILLS from '../data/skills';

function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div style={{ width: `${value}%` }} className="h-full rounded-full bg-cyan-900 transition-all duration-300" />
    </div>
  );
}

export default function Skills() {
  // useMemo to compute topSkills only when SKILLS changes
  const topSkills = useMemo(() => {
    const all = [...SKILLS.frontend, ...SKILLS.backend];
    return all.sort((a, b) => b.level - a.level).slice(0, 6);
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Frontend</h3>
          {SKILLS.frontend.map(s => (
            <div key={s.name} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span>{s.name}</span><span>{s.level}%</span></div>
              <ProgressBar value={s.level} />
            </div>
          ))}
        </div>

        <div className="bg-card p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Backend</h3>
          {SKILLS.backend.map(s => (
            <div key={s.name} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span>{s.name}</span><span>{s.level}%</span></div>
              <ProgressBar value={s.level} />
            </div>
          ))}
        </div>

        <div className="bg-card p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Problem Solving</h3>
          <p className="text-sm mb-3">80 problems solved across platforms</p>
          {SKILLS.problemSolving.map(p => (
            <div key={p.platform} className="mb-2 text-sm">{p.platform}: {p.solved} solved</div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-card p-4 rounded-xl">
        <h4 className="font-semibold">Top Skills</h4>
        <div className="flex gap-3 mt-3 flex-wrap">
          {topSkills.map(s => (
            <div key={s.name} className="px-3 py-2 border rounded">{s.name} — {s.level}%</div>
          ))}
        </div>
      </div>
    </section>
  );
}