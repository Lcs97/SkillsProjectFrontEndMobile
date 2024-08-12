import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 140,
        backgroundColor: '#c1c3c7',
        elevation: 4, //sombra para Android
        shadowColor: '#000', //sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 1000, //deixa o header acima de todos componentes
        alignItems: 'center',
    },
    logo: {
        width: 305,
        height: 90,
        resizeMode: 'contain', //mantém a proporção da imagem
        marginTop: 40
    },
});