import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundImage from '../../components/Background';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { RootStackParamList } from '../../types/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(' https://d4ef-177-54-122-94.ngrok-free.app/auth/login', {
                email,
                senha
            });

            if (rememberMe) {
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('rememberMe', 'true');
            } else {
                await AsyncStorage.removeItem('email');
                await AsyncStorage.removeItem('rememberMe');
            }
            navigation.navigate('Home');
        } catch (error) {
            alert("Erro ao fazer login.");
        }
    };

    const goToCadastro = () => {
        navigation.navigate('Cadastro');
    };

    useEffect(() => {
        const loadStorage = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('email');
                const storedRememberMe = await AsyncStorage.getItem('rememberMe');

                if (storedEmail) setEmail(storedEmail);
                if (storedRememberMe === 'true') setRememberMe(true);
            } catch (error) {
                console.error('Error loading storage:', error);
            }
        };

        loadStorage();
    }, []);

    return (
        <BackgroundImage source={require('../../../assets/background.gif')}>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Digite aqui o seu email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#aaa"
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inputSenha}
                            placeholder="******"
                            secureTextEntry={!showPassword}
                            value={senha}
                            onChangeText={setSenha}
                            placeholderTextColor="#aaa"
                        />
                        <TouchableOpacity
                            onPress={togglePasswordVisibility}
                            style={styles.iconButton}
                        >
                            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#333" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={rememberMe}
                            onValueChange={setRememberMe}
                            style={styles.checkbox}
                        />
                        <Text>Gravar Senha</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastro} onPress={goToCadastro}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </BackgroundImage>
    );
}
