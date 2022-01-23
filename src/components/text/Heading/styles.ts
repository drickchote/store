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

  font-size: 18px;
  font-family: 'Montserrat-bold';
`;
const H2 = css`
  ${commonStyle}

  font-size: 18px;
  font-family: 'Montserrat-SemiBold';
`;
const H3 = css`
  ${commonStyle}

  font-size: 18px;
  font-family: 'Montserrat';
`;

const H4 = css`
  ${commonStyle}

  font-size: 16px;
  font-family: 'Montserrat-bold';
`;
const H5 = css`
  ${commonStyle}

  font-size: 16px;
  font-family: 'Montserrat-SemiBold';
`;
const H6 = css`
  ${commonStyle}

  font-size: 16px;
  font-family: 'Montserrat';
`;

const H7 = css`
  ${commonStyle}

  font-size: 14px;
  font-family: 'Montserrat-bold';
`;
const H8 = css`
  ${commonStyle}

  font-size: 14px;
  font-family: 'Montserrat-SemiBold';
`;
const H9 = css`
  ${commonStyle}

  font-size: 14px;
  font-family: 'Montserrat';
`;

const H10 = css`
  ${commonStyle}

  font-size: 12px;
  font-family: 'Montserrat-bold';
`;
const H11 = css`
  ${commonStyle}

  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
`;
const H12 = css`
  ${commonStyle}

  font-size: 12px;
  font-family: 'Montserrat';
`;

const H13 = css`
  ${commonStyle}

  font-size: 10px;
  font-family: 'Montserrat-bold';
`;
const H14 = css`
  ${commonStyle}

  font-size: 10px;
  font-family: 'Montserrat-SemiBold';
`;
const H15 = css`
  ${commonStyle}

  font-size: 10px;
  font-family: 'Montserrat';
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
      case 'H7':
        return H7;
      case 'H8':
        return H8;
      case 'H9':
        return H9;
      case 'H10':
        return H10;
      case 'H11':
        return H11;
      case 'H12':
        return H12;
      case 'H13':
        return H13;
      case 'H14':
        return H14;
      case 'H15':
        return H15;
    }
  }}
`;
