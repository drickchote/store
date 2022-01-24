import styled, {css} from 'styled-components/native';
import {SpacedRow} from '~/shared';

export const Screen = styled.View`
  flex: 1;
`;

export const Total = styled(SpacedRow)`
  ${props => {
    const {metrics, colors} = props.theme;
    return css`
      padding: ${metrics.space * 3}px;
      background-color: ${colors.monochromatic4};
      margin-bottom: ${metrics.doubleSpace}px;
    `;
  }}
`;
