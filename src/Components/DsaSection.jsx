import React, { useEffect, useState } from 'react';

export default function DsaSection() {
  const [stats, setStats] = useState({ total: 80, solved: 80, platforms: ['LeetCode', 'CodeStudio', 'HackerRank'] });

  // simulate fetching latest counts (could call an API to fetch public profile stats)
  useEffect(() => {
    let mounted = true;
    // pretend fetch
    setTimeout(() => {
      if (mounted) {
        setStats(prev => ({ ...prev }));
      }
    }, 400);
    return () => { mounted = false; };
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-xl">
          <div className="text-4xl font-bold">{stats.solved}</div>
          <div className="text-sm text-muted">Problems solved</div>
        </div>
        <div className="bg-card p-4 rounded-xl">
          <div className="font-semibold">Platforms</div>
          <ul className="mt-2 text-sm">
            {stats.platforms.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="bg-card p-4 rounded-xl">
          <div className="font-semibold">Approach</div>
          <p className="text-sm mt-2">I focus on clarity, algorithmic complexity, and clean implementations. I track problems across platforms and solve targeted topics (graphs, DP, trees).</p>
        </div>
      </div>
    </section>
  );
}