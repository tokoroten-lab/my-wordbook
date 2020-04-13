import Word from "../models/Word";

describe('Normalize document', () => {
  test('normalize', () => {
    const normal = new Word('This', 'this').normal;

    expect(normal).toBe('this');
  });
});
