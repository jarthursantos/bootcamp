import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Count, CountText, Content, ContentText} from './styles';

export default function AddToCartButton({id}) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
  };

  return (
    <Container enabled={!loading} onPress={handleAddToCart}>
      <Count>
        {loading ? (
          <ActivityIndicator color="white" size={16} />
        ) : (
          <>
            <Icon name="add-shopping-cart" color="white" size={16} />
            <CountText>3</CountText>
          </>
        )}
      </Count>
      <Content>
        <ContentText>
          {loading ? 'ADICIONANDO AO CARRINHO...' : 'ADICIONAR AO CARRINHO'}
        </ContentText>
      </Content>
    </Container>
  );
}
