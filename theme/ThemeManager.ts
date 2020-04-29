import ITheme from './ITheme';
import DefaultTheme from './DefaultTheme';

class ThemeManager {
  private static _instance: ThemeManager;
  private readonly themes: ITheme[];
  private _currentTheme: ITheme;

  private constructor() {
    this.themes = [new DefaultTheme()];
    this._currentTheme = this.themes[0];
  }

  public changeTheme(name: string): void {
    const targetTheme: ITheme | undefined = this.themes.find(
      (theme: ITheme) => {
        return theme.name === name;
      },
    );

    if (targetTheme) {
      this._currentTheme = targetTheme;
    }
  }

  public static get instance(): ThemeManager {
    if (!ThemeManager._instance) {
      ThemeManager._instance = new ThemeManager();
    }
    return ThemeManager._instance;
  }

  public get currentTheme(): ITheme {
    return this._currentTheme;
  }
}

export default ThemeManager.instance;
