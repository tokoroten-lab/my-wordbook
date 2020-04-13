/// <reference types="realm" />

import IModelData from './interfaces/IModelData';
import Normalizer from './utils/Normalizer';

class Sentence implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Sentence',
    properties: {
      raw: 'string',
      normal: 'string',
      words: 'Word[]'
    }
  };

  public readonly raw: string;
  public readonly normal: string;

  constructor(sentence: string) {
    this.raw = sentence;
    this.normal = Normalizer.normalize(sentence);
  }
}

export default Sentence;
