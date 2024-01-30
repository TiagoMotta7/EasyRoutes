import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Platform, Pressable, ScrollView,
ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.currentHeight;

export default function App() {

  const [city,setCity] = useState('');
  const [days,setDays] = useState(3);
  const [loading, setLoading] = useState(false);//loading acessa o valor e setLoading acessa o estado
  const [travel, setTravel] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor='#F1F1F1' />
      <Text style={styles.heading}>Easy Routes</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade Destino</Text>
        <TextInput
          placeholder="Ex: Recife"
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}>{days.toFixed(0)}</Text> dias</Text>


        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Gerar roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4 }} style={styles.containerScroll} showsVerticalScrollIndicator={false}>
        {loading && (
          <View style={styles.content}>
            <Text style={styles.title}>Carregando Roteiro...</Text>
            <ActivityIndicator color="#000000" size="large"/>
          </View>
        )}
        {travel && (
          <View style={styles.content}>
            <Text style={styles.title}>Roteiro da viagem</Text>
            <Text >{travel}</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54
  },
  form: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  days: {
    backgroundColor: '#F1F1F1'
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
  containerScroll: {
    width: '90%',
    marginTop: 8
  }
});
