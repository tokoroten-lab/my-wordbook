import Paragraph from "../models/Paragraph";

describe('Normalize document', () => {
  test('normalize', () => {
    const testDocument = `Hello. I'm a developer of this application. This application isn't yet completed, but it will be amazing one if it is completed.`;
    const expectResult = `Hello. I am a developer of this application. This application is not yet completed, but it will be amazing one if it is completed.`;

    const normal = new Paragraph(testDocument).normal;

    expect(normal).toBe(expectResult);
  });
});
