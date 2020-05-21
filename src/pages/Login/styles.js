import { StyleSheet } from 'react-native'

 export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#f7f4ea',
      justifyContent:'center'
    },
    header: {
      flex:1,
    },
    footer: {
      flex:2,
      padding:20
    },
    imageBackground:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:"100%",
      height:'100%'
    },
    imageLogo:{
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100
    },
    title: {
      color:'black',
      fontWeight:'bold'
    },
    action: {
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#ffa69e'
    },
    textInput: {
      flex:1,
      marginTop:5,
      paddingBottom:5,
      color:'gray'
    },
    button_container: {
      alignItems: 'center',
      justifyContent:'center'
    },
    animation: {
      backgroundColor:'#ffa69e',
      paddingVertical:10,
      marginTop:30,
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center'
    },
    textLogin: {
      color:'white',
      fontWeight:'bold',
      fontSize:18
    },
    signUp: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:20,
      color: '#ffa69e'
    }
  });