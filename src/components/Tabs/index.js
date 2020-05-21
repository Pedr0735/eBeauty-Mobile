import React from 'react'
import { AntDesign, Feather, Entypo } from '@expo/vector-icons'

import {
    Container, TabsContainer, TabItem, TabText,
  } from './styles';
  
  export default function Tabs({ translateY }) {
    return (
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
      >
        <TabsContainer>
          <TabItem>
            <AntDesign name="clockcircleo" size={24} color="#FFF" />
            <TabText>Meu histórico</TabText>
          </TabItem>
          <TabItem>
            <AntDesign name="calendar" size={24} color="#FFF" />
            <TabText>Agendar</TabText>
          </TabItem>
          <TabItem>
            <AntDesign name="user" size={24} color="#FFF" />
            <TabText>Perfil</TabText>
          </TabItem>
          <TabItem>
            <AntDesign name="link" size={24} color="#FFF" />
            <TabText>Indicar</TabText>
          </TabItem>
          <TabItem>
            <AntDesign name="questioncircleo" size={24} color="#FFF" />
            <TabText>Ajuda</TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    );
  }