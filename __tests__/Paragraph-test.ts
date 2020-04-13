import Paragraph from "../models/Paragraph";

describe('Paragraph model unit test', () => {
  test('normalize paragraph', () => {
    const testDocument = `Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.`;
    const expectResult = `Hello. I am a developer of this application. This application is not yet completed, but it will be amazing one if it is completed.`;

    const normal = new Paragraph(testDocument).normal;

    expect(normal).toBe(expectResult);
  });

  test('split paragraphs', () => {
    const testDocument = `
    Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.

    This application uses the statistics information to evaluate the words.

    It analyzes appearance frequency and correct answer rate, personalize test. A word that is high appearance frequency and incorrect answer rate is evaluated highly. It is important for you that the evaluation value is high.

    You can take the test that sets problems of only word that the evaluation is high.
    `;

    const expectResults = [
      `Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.`,
      `This application uses the statistics information to evaluate the words.`,
      `It analyzes appearance frequency and correct answer rate, personalize test. A word that is high appearance frequency and incorrect answer rate is evaluated highly. It is important for you that the evaluation value is high.`,
      `You can take the test that sets problems of only word that the evaluation is high.`
    ];

    const paragraphs = Paragraph.getParagraphs(testDocument);

    expect(paragraphs.length).toBe(expectResults.length);

    for(let i = 0; i < paragraphs.length; ++i) {
      expect(paragraphs[i].raw).toBe(expectResults[i]);
    }
  });
});
