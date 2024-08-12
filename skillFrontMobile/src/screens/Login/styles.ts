import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {
        position: "absolute",
        flex: 0.5,
        height: "50%",
        width: '75%',
        padding: 16,
        justifyContent: 'space-evenly',
        backgroundColor: "#c1c3c781"
    },
    inputContainer: {
        flex: 0.8,
        height: "100%",
        justifyContent: 'space-evenly',
    },
    inputEmail: {
        height: 40,
        width: "100%",
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginTop: 25
    },
    inputSenha: {
        height: 40,
        width: "100%",
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    iconButton: {
        position: 'absolute',
        right: 10,
        top: '65%',
        transform: [{ translateY: -10 }],
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        width: 20,
        height: 20,
    },
    buttonEntrar: {
        backgroundColor: '#007BFF',
        padding: 10,
        height: 40,
        width: "100%",
        borderRadius: 8,
        marginBottom: 5,
        alignItems: 'center',
    },
    buttonCadastro: {
        backgroundColor: '#36A420',
        padding: 10,
        height: 40,
        width: "90%",
        borderRadius: 8,
        marginBottom: 2,
        alignItems: 'center',
        alignSelf: "center"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },

});
