declare namespace Common {
  export interface OptionValues {
    label: string;
    value: string;
  }
  export type ThemeColor = 'secondary' | 'primary' | 'error' | 'success' | 'border';
  export type TextColor = 'secondary' | 'primary' | 'highlight';
  export type BackgroundColor = 'secondary' | 'primary';
  export type ColorVariant = 'background' | 'color' | 'text';
}
