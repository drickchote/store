import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityContainer = styled.View`
  ${props => {
    const {theme} = props;
    const {colors, metrics} = theme;
    return css`
      background-color: ${colors.secondary};
      padding: ${metrics.space}px;
      text-align: center;
      border-radius: ${metrics.halfSpace}px;
      margin-horizontal: ${metrics.space}px;
    `;
  }}
`;

export const ImageContainer = styled.View`
  ${props => {
    const {theme} = props;
    const {metrics} = theme;
    return css`
      padding: ${metrics.space}px;
      height: ${metrics.space * 3}px;
      justify-content: center;
    `;
  }}
`;

export const TextInput = styled.TextInput`
  ${props => {
    const {theme} = props;
    const {colors} = theme;
    return css`
      color: ${colors.monochromatic1};
      font-size: 18px;
      font-family: 'Montserrat';
    `;
  }}
`;
