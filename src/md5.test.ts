import { describe, expect, it } from 'vitest';
import { md5 } from './md5.js';

describe('md5', () => {
  it('should return correct result', () => {
    expect(md5('Hello world !')).toBe('67c18d060479c5d867c9b91c80edeb4c');
  });
});
