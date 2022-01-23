import styled, {css} from 'styled-components/native';
import {SpacedRow} from '~/shared';
import {Heading} from '../text';

export const Container = styled.View`
  ${props => {
    const {theme} = props;
    const {metrics, colors} = theme;

    return css`
      margin-horizontal: ${metrics.containerMargin}px;
      margin-top: ${metrics.doubleSpace}px;
      padding-bottom: ${metrics.space}px;
      border-radius: ${metrics.space}px;
      background-color: ${colors.componentBackground};
    `;
  }}
`;

export const Header = styled.View`
  ${props => {
    const {theme} = props;
    const {metrics} = theme;

    return css`
      flex-direction: row;
      justify-content: space-between;
      padding-left: ${metrics.space * 3}px;
    `;
  }}
`;

export const Information = styled.View`
  ${props => {
    const {metrics} = props.theme;
    return css`
      margin-top: ${metrics.space * 3}px;
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

export const RemoveText = styled(Heading)`
  ${props => {
    const {theme} = props;
    const {colors} = theme;
    return css`
      text-decoration: underline;
      color: ${colors.monochromatic3};
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

export const OptionsContainer = styled(SpacedRow)`
  ${props => {
    const {metrics} = props.theme;
    return css`
      align-items: center;
      padding-left: ${metrics.space * 3}px;
      padding-right: ${metrics.space}px;
      padding-vertical: ${metrics.space * 1.5}px;
    `;
  }}
`;
