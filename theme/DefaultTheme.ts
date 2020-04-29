import ITheme from './ITheme';

class DefaultTheme implements ITheme {
  public readonly name: string;

  // ITextTheme
  public readonly primaryText: string;
  public readonly secondaryText: string;
  public readonly teritaryText: string;
  public readonly accentText: string;

  // IButtonTheme
  public readonly primaryButton: string;
  public readonly secondaryButton: string;
  public readonly teritaryButton: string;
  public readonly completeButtonBackground: string;
  public readonly goodButtonBackground: string;
  public readonly badButtonBackground: string;
  public readonly incompleteButtonBackground: string;

  // ISeparatorTHeme
  public readonly separator: string;

  // IBackgroundTheme
  public readonly primaryBackground: string;
  public readonly secondaryBackground: string;
  public readonly teritaryBackground: string;
  public readonly quaternaryBackground: string;

  constructor() {
    this.name = 'Default';

    this.primaryText = '#000000';
    this.secondaryText = '#EEEEEE';
    this.teritaryText = '#553222';
    this.accentText = '#DD2244';

    this.primaryButton = '#805C5C';
    this.secondaryButton = '#6C5C5C';
    this.teritaryButton = '#D2691E';

    this.completeButtonBackground = '#D2691E';
    this.goodButtonBackground = '#805C5C';
    this.badButtonBackground = '#6C5C5C';
    this.incompleteButtonBackground = '#333333';

    this.separator = '#D2691E';

    this.primaryBackground = '#FFFFFF';
    this.secondaryBackground = '#6C5C5C';
    this.teritaryBackground = '#805C5C';
    this.quaternaryBackground = '#D2691E';
  }
}

export default DefaultTheme;
