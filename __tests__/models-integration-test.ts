import Document from '../models/Document';

describe('Models intergration test', () => {
  test('convert json', () => {
    const testText = `
    Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.

    This application uses the statistics information to evaluate the words.
    `;

    const expectResult = {
      raw: testText,
      normal:
        'Hello. I am a developer of this application. This application is not yet completed, but it will be amazing one if it is completed. This application uses the statistics information to evaluate the words.',
      paragraphs: [
        {
          raw:
            "Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.",
          normal:
            'Hello. I am a developer of this application. This application is not yet completed, but it will be amazing one if it is completed.',
          sentences: [
            {
              raw: 'Hello.',
              normal: 'Hello.',
              words: [
                {
                  raw: 'Hello',
                  normal: 'hello',
                },
              ],
            },
            {
              raw: "I'm a developer of this application.",
              normal: 'I am a developer of this application.',
              words: [
                {
                  raw: 'I',
                  normal: 'i',
                },
                {
                  raw: 'am',
                  normal: 'am',
                },
                {
                  raw: 'a',
                  normal: 'a',
                },
                {
                  raw: 'developer',
                  normal: 'developer',
                },
                {
                  raw: 'of',
                  normal: 'of',
                },
                {
                  raw: 'this',
                  normal: 'this',
                },
                {
                  raw: 'application',
                  normal: 'application',
                },
              ],
            },
            {
              raw:
                "This application isn't yet completed, but it will be amazing one if it is completed.",
              normal:
                'This application is not yet completed, but it will be amazing one if it is completed.',
              words: [
                {
                  raw: 'This',
                  normal: 'this',
                },
                {
                  raw: 'application',
                  normal: 'application',
                },
                {
                  raw: 'is',
                  normal: 'is',
                },
                {
                  raw: 'not',
                  normal: 'not',
                },
                {
                  raw: 'yet',
                  normal: 'yet',
                },
                {
                  raw: 'completed',
                  normal: 'completed',
                },
                {
                  raw: 'but',
                  normal: 'but',
                },
                {
                  raw: 'it',
                  normal: 'it',
                },
                {
                  raw: 'will',
                  normal: 'will',
                },
                {
                  raw: 'be',
                  normal: 'be',
                },
                {
                  raw: 'amazing',
                  normal: 'amazing',
                },
                {
                  raw: 'one',
                  normal: 'one',
                },
                {
                  raw: 'if',
                  normal: 'if',
                },
                {
                  raw: 'it',
                  normal: 'it',
                },
                {
                  raw: 'is',
                  normal: 'is',
                },
                {
                  raw: 'completed',
                  normal: 'completed',
                },
              ],
            },
          ],
        },
        {
          raw:
            'This application uses the statistics information to evaluate the words.',
          normal:
            'This application uses the statistics information to evaluate the words.',
          sentences: [
            {
              raw:
                'This application uses the statistics information to evaluate the words.',
              normal:
                'This application uses the statistics information to evaluate the words.',
              words: [
                {
                  raw: 'This',
                  normal: 'this',
                },
                {
                  raw: 'application',
                  normal: 'application',
                },
                {
                  raw: 'uses',
                  normal: 'uses',
                },
                {
                  raw: 'the',
                  normal: 'the',
                },
                {
                  raw: 'statistics',
                  normal: 'statistics',
                },
                {
                  raw: 'information',
                  normal: 'information',
                },
                {
                  raw: 'to',
                  normal: 'to',
                },
                {
                  raw: 'evaluate',
                  normal: 'evaluate',
                },
                {
                  raw: 'the',
                  normal: 'the',
                },
                {
                  raw: 'words',
                  normal: 'words',
                },
              ],
            },
          ],
        },
      ],
    };

    const document: any = new Document(testText);

    expect(document.json).toStrictEqual(expectResult);
  });
});
