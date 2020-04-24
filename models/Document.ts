/// <reference types="realm" />

import IModelData from './interfaces/IModelData';
import IWordsGetter from './interfaces/IWordsGetter';
import Normalizer from './utils/Normalizer';
import Paragraph from './Paragraph';
import Word from './Word';

class Document implements IModelData, IWordsGetter {
  public static schema: Realm.ObjectSchema = {
    name: 'Document',
    properties: {
      raw: 'string',
      normal: 'string',
      paragraphs: 'Paragraph[]',
    },
  };

  public readonly raw: string;
  public readonly normal: string;
  public readonly paragraphs: Paragraph[];

  constructor(document: string) {
    this.raw = document;
    this.normal = Normalizer.normalize(document);
    this.paragraphs = Paragraph.getParagraphs(this.raw);
  }

  public get json(): object {
    return {
      raw: this.raw,
      normal: this.normal,
      paragraphs: this.paragraphs.map((paragraph: Paragraph) => {
        return paragraph.json;
      }),
    };
  }

  public get words(): Word[] {
    return this.paragraphs.reduce((prev: Word[], current: Paragraph) => {
      prev.push(...current.words);
      return prev;
    }, []);
  }
}

export default Document;
