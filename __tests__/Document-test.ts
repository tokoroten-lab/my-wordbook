import Document from "../models/Document";

describe('Normalize document', () => {
  test('normalize', () => {
    const testDocument = `
    This application uses the statistics information to evaluate the words.

    It analyzes appearance frequency and correct answer rate, personalize test. A word that is high appearance frequency and incorrect answer rate is evaluated highly. It is important for you that the evaluation value is high.

    You can take the test that sets problems of only word that the evaluation is high.
    `;
    const expectResult = `This application uses the statistics information to evaluate the words. It analyzes appearance frequency and correct answer rate, personalize test. A word that is high appearance frequency and incorrect answer rate is evaluated highly. It is important for you that the evaluation value is high. You can take the test that sets problems of only word that the evaluation is high.`;

    const normal = new Document(testDocument).normal;

    expect(normal).toBe(expectResult);
  });
});
