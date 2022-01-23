import {TextProps} from 'react-native';

export interface HeadingProps extends TextProps {
  type:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'H7'
    | 'H8'
    | 'H9'
    | 'H10'
    | 'H11'
    | 'H12'
    | 'H13'
    | 'H14'
    | 'H15';
}

export interface TextInterfaceProps {
  textType: string;
}
