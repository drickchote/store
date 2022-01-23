export const metrics = {
  halfSpace: 4,
  space: 8,
  doubleSpace: 16,
  containerMargin: 20,
  borderWidth: 1,
};

export const colors = {
  primary: '#4A5C9A',
  screenBackground: '#EEE',
  componentBackground: '#FFF',
  borderColor: '#EEE',
  monochromatic1: '#000',
  monochromatic2: '#4D5A60',
};

export const theme = {metrics: {...metrics}, colors: {...colors}};

export interface ThemeInterface {
  metrics: typeof metrics;
  colors: typeof colors;
}
