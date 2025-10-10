import { useMemo } from 'react';
import PROJECTS from '../data/projects';

// hook returns projects (filtered/sorted) and memoizes heavy computations
export default function useProjects(filter = null) {
  const projects = useMemo(() => {
    // pretend heavy computation (e.g. sorting by popularity)
    let arr = [...PROJECTS];
    if (filter) {
      arr = arr.filter(p => p.tags.includes(filter));
    }
    // compute score for sorting (demo)
    return arr.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  }, [filter]);

  return projects;
}