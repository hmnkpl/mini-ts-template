import { execute } from './exercise.js';

test('execute', () => {
  const result = execute('test');
  expect(result).toBe('execute: test');
});
