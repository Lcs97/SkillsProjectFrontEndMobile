import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    containerButton: {
        position: "relative",
        flex: 1,
        width: 300,
        height: 300,
        backgroundColor: "#c1c3c781",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#FF4C4C',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatList: {
        paddingBottom: 20,
    },
});