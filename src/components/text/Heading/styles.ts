import styled, {css} from 'styled-components/native';
import {TextInterfaceProps} from './types';

const commonStyle = css`
  ${props => {
    const {colors} = props.theme;
    return css`
      color: ${colors.monochromatic1};
    `;
  }}
`;

const H1 = css`
  ${commonStyle}

  font-size: 16px;
  font-family: 'Montserrat-SemiBold';
`;
const H2 = css`
  ${commonStyle}

  font-size: 14px;
  font-family: 'Montserrat-bold';
`;
const H3 = css`
  ${commonStyle}

  font-size: 14px;
  font-family: 'Montserrat';
`;
const H4 = css`
  ${commonStyle}

  font-size: 12px;
  font-family: 'Montserrat';
`;

const H5 = css`
  ${commonStyle}

  font-size: 10px;
  font-family: 'Montserrat-SemiBold';
  line-height: 12px;
`;

const H6 = css`
  ${commonStyle}

  font-size: 10px;
  font-family: 'Montserrat';
  line-height: 12px;
`;

export const Text = styled.Text<TextInterfaceProps>`
  ${props => {
    const {textType} = props;

    switch (textType) {
      case 'H1':
        return H1;
      case 'H2':
        return H2;
      case 'H3':
        return H3;
      case 'H4':
        return H4;
      case 'H5':
        return H5;
      case 'H6':
        return H6;
    }
  }}
`;
