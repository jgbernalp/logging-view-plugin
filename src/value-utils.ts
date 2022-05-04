export const valueWithScalePrefix = (value: number): string => {
  return value > 1000
    ? `${Math.round(value / 1000)}k`
    : value > 1000000
    ? `${Math.round(value / 1000000)}M`
    : String(value);
};

export const notEmptyString = (value: string): value is string =>
  value.length > 0;

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const units = { w, d, h, m, s };

export const intervalFromTimestamp = (timestamp: number): string => {
  if (!Number.isFinite(timestamp) || timestamp < 0) {
    return '';
  }
  let remaining = timestamp;
  let str = '';
  for (const [unit, factor] of Object.entries(units)) {
    const n = Math.floor(remaining / factor);
    if (n > 0) {
      str += `${n}${unit} `;
      remaining -= n * factor;
    }
  }
  return str.trim();
};
