import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mind7-logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Identifiant"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input2}
        placeholder="Mot de passe"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Coach')}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.buttonText}>Première connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: '80%',
    height: '20%',
    marginBottom: 200,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#5b0384',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 0,
    paddingHorizontal: 15,
    color: '#fff',
  },
  input2: {
    width: '80%',
    height: 50,
    backgroundColor: '#5b0384',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderTopWidth: 0.3,
    borderColor: '#ECECEC',
    color: '#fff',
  },
  forgotPassword: {
    color: '#3498DB',
    marginTop: 5,
    marginLeft: 120,
    marginBottom: 20,
  },
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#5b0384',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  signupButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#00d000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;