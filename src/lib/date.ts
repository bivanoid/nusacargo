export function getMinutesUntilETA(etaISO: string): number {
  const eta = new Date(etaISO);
  const now = new Date();

  const differenceMs = eta.getTime() - now.getTime();

  return Math.round(differenceMs / 1000 / 60);
}