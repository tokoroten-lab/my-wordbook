/// <reference types="realm" />

class Document {
  public static schema: Realm.ObjectSchema = {
    name: 'Document',
    properties: {
      raw: 'string',
      paragraphs: 'Paragraph[]'
    }
  }

  constructor() {}
}

export default Document
