import React from 'react';
import { View,Text,Image,TouchableOpacity,ScrollView,Linking } from 'react-native';
import {Feather,FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import ImgLogo from '../../assets/logo.png';


import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = 'Teste do app Be the hero semana omnistack 11.0';

  function navigateToIncident(){
    navigation.goBack();
  }
  function sendEmail(){
    MailComposer.composeAsync({
      subject:'Herói do caso: Cadelinha atropelada',
      recipients: ['davisdn@dcomp.ufs.br'],
      body: message,
    })
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5579988230418&text=${message}`)
  }
  return (
 
    <View style={styles.container}>
      <View style={styles.header}>
            <Image source={ImgLogo} />
            
            <TouchableOpacity onPress={navigateToIncident}>
              <Feather name='arrow-left' size={18} color='#e82041'/>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator ={false}>
        <View style={styles.incidents}>
             <View style={styles.align}>
                <View>
                  <Text style={[styles.incidentPoperty,{marginTop:0}]}>CASO</Text>
                  <Text style={styles.incidentValue}>{incident.title}</Text>
                </View>

                <View>
                  <Text style={[styles.incidentPoperty,{marginTop:0}]}>ONG:</Text>
                  <Text style={styles.incidentValue}>{incident.name}</Text>
                </View>
              </View>

              <Text style={styles.incidentPoperty}>Descrição</Text>
              <Text style={styles.incidentValue}>{incident.description}</Text>

              <Text style={styles.incidentPoperty}>VALOR</Text>
              <Text style={styles.incidentValue}>
                  {Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}
              </Text>         

        </View>
        <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <FontAwesome name="whatsapp" size={24} color='#fff'/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={sendEmail}>
                    <FontAwesome name="at" size={24} color='#fff'/>
                  </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    </View>
   
  );
}
