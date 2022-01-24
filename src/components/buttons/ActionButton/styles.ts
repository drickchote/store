import styled, {css} from 'styled-components/native';
import {Heading} from '~/components/text';
import {ButtonContainerInterface} from './types';

export const Container = styled.View<ButtonContainerInterface>`
  ${props => {
    const {theme, isDisabled} = props;
    const {colors, metrics} = theme;
    return css`
      background-color: ${isDisabled ? colors.disabledPrimary : colors.primary};
      padding-vertical: ${metrics.space * 3}px;
      border-radius: ${metrics.space}px;
    `;
  }}
`;

export const Text = styled(Heading)`
  ${props => {
    const {theme} = props;
    const {colors} = theme;
    return css`
      color: ${colors.light};
      text-align: center;
    `;
  }}
`;
