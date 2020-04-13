/// <reference types="realm" />

import nlp from "compromise";
import IModelData from './interfaces/IModelData';
import Normalizer from './utils/Normalizer';

class Paragraph implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Paragraph',
    properties: {
      raw: 'string',
      normal: 'string',
      sentences: 'Sentence[]'
    }
  };

  public readonly raw: string;
  public readonly normal: string;

  constructor(paragraph: string) {
    this.raw = paragraph;
    this.normal = Normalizer.normalize(paragraph);
  }
}

export default Paragraph;
