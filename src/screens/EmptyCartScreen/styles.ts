import styled, {css} from 'styled-components/native';
import {Heading} from '~/components';

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Heading)`
  ${props => {
    const {metrics} = props.theme;
    return css`
      margin-vertical: ${metrics.doubleSpace * 2}px;
    `;
  }}
`;

export const TryAgainButton = styled.TouchableOpacity`
  ${props => {
    const {metrics, colors} = props.theme;
    return css`
      background-color: ${colors.primary};
      border-radius: ${metrics.space}px;
    `;
  }}
`;

export const TryAgainButtonContainer = styled.View`
  ${props => {
    const {metrics} = props.theme;
    return css`
      padding: ${metrics.doubleSpace}px;
    `;
  }}
`;

export const TryAgainButtonText = styled(Heading)`
  ${props => {
    const {colors} = props.theme;
    return css`
      color: ${colors.light};
    `;
  }}
`;
