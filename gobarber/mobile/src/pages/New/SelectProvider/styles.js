import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;
