import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

type ModalAddHabilidadesProps = {
    onClose: () => void;
};

export const ModalAddHabilidades: React.FC<ModalAddHabilidadesProps> = ({ onClose }) => {
    const [skillOptions, setSkillOptions] = useState<any[]>([]);
    const [selectedSkill, setSelectedSkill] = useState<string>('');
    const [level, setLevel] = useState<string>('');

    useEffect(() => {
        fetchSkillOptions();
    }, []);

    const fetchSkillOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skills-options');
            setSkillOptions(response.data);
        } catch (error) {
            console.error('Erro ao buscar opções de habilidades:', error);
        }
    };

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:8080/habilidades', {
                skill: selectedSkill,
                level,
            });
            onClose();
        } catch (error) {
            console.error('Erro ao adicionar habilidade:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Selecione uma Skill:</Text>
            <Picker
                selectedValue={selectedSkill}
                onValueChange={(itemValue: React.SetStateAction<string>) => setSelectedSkill(itemValue)}
            >
                {skillOptions.map((option) => (
                    <Picker.Item key={option.id} label={option.nome} value={option.id} />
                ))}
            </Picker>
            <Text>Level:</Text>
            <TextInput
                style={styles.input}
                value={level}
                onChangeText={setLevel}
            />
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={onClose} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});
