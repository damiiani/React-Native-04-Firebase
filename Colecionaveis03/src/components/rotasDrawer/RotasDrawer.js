import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerPersonalizado from './DrawerPersonalizado';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => (
  <Drawer.Navigator drawerContent={DrawerPersonalizado}>
    <Drawer.Screen
      name="Inicial"
      component={Inicial}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />

    <Drawer.Screen
      name="Colecao"
      component={Colecao}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="storage" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Item"
      component={Item}
      initialParams={{ item: {}, operacao: 'adicionar' }}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="done-all" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Perfil"
      component={Perfil}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="person" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />

  </Drawer.Navigator>
);

export default RotasDrawer;
