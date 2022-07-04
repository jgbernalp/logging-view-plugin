import { durationFromTimestamp, valueWithScalePrefix } from '../value-utils';

describe('value utils', () => {
  it('should add the propoer prefix to the value', () => {
    expect(valueWithScalePrefix(1000)).toBe('1k');
    expect(valueWithScalePrefix(1000000)).toBe('1M');
    expect(valueWithScalePrefix(2340)).toBe('2.3k');
  });

  it('should create a duration value from a timestamp', () => {
    expect(durationFromTimestamp(1000)).toBe('1s');
    expect(durationFromTimestamp(60000)).toBe('1m');
    expect(durationFromTimestamp(6730000000)).toBe('11w 21h 26m 40s');
  });
});
