import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;

  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
