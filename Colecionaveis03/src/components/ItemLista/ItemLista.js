import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloItemLista from './estiloItemLista';

const ItemLista = ({ data, detalhe }) => {
  const [item] = useState(data);

  return (
    <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>
      <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
        <Text style={estiloItemLista.itemTitulo}>{item.titulo}</Text>
      </LinearGradient>

      <Text style={estiloItemLista.itemSubTitulo}>
        {item.autor} ({item.anoPublicacao})
      </Text>

      <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
        <Text />
        {/* <Image
          resizeMode="contain"
          style={estiloItemLista.itemFoto}
          source={item.foto}
        /> */}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ItemLista;
