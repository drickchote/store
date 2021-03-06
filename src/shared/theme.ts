export const metrics = {
  halfSpace: 4,
  space: 8,
  doubleSpace: 16,
  containerMargin: 20,
  borderWidth: 1,
} as const;

export const colors = {
  primary: '#4A5C9A',
  secondary: '#EEE',
  disabledPrimary: '#4A5C9A7F',
  light: '#FFF',
  screenBackground: '#EEE',
  componentBackground: '#FFF',
  borderColor: '#EEE',
  monochromatic1: '#000',
  monochromatic2: '#4D5A60',
  monochromatic3: '#5A4747',
  monochromatic4: '#DDE0EE',
} as const;

export const theme = {
  metrics: {...metrics} as const,
  colors: {...colors} as const,
};

export interface ThemeInterface {
  metrics: typeof metrics;
  colors: typeof colors;
}
