import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (!email.trim()) {
      setEmailError('O e-mail é obrigatório');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('A senha é obrigatória');
      return;
    } else {
      setPasswordError('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('E-mail inválido');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
      return;
    } else {
      setPasswordError('');
    }

    console.log('Dados de login válidos:');
    console.log('Email:', email);
    console.log('Senha:', password);

    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {};

  const handleCreateAccount = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/inconLogin.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          label="e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          mode="outlined"
        />
        {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          label="senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />
        {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>
      <Button onPress={handleForgotPassword} labelStyle={styles.forgotPasswordText}>
        Esqueceu sua senha? <Text style={styles.clickHereText}>Clique aqui</Text>
      </Button>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleLogin}
          labelStyle={styles.loginButtonLabel}
          style={styles.loginButton}
        >
          Entrar
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleCreateAccount}
          labelStyle={styles.createAccountButtonLabel}
          style={styles.createAccountButton}
        >
          Criar conta
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: -100,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },
  labelContainer: {
    marginBottom: 10,
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 20,
  },
  loginButton: {
    borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: '#FFD700',
    marginTop: 80,
  },
  loginButtonLabel: {
    fontSize: 16,
    color: '#FFF',
  },
  createAccountButton: {
    borderRadius: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'transparent',
  },
  createAccountButtonLabel: {
    fontSize: 16,
    color: '#888',
  },
  forgotPasswordText: {
    marginTop: -5,
    marginRight: 128,
    color: '#888',
  },
  clickHereText: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
