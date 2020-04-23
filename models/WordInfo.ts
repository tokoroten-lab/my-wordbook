/// <reference types="realm" />

const WordInfoSchema: Realm.ObjectSchema = {
  name: 'WordInfo',
  properties: {
    normal: 'string',
    count: {
      type: 'int',
      default: 0,
    },
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
