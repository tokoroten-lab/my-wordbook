/// <reference types="realm" />

import nlp from 'compromise';
import IModelData from './interfaces/IModelData';

class Word implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Word',
    properties: {
      raw: 'string',
      normal: 'string',
      sentences: {
        type: 'linkingObjects',
        objectType: 'Sentence',
        property: 'words',
      },
    },
  };

  public readonly raw: string;
  public readonly normal: string;

  constructor(raw: string, normal: string) {
    this.raw = raw;
    this.normal = normal;
  }

  public get json(): object {
    return {
      raw: this.raw,
      normal: this.normal,
    };
  }

  public static getWords(text: string): Word[] {
    return nlp(text)
      .termList()
      .map((word: any) => {
        const raw = word.implicit ? word.implicit : word.text;
        return new Word(raw, word.reduced);
      });
  }
}

export default Word;
