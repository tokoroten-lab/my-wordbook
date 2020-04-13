import Sentence from "../models/Sentence";

describe('Normalize document', () => {
  test('normalize', () => {
    const testDocument = `This application isn't yet completed, but it will be amazing one if it is completed.`;
    const expectResult = `This application is not yet completed, but it will be amazing one if it is completed.`;

    const normal = new Sentence(testDocument).normal;

    expect(normal).toBe(expectResult);
  });
});
