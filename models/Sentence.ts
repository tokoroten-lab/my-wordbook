/// <reference types="realm" />

import nlp from 'compromise';
import sentences from 'compromise-sentences';
import IModelDocumentNode from './interfaces/IModelDocumentNode';
import Normalizer from './utils/Normalizer';
import Word from './Word';

const nlpEx = nlp.extend(sentences);

class Sentence implements IModelDocumentNode {
  public static schema: Realm.ObjectSchema = {
    name: 'Sentence',
    properties: {
      raw: 'string',
      normal: 'string',
      words: 'Word[]',
      paragraphs: {
        type: 'linkingObjects',
        objectType: 'Paragraph',
        property: 'sentences',
      },
    },
  };

  public readonly raw: string;
  public readonly normal: string;
  public readonly words: Word[];

  constructor(sentence: string) {
    this.raw = sentence;
    this.normal = Normalizer.normalize(sentence);
    this.words = Word.getWords(this.raw);
  }

  public get json(): object {
    return {
      raw: this.raw,
      normal: this.normal,
      words: this.words.map((word: Word) => {
        return word.json;
      }),
    };
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
