import styled, {css} from 'styled-components/native';
import {Heading} from '../text/Heading';
import {CartPropsInterface} from './types';

export const TextContainer = styled.View<CartPropsInterface>`
  ${props => {
    const {theme, quantity} = props;
    const {colors, metrics} = theme;

    return css`
      width: 21px
      height: 21px;
      border-radius: 10px;
      background-color: ${
        quantity > 0 ? colors.primary : colors.screenBackground
      };
      align-items: center;
      padding: ${metrics.halfSpace}px;
      overflow: hidden;
    `;
  }}
`;

export const CartText = styled(Heading)`
  ${props => {
    const {colors} = props.theme;

    return css`
      color: ${colors.componentBackground};
    `;
  }}
`;

export const ImageContainer = styled.View`
  ${props => {
    const {metrics} = props.theme;

    return css`
      margin-left: ${metrics.doubleSpace}px;
      margin-top: -${metrics.space}px;
    `;
  }}
`;
