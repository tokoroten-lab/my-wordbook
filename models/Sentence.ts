/// <reference types="realm" />

import nlp from 'compromise';
import sentences from 'compromise-sentences';
import IModelData from './interfaces/IModelData';
import Normalizer from './utils/Normalizer';

const nlpEx = nlp.extend(sentences);

class Sentence implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Sentence',
    properties: {
      raw: 'string',
      normal: 'string',
      words: 'Word[]',
    },
  };

  public readonly raw: string;
  public readonly normal: string;

  constructor(sentence: string) {
    this.raw = sentence;
    this.normal = Normalizer.normalize(sentence);
  }

  public static getSentences(text: string): Sentence[] {
    return nlpEx(text)
      .sentences()
      .json()
      .map((sentence: any) => {
        return new Sentence(sentence.text);
      });
  }
}

export default Sentence;
