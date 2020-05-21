import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native'

import { withFormik } from 'formik'
import * as Yup from 'yup'

import { Header, BalanceContainer } from './styles'
import styles from './styles'

const Form = (props) => ( 
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
            <Header>

                <BalanceContainer>
                    <Image source={require("../../assets/logo_eBeauty.png")} style={styles.imageLogo}/>
                </BalanceContainer>

            </Header>

          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:50
                }]}>Nome</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Digite seu nome"
                      style={styles.textInput}
                      onChangeText={text => props.setFieldValue('name', text)}
                    />
                </View>
                { props.touched.name 
                  && props.errors.name 
                  && <Text style={{color:'#e63946'}} >{props.errors.name}</Text> }

                <Text style={[styles.title,{
                  marginTop:50
                }]}>Sobrenome</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Digite seu sobrenome"
                      style={styles.textInput}
                      onChangeText={text => props.setFieldValue('sobrenome', text)}
                    />
                </View>
                { props.touched.sobrenome 
                  && props.errors.sobrenome 
                  && <Text style={{color:'#e63946'}}>{props.errors.sobrenome}</Text> }

                <Text style={[styles.title,{
                  marginTop:50
                }]}>Telefone</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Digite seu telefone"
                      style={styles.textInput}
                      onChangeText={text => props.setFieldValue('telefone', text)}
                    />
                </View>
                { props.touched.telefone 
                  && props.errors.telefone 
                  && <Text style={{color:'#e63946'}}>{props.errors.telefone}</Text> }

                <Text style={[styles.title,{
                  marginTop:50
                }]}>E-mail</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Digite seu e-mail"
                      style={styles.textInput}
                      onChangeText={text => props.setFieldValue('email', text)}
                    />
                </View>
                { props.touched.email 
                  && props.errors.email 
                  && <Text style={{color:'#e63946'}}>{props.errors.email}</Text> }

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Senha</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Digite sua senha"
                      style={styles.textInput}
                      onChangeText={text => props.setFieldValue('password', text)}
                    />
                </View>
                { props.touched.password 
                  && props.errors.password 
                  && <Text style={{color:'#e63946'}}>{props.errors.password}</Text> }
                
                <TouchableOpacity 
                style={styles.animation}
                onPress={props.handleSubmit}
                >
                <Text style={styles.textLogin}>Registrar</Text>
                </TouchableOpacity>
                
          </View>
      </View>
  )

export default withFormik({
  mapPropsToValues: () => ({ name: '', sobrenome: '', telefone: '', email: '', password: '' }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo Nome!'),
    sobrenome: Yup.string()
      .required('Preencha o campo Sobrenome!'),
    telefone: Yup.string()
      .required('Preencha o campo Telefone!'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo E-mail!'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo Senha!'),
  }),

  handleSubmit: (values, { setSubmitting, setErrors }) => {
    apiService.post('/register', values)
      .then({
        
      })
      .catch(err => {
        setSubmitting(true);
        setErrors({ message: err.message });
      });
  }
})(Form);


const width = Dimensions.get("screen").width;
