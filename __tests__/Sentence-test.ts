import Sentence from '../models/Sentence';

describe('Sentence model unit test', () => {
  test('normalize sentence', () => {
    const testDocument =
      "This application isn't yet completed, but it will be amazing one if it is completed.";

    const expectResult =
      'This application is not yet completed, but it will be amazing one if it is completed.';

    const normal = new Sentence(testDocument).normal;

    expect(normal).toBe(expectResult);
  });

  test('split sentences', () => {
    const testDocument =
      "Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.";

    const expectResults = [
      'Hello.',
      "I'm a developer of this application.",
      "This application isn't yet completed, but it will be amazing one if it is completed.",
    ];

    const sentences = Sentence.getSentences(testDocument);

    expect(sentences.length).toBe(expectResults.length);

    for (let i = 0; i < sentences.length; ++i) {
      expect(sentences[i].raw).toBe(expectResults[i]);
    }
  });
});
