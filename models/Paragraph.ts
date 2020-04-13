/// <reference types="realm" />

import nlp from 'compromise';
import paragraphs from 'compromise-paragraphs';
import IModelData from './interfaces/IModelData';
import Normalizer from './utils/Normalizer';
import Sentence from './Sentence';

const nlpEx = nlp.extend(paragraphs);

class Paragraph implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Paragraph',
    properties: {
      raw: 'string',
      normal: 'string',
      sentences: 'Sentence[]',
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
