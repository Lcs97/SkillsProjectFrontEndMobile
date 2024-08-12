import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type HeaderProps = {
    onLogoPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLogoPress }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onLogoPress}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
