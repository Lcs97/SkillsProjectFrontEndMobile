import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import axios from 'axios';
import BackgroundImage from '../../components/Background';
import { ModalAddHabilidades } from '../../components/ModalAddHabilidades';
import { ListaHabilidade } from '../../components/ListaHabilidades';
import { styles } from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types';

const Home: React.FC = () => {
    const [habilidades, setHabilidades] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        fetchHabilidades();
    }, []);

    const fetchHabilidades = async () => {
        try {
            const response = await axios.get(' https://d4ef-177-54-122-94.ngrok-free.app/habilidades');
            setHabilidades(response.data);
        } catch (error) {
            console.error('Erro ao buscar habilidades:', error);
        }
    };

    const handleAddSkill = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        fetchHabilidades(); // Atualizar lista após adicionar uma nova habilidade
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <BackgroundImage source={require('../../../assets/background3.gif')}>
            <View style={styles.container}>
                <View style={styles.containerButton} >
                    <TouchableOpacity style={styles.button} onPress={handleAddSkill}>
                        <Text style={styles.buttonText}>Adicionar Skill</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={habilidades}
                    renderItem={({ item }) => <ListaHabilidade habilidade={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.flatList}
                />
                <Modal
                    visible={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    animationType="slide"
                >
                    <ModalAddHabilidades onClose={handleCloseModal} />
                </Modal>
            </View>
        </BackgroundImage>
    );
};

export default Home;
