import cycles from '../data/cycles.json';
import artifacts from '../data/artifacts.json';

export type Artifact = {
  id: string;
  title: string;
  summary: string;
  medium: 'text' | 'audio' | 'visual' | 'hybrid';
  cycleId: string;
  status: 'draft' | 'live' | 'archived' | 'active';
  coordinates: [number, number];
  kind?: string;
  provenance?: string;
};

const artifactSeed: Artifact[] = artifacts as Artifact[];

export const codexTimeline = (cycles as Array<{ id: string; title: string; mantra: string; artifacts: number }>).map((cycle) => ({
  ...cycle,
  artifacts: artifactSeed.filter((artifact) => artifact.cycleId === cycle.id),
}));

export function getArtifactsByCycle(cycleId: string): Artifact[] {
  return artifactSeed.filter((artifact) => artifact.cycleId === cycleId);
}

export function getPrimeArtifacts(limit = 3): Artifact[] {
  return artifactSeed
    .filter((artifact) => artifact.status === 'live')
    .slice(0, limit);
}

export function getArtifactIndex(): Artifact[] {
  return artifactSeed;
}
