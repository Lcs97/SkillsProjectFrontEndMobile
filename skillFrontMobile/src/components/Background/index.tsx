import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { styles } from './styles';

interface BackgroundImageProps {
    source: any;
    children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ source, children }) => {
    return (
        <View style={styles.container}>
            <Image
                style={StyleSheet.absoluteFillObject} //faz o gif ocupar todo o fundo
                source={source} //caminho para o gif
                contentFit="cover" //ajusta a imagem para cobrir a área
            />
            {children}
        </View>
    );
};

export default BackgroundImage;
