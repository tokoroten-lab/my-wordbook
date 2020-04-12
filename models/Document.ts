/// <reference types="realm" />

import nlp from 'compromise'

class Document {
  public static schema: Realm.ObjectSchema = {
    name: 'Document',
    properties: {
      raw: 'string',
      normal: 'string',
      paragraphs: 'Paragraph[]'
    }
  }

  public readonly raw: string
  public readonly normal: string

  constructor(document: string) {
    this.raw = document
    this.normal = Document.normalize(document)
  }

  private static normalize(document: string): string {
    const doc = nlp(document)
    doc.normalize('heavy')
    return doc.out('text')
  }
}

export default Document
