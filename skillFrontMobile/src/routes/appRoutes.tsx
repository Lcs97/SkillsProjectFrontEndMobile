// src/routes/appRoutes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Header from '../components/Header';
import { View } from 'react-native';
import { RootStackParamList } from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <Header />
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};

export default AppStack;
