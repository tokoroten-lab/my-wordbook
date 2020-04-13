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
    this.normal = Paragraph.normalize(paragraph);
  }

  private static normalize(document: string): string {
    return Normalizer.normalize(document);
  }
}

export default Paragraph;
