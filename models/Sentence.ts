/// <reference types="realm" />

class Sentence {
  public static schema: Realm.ObjectSchema = {
    name: 'Sentence',
    properties: {
      raw: 'string',
      normal: 'string',
      words: 'Word[]'
    }
  }

  constructor() {}
}

export default Sentence
