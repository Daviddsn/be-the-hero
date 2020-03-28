import React, {useEffect, useState} from 'react';
import { View ,Image,Text,FlatList,TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import ImgLogo from '../../assets/logo.png';

import  styles  from './styles';

import api from '../../services/api';


export default function Incidents() {
  const navigation = useNavigation();
  const [incidents,setIncidents] = useState([]);
  const [total,setTotal] = useState(0);

 async function loadIncidents(){
   const response = await api.get('incidents');
    setIncidents(response.data);
    setTotal(response.headers['x-total-count']);
  }

  useEffect(()=>{
    loadIncidents();
  },[]);


  function navigateToDetail(incident){
    navigation.navigate('Detail',{incident});
  }

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={ImgLogo} />
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{total} casos</Text>
            </Text>
        </View>

        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

        <FlatList data={incidents} style={styles.incidentsList}
          keyExtractor ={incident =>String(incident.id)}
          showsVerticalScrollIndicator ={false}
          renderItem={({ item: incident})=>( 
            <View style={styles.incidents}>

              <Text style={styles.incidentPoperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentPoperty}>CASO</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentPoperty}>VALOR</Text>
                <Text style={styles.incidentValue}>
                  {Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}
                </Text>
              <TouchableOpacity style={styles.detailButton} onPress={()=>{navigateToDetail(incident)}}>
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#e82041"/>
              </TouchableOpacity>
            </View>)}
        />
  
        
    </View>
  );
}
