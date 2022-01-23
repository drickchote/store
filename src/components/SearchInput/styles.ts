import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${props => {
    const {metrics, colors} = props.theme;
    return css`
      padding: ${metrics.doubleSpace}px;
      margin-horizontal: ${metrics.containerMargin}px;
      margin-bottom: ${metrics.space}px;
      background-color: ${colors.componentBackground};
      border-radius: ${metrics.space}px;
    `;
  }}
`;
