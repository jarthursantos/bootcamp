import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../../themes/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
`;

export const Card = styled.View`
  flex: 1;
  background-color: #fff;
  margin: 16px;
  border-radius: 4px;
`;

export const ProductList = styled.View``;

export const Footer = styled.View`
  background: #fff;
  padding: 12px 12px;
  border-radius: 4px;
  margin: 0 16px 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalInfo = styled.View`
  margin-left: 4px;
`;

export const Amount = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
`;

export const Total = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const FinishButton = styled(RectButton)`
  background-color: #7159c1;
  border-radius: 4px;
`;

export const FinishButtonText = styled.Text`
  margin: 12px 16px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyMessage = styled.Text`
  margin-top: 8px;
  color: #999;
  font-weight: bold;
  font-size: 18px;
`;
