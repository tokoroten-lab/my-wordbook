interface ITextTheme {
  readonly primaryText: string;
  readonly secondaryText: string;
  readonly teritaryText: string;
  readonly accentText: string;
}

interface IButtonTheme {
  readonly primaryButton: string;
  readonly secondaryButton: string;
  readonly teritaryButton: string;
  readonly completeButtonBackground: string;
  readonly goodButtonBackground: string;
  readonly badButtonBackground: string;
  readonly incompleteButtonBackground: string;
}

interface ISeparatorTheme {
  readonly separator: string;
}

interface IBackgroundTheme {
  readonly primaryBackground: string;
  readonly secondaryBackground: string;
  readonly teritaryBackground: string;
  readonly quaternaryBackground: string;
}

interface ITheme
  extends ITextTheme,
    IButtonTheme,
    ISeparatorTheme,
    IBackgroundTheme {
  readonly name: string;
}

export default ITheme;
