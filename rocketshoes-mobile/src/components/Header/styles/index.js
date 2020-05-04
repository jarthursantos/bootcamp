import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import colors from '../../../themes/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.headerColor};
`;

export const Logo = styled.Image`
  height: 20px;
  width: 154;
  margin: 0 16px;
`;

export const CartIcon = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding: 8px;
`;

export const CartCountCircle = styled.View`
  position: absolute;
  right: 8px;
  top: 8px;
  background: #7159c1;
  border-radius: 10px;
  height: 15px;
  width: 15px;
  align-items: center;
  justify-content: center;
`;

export const CartCount = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 13px;
`;
