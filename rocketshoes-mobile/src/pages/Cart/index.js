import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Card,
  ProductList,
  Footer,
  Total,
  Amount,
  TotalInfo,
  FinishButton,
  FinishButtonText,
  EmptyContainer,
  EmptyMessage,
} from './styles';

export default function Cart() {
  const [empty, setEmpty] = useState(true);

  return (
    <Container>
      <Card>
        {empty ? (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={48} color="#999" />
            <EmptyMessage>Seu carrinho está vázio</EmptyMessage>
          </EmptyContainer>
        ) : (
          <ProductList />
        )}
      </Card>

      <Footer>
        <TotalInfo>
          <Total>TOTAL</Total>
          <Amount>R$ -</Amount>
        </TotalInfo>

        <FinishButton>
          <FinishButtonText>Finalizar Pedido</FinishButtonText>
        </FinishButton>
      </Footer>
    </Container>
  );
}
