/// <reference types="realm" />

export type WordInfoType = {
  word: string;
  count: number;
  recognitionLevel: number;
  unrecognitionLevel: number;
};

class WordInfo {
  public static schema: Realm.ObjectSchema = {
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

  public static calcEvaluationFromWordInfo(wordInfo: WordInfoType): number {
    const sumOfRecognition: number =
      wordInfo.recognitionLevel + wordInfo.unrecognitionLevel;

    // +1 to avoid zero dividing
    const recognitionCoeff: number =
      (wordInfo.unrecognitionLevel + 1) / (sumOfRecognition + 1);

    return wordInfo.count * recognitionCoeff;
  }
}

export default WordInfo;
