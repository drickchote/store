import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import {
  Screen,
  Text,
  TryAgainButton,
  TryAgainButtonContainer,
  TryAgainButtonText,
} from './styles';

export default function EmptyCart() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Screen>
      <Image source={require('~/assets/illustrations/emptyCart.png')} />
      <Text type="H3">Não há nenhum produto no carrinho.</Text>
      <TryAgainButton
        onPress={() => {
          navigation.navigate('ProductListScreen', {});
        }}>
        <TryAgainButtonContainer>
          <TryAgainButtonText type="H9">Procurar produtos</TryAgainButtonText>
        </TryAgainButtonContainer>
      </TryAgainButton>
    </Screen>
  );
}
