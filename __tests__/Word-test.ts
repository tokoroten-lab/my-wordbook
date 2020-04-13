import Word from '../models/Word';

describe('Word model unit test', () => {
  test('normalize word', () => {
    const normal = new Word('This', 'this').normal;

    expect(normal).toBe('this');
  });

  test('split words', () => {
    const testDocument = "I'm a developer of this application.";

    const expectResults = [
      'I',
      'am',
      'a',
      'developer',
      'of',
      'this',
      'application',
    ];

    const words = Word.getWords(testDocument);

    expect(words.length).toBe(expectResults.length);

    for (let i = 0; i < words.length; ++i) {
      expect(words[i].raw).toBe(expectResults[i]);
    }
  });
});
