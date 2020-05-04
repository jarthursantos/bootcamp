import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../../../themes/colors';

export const Container = styled(RectButton)`
  margin-top: 8px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.accent};

  ${props =>
    !props.enabled &&
    css`
      opacity: 0.8;
    `};
`;

export const Count = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 12px;
  font-size: 14px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
`;

export const CountText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  color: #fff;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
