/// <reference types="realm" />

import nlp from 'compromise';
import paragraphs from 'compromise-paragraphs';
import IModelDocumentNode from './interfaces/IModelDocumentNode';
import Normalizer from './utils/Normalizer';
import Sentence from './Sentence';
import Word from './Word';

const nlpEx = nlp.extend(paragraphs);

class Paragraph implements IModelDocumentNode {
  public static schema: Realm.ObjectSchema = {
    name: 'Paragraph',
    properties: {
      raw: 'string',
      normal: 'string',
      sentences: 'Sentence[]',
      documents: {
        type: 'linkingObjects',
        objectType: 'Document',
        property: 'paragraphs',
      },
    },
  };

  public readonly raw: string;
  public readonly normal: string;
  public readonly sentences: Sentence[];

  constructor(paragraph: string) {
    this.raw = paragraph;
    this.normal = Normalizer.normalize(paragraph);
    this.sentences = Sentence.getSentences(this.raw);
  }

  public get json(): object {
    return {
      raw: this.raw,
      normal: this.normal,
      sentences: this.sentences.map((sentence: Sentence) => {
        return sentence.json;
      }),
    };
  }

  public get words(): Word[] {
    return this.sentences.reduce((prev: Word[], current: Sentence) => {
      prev.push(...current.words);
      return prev;
    }, []);
  }

  public static getParagraphs(text: string): Paragraph[] {
    return nlpEx(text)
      .paragraphs()
      .json()
      .map((paragraph: any) => {
        const sentences = paragraph.sentences.map((sentence: any) => {
          return sentence[0].text;
        });
        return new Paragraph(sentences.join(' '));
      });
  }
}

export default Paragraph;
