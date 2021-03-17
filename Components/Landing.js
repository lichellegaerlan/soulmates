import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Landing = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.landingText}>
            <Text style={styles.landingTitle}>Soulmates {"\n"}{"\n"}</Text>
            <Image source={require('./logo.png')} />
            <Text style={styles.landingSub}>
            {"\n"}{"\n"}
            An invisible red thread connects those who are destined to meet,
            regardless of time, place, and circumstance. 
            The thread may stretch or tangle, but it will never break.
            {"\n"}{"\n"}
            Does destiny lie in your hands, or the stars?
            {"\n"}
            What if destiny lies in both?
            </Text>
            {"\n"}{"\n"}
        </Text>
        <TouchableOpacity>
            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </View>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity>
            <View style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Now</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    landingText: {
        textAlign: 'center',
        color: '#999',
    },

    landingTitle: {
        fontSize: 50,
        fontWeight: '500',
        letterSpacing: 3,
        textTransform: 'lowercase',
        color: '#D78787',
    },

    landingSub: {
        fontSize: 15,
    },

    loginButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 90,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#eaeaea',
    },

    loginButtonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#D78787',
    },

    joinButton: {
        backgroundColor: '#D78787',
        paddingVertical: 8,
        paddingHorizontal: 80,
        borderRadius: 5,
    },

    joinButtonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#fff',
    },
});

export default Landing; 
