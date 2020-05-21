import React from 'react'
import { AntDesign, Feather, Entypo, Ionicons } from '@expo/vector-icons'
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import { Container, Header, BalanceContainer, BalanceTitle } from './styles'

import Tabs from '../../components/Tabs'

export default function Home() {
    let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

    return (
        <Container>
            <Header>
                <AntDesign name="setting" size={30} color="#fff" />

                <BalanceContainer>
                    <BalanceTitle>Olá,</BalanceTitle>
                </BalanceContainer>

                <Ionicons name="ios-notifications" size={30} color="#f1e4f3" />
            </Header>

            <Tabs translateY={translateY} />
            
        </Container>
    )
}