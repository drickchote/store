import styled, {css} from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
`;

export const CartContainer = styled.View`
  ${props => {
    const {metrics} = props.theme;

    return css`
      align-items: flex-end;
      margin: ${metrics.containerMargin}px;
      margin-top: ${metrics.containerMargin * 2}px
      padding-right: ${metrics.halfSpace}px;
    `;
  }}
`;
