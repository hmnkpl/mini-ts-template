import { execute } from './exercise.js';

describe('util', () => {
  test('execute', () => {
    const result = execute('Hello');
    expect(result).toMatchObject({
      'New User': 'Hello',
    });
  });
});
