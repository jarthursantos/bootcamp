import React from 'react';
import {View, Image} from 'react-native';
import AddToCartButton from './AddToCartButton';

import {
  Container,
  ProductList,
  Card,
  ProductTitle,
  ProductPrice,
} from './styles';
import colors from '../../themes/colors';
import api from '../../services/api';

export default function Main() {
  return (
    <Container style={{backgroundColor: colors.background, flex: 1}}>
      <ProductList
        showsVerticalScrollIndicator={false}
        data={api.products}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{height: 16}} />}
        renderItem={({item}) => (
          <Card>
            <Image source={{uri: item.image}} style={{aspectRatio: 1}} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>R$ {item.price}</ProductPrice>
            <AddToCartButton id={item.id} />
          </Card>
        )}
      />
    </Container>
  );
}
