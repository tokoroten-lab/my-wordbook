/// <reference types="realm" />

export type WordInfoType = {
  word: string;
  count: number;
  recognitionLevel: number;
  unrecognitionLevel: number;
};

const WordInfoSchema: Realm.ObjectSchema = {
  name: 'WordInfo',
  primaryKey: 'word',
  properties: {
    word: 'string',
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
