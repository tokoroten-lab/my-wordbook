/// <reference types="realm" />

class Paragraph {
  public static schema: Realm.ObjectSchema = {
    name: 'Paragraph',
    properties: {
      raw: 'string',
      sentences: 'Sentence[]'
    }
  }

  constructor() {}
}

export default Paragraph
