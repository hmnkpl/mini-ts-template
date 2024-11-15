import { execute } from './exercise.js';

describe('util', () => {
  test('execute', () => {
    const result = execute('test');
    expect(result).toBe('execute: test');
  });
});
