import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 0.5,
        justifyContent: 'center',
        height: "50%",
        width: '70%',
        padding: 16,
        backgroundColor: "#c1c3c781"
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative',
    },
    passwordInput: {
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingRight: 40,
    },
    iconButton: {
        position: 'absolute',
        right: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    successMessage: {
        marginTop: 10,
        color: 'green',
    },
    errorMessage: {
        marginTop: 10,
        color: 'red',
    },
});
