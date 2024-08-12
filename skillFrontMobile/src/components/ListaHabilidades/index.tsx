import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

type ListaHabilidadeProps = {
    habilidade: {
        id: string;
        nome: string;
        level: string;
        descricao: string;
    };
};

export const ListaHabilidade: React.FC<ListaHabilidadeProps> = ({ habilidade }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/habilidades/${habilidade.id}`);
            // Atualize a lista de habilidades aqui
        } catch (error) {
            console.error('Erro ao excluir habilidade:', error);
        }
    };

    const handleUpdateLevel = async (newLevel: string) => {
        try {
            await axios.put(`http://localhost:8080/habilidades/${habilidade.id}`, {
                level: newLevel,
            });
            // Atualize a lista de habilidades aqui
        } catch (error) {
            console.error('Erro ao atualizar nível:', error);
        }
    };

    return (
        <View style={styles.itemContainer}>
            <Text>Nome: {habilidade.nome}</Text>
            <Text>Nível: {habilidade.level}</Text>
            <Text>Descrição: {habilidade.descricao}</Text>
            <Button title="Excluir" onPress={handleDelete} />
            <Button title="Atualizar Nível" onPress={() => handleUpdateLevel('novo nível')} />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
