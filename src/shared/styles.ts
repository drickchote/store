import styled, {css} from 'styled-components/native';

export const Line = styled.View`
  ${props => {
    const {metrics, colors} = props.theme;
    return css`
      margin-vertical: ${metrics.doubleSpace}px;
      flex-direction: row;
      border-top-width: 1px;
      border-top-color: #eeeeee;
      color: ${colors.monochromatic2};
    `;
  }}
`;
