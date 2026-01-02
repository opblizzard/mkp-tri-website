import type { Artifact } from './Codex';

const nodes = ['CAT-01', 'COD-02', 'GEN-03'];

export type GenesisSignalInput = {
  keyProvided: boolean;
  keyValid: boolean;
  userAgent: string;
  pathname: string;
};

export type GenesisSignal = {
  keyProvided: boolean;
  keyValid: boolean;
  cycle: string;
  stamp: string;
  node: string;
};

export function attuneGenesisSignal(input: GenesisSignalInput): GenesisSignal {
  const stamp = new Date().toISOString();
  const cycle = resolveCycle(input.pathname);
  const node = nodes[Math.abs(hashString(input.userAgent + input.pathname)) % nodes.length];

  return {
    keyProvided: input.keyProvided,
    keyValid: input.keyValid,
    cycle,
    stamp,
    node,
  };
}

export function inscribeArtifact(payload: Omit<Artifact, 'id' | 'coordinates'> & { coordinates?: [number, number] }): Artifact {
  const coordinates: [number, number] =
    payload.coordinates ?? [(Math.random() * 0.89 + 0.05), (Math.random() * 0.89 + 0.05)];
  const id = `OMNI-${Math.floor(Math.random() * 900 + 100)}`;

  return {
    ...payload,
    id,
    coordinates,
  };
}

function resolveCycle(pathname: string): string {
  if (pathname.startsWith('/portfolio')) return 'DELTA-03';
  if (pathname.startsWith('/codex')) return 'DELTA-02';
  return 'DELTA-01';
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
