/// <reference types="realm" />

const WordInfoSchema: Realm.ObjectSchema = {
  name: 'WordInfo',
  properties: {
    normal: 'string',
    recognitionLevel: {
      type: 'int',
      default: 0,
    },
    unrecognitionLevel: {
      type: 'int',
      default: 0,
    },
  },
};

export default WordInfoSchema;
