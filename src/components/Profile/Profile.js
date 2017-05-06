import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.logoContainer}>
                <Text style={styles.title}>
                    This is a profile page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: "#FFF",
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});