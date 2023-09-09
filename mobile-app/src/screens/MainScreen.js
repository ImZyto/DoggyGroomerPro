import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Witaj w DoggyGroomerPro!</Text>

            <Image
                source={require('./groomer.jpg')}
                style={styles.image}
            />

            <TextInput
                placeholder="Wprowadź tekst..."
                style={styles.input}
            />

            <Button
                title="Kliknij mnie"
                onPress={() => alert('Kliknięto przycisk')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingLeft: 10,
    },
});

export default MainScreen;