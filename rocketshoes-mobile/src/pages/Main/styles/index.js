import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.View``;

export const ProductList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px 16px 0px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: 4px;
`;
