/// <reference types="realm" />

class Word {
  public static schema: Realm.ObjectSchema = {
    name: 'Word',
    properties: {
      raw: 'string',
      normal: 'string'
    }
  }

  constructor() {}
}

export default Word
