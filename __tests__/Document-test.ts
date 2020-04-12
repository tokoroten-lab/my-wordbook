import Document from "../models/Document";

describe('Normalize document', () => {
  test('normalize', () => {
    const testDocument = `I'm  a developer of this application, this application has been developed only by me... (not completed)`;
    const expectResult = `I am a developer of this application, this application has been developed only by me... (not completed)`;

    const normal = new Document(testDocument).normal;

    expect(normal).toBe(expectResult);
  });
});
