const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

export function calibrateFibonacciCycle(now: number = Date.now()): string {
  const base = Math.floor(now / 1000);
  const spiral = Math.sin(base / GOLDEN_RATIO);
  const tier = (Math.abs(spiral) * 1000).toFixed(0).padStart(3, '0');
  return `PHI-${tier}`;
}

export function generateSpiralPoints(count = 8): Array<{ x: number; y: number; radius: number }> {
  return Array.from({ length: count }).map((_, index) => {
    const radius = index / GOLDEN_RATIO;
    const angle = index * Math.PI * GOLDEN_RATIO;
    return {
      radius,
      x: (Math.cos(angle) * radius) / GOLDEN_RATIO,
      y: (Math.sin(angle) * radius) / GOLDEN_RATIO,
    };
  });
}

export function scheduleRevealSequence(count = 5, offset = 120): number[] {
  return Array.from({ length: count }).map((_, index) => {
    const phiFactor = Math.pow(GOLDEN_RATIO, index);
    return Math.round(offset + phiFactor * 180);
  });
}
