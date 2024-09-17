import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoachScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BONJOUR COACH !</Text>

      <TouchableOpacity style={styles.purpleButton}>
        <Text style={styles.buttonText}>EVALUATION</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.purpleButton}>
        <Text style={styles.buttonText}>AGENDA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.buttonText}>HISTORIQUE EVAL</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

//À retravailler!!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 30,
  },
  purpleButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  greenButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default CoachScreen;