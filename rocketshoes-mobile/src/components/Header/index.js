import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, CartIcon, CartCountCircle, CartCount} from './styles';

import NavigationService from '../../util/NavigationActions';

import rocketshoes from '../../assets/rocketshoes.png';

export default function Header() {
  return (
    <Container>
      <Logo source={rocketshoes} alt="Logo" resizeMode="contain" />
      <CartIcon onPress={() => NavigationService.navigate('Cart')}>
        <Icon name="shopping-cart" color="#FFF" size={24} />
        <CartCountCircle>
          <CartCount>3</CartCount>
        </CartCountCircle>
      </CartIcon>
    </Container>
  );
}
