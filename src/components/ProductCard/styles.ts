import styled, {css} from 'styled-components/native';
import {Heading} from '../text';
import {containerInterface} from './types';
import {Line} from '~/shared';

export const Container = styled.View<containerInterface>`
  ${props => {
    const {theme, isSelected = false} = props;
    const {metrics, colors} = theme;

    return css`
      margin-horizontal: ${metrics.containerMargin}px;
      margin-top: ${metrics.doubleSpace}px;
      padding: ${metrics.doubleSpace}px;
      border-radius: ${metrics.space}px;
      background-color: ${colors.componentBackground};
      border-width: ${isSelected ? 3 : 0}px;
      border-color: ${colors.primary};
    `;
  }}
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Information = styled.View`
  ${props => {
    const {metrics} = props.theme;
    return css`
      margin-left: ${metrics.doubleSpace}px;
    `;
  }}
`;

export const PriceText = styled(Heading)`
  ${props => {
    const {theme} = props;
    const {metrics} = theme;
    return css`
      margin-top: ${metrics.halfSpace}px;
    `;
  }}
`;

export const AvailableText = styled(Heading)`
  ${props => {
    const {colors} = props.theme;
    return css`
      text-align: right;
      color: ${colors.monochromatic2};
    `;
  }}
`;

export const CardLine = styled(Line)`
  ${props => {
    const {metrics} = props.theme;
    return css`
      margin-vertical: ${metrics.doubleSpace}px;
    `;
  }}
`;
