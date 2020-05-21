import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Login() {
  signIn = () => {} 
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home')
  }

  const navigationReg = useNavigation();

  function navigateToRegister() {
    navigationReg.navigate('Register')
  }

    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={require("../../assets/bg.png")}
                style={styles.imageBackground}
              >
                <Image source={require("../../assets/logo_eBeauty.png")} style={styles.imageLogo}/>
                <Text style={{
                  color:'#ffe8e1'
                }}>Faça login e conheça o melhor da beleza</Text>

              </ImageBackground>
          </View>
          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:50
                }]}>E-mail</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Digite seu e-mail"
                      style={styles.textInput}
                    />
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Senha</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Digite sua senha"
                      style={styles.textInput}
                    />
                </View>
                
                <TouchableOpacity 
                style={styles.animation}
                onPress={navigateToHome}
                >
                <Text style={styles.textLogin}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.signUp}>
                      <Text style={{color:'black'}}>Não possui conta?</Text>
                      <Text style={{color:'#ffa69e'}} onPress={navigateToRegister}> Registre-se</Text>
                </View>
          </View>
      </View>
    )
  }

const width = Dimensions.get("screen").width;
