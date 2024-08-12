import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import BackgroundImage from '../../components/Background';
import { styles } from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types';

const Cadastro: React.FC = () => {
    const [login, setLogin] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegister = async () => {
        if (senha !== confirmPassword) {
            setErrorMessage("As senhas não coincidem!");
            return;
        }

        try {
            const response = await axios.post(' https://d4ef-177-54-122-94.ngrok-free.app/auth/cadastrar', {
                username: login,
                senha: senha,
                email: login
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setSuccessMessage("Cadastro realizado com sucesso!");
                setErrorMessage("");
                navigation.navigate('Login');
            } else {
                setErrorMessage("Erro ao realizar o cadastro.");
                setSuccessMessage("");
            }
        } catch (error: any) {
            console.error("Detalhes do erro:", error);
            const errorMsg = error.response?.data?.message || "Erro ao realizar o cadastro.";
            setErrorMessage(errorMsg);
            setSuccessMessage("");
        }
    };

    return (
        <BackgroundImage source={require('../../../assets/background2.gif')}>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu login (email)"
                    value={login}
                    onChangeText={setLogin}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Digite sua senha"
                        secureTextEntry={!showPassword}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
                        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirme sua senha"
                        secureTextEntry={!showConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.iconButton}>
                        <Icon name={showConfirmPassword ? 'eye-slash' : 'eye'} size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </View>
        </BackgroundImage>
    );
};

export default Cadastro;
