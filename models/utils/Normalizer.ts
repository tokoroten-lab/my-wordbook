import nlp from 'compromise'

class Normalizer {
  private static readonly normalizationOptions: object = {
    whitespace: true,
    case: false,
    punctuation: false,
    uncode: false,
    contractions: true,
    acronyms: true,
    parentheses: false,
    possessives: false,
    plurals: false,
    verbs: false,
    honorifics: false
  };

  public static normalize(document: string): string {
    const doc = nlp(document)
    doc.normalize(Normalizer.normalizationOptions)
    return doc.out('text')
  }
}

export default Normalizer
