import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,Nunito_400Regular,Lato_400Regular,Inter_900Black} from '@expo-google-fonts/dev';




export default function App() {

let[fontsLoaded] = useFonts({

  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,

});

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    
  
  return(
    
    <View style={estilo.container}>
       <StatusBar style="auto"/>
      <Text style={estilo.titulo1}>REDE SOCIAL AOAIAIA SENAC</Text>
      <Text style={estilo.titulo2}>vc tem um projeto integrador</Text>
      <Text style={estilo.titulo2}>QUEr envolver novas areas</Text>
      <Text style={estilo.titulo3}>ent vamos encontrar os alunos aquiaa</Text>
      <FlatList 
    data={pessoas}
    renderItem={({item})=>
<View>
  <View style={estilo.container2}>
    <Image style={estilo.img} source={item.img}/>
    <Text style={estilo.titulo2}>{item.nome}</Text>

  </View>
        
        <Text style={estilo.titulo2}>Curso{item.curso}</Text>
        <Text style={estilo.titulo2}>Periodo{item.periodo}</Text>
        <Text style={estilo.titulo2}>Turma{item.turma}</Text>
        <Text style={estilo.titulo2}>Gosto{item.gosto}</Text>
        <Text style={estilo.titulo2}>Sobre mim{item.bio}</Text>
        <Image style={estilo.img} source={item.img}/>

    </View>
    }
    />
    
    </View>
  
  );
  
  }

}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF36FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius:150
  },
  titulo1:{
    marginTop: 40,
    marginVertical:10,
    fontSize: 20,
    fontFamily: 'Inter_900Black'

  },
  titulo2:{
    marginVertical:10,
    fontSize: 16,
    fontFamily:'Lato_400Regular'
  },
  titulo3:{
    fontFamily:'Nunito_400Regular',
  }

  

});


const pessoas = [
{
  uid:159,
  nome:'arnando souzas de lima',
  curso:'artista',
  periodo:'manhã',
  turma:'ti10',
  gosto:'sexo',
  bio:'aaaaaaaaaaaaaaa',
  img:require('./assets/marcos.jpg'),
},

{
  uid:58,
  nome:'homem aranha',
  curso:'escalada',
  periodo:'manhã',
  turma:'ti19',
  gosto:'subir parede',
  bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
  img:require('./assets/aranha.jpg'),
},
{
  uid:59,
  nome:'claudia raia',
  curso:'cantora',
  periodo:'manhã',
  turma:'ti14',
  gosto:'cantar',
  bio:'cantar aiia ui ui',
  img:require('./assets/diego.png'),
},
{
  uid:69,
  nome:'sasuke',
  curso:'ninja',
  periodo:'manhã',
  turma:'ti12',
  gosto:'sofrer',
  bio:'matar um certo alguem é meu sonho',
  img:require('./assets/sasuke.jpg'),
},
{
  uid:15,
  nome:' souzas ',
  curso:'ladrao',
  periodo:'noite',
  turma:'ti102',
  gosto:'naruto',
  bio:'13 anos',
  img:require('./assets/pod.png'),
},
]

