import 'styled-components';
import {ThemeInterface} from '~/shared';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
