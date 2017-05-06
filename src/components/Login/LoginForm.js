import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Button
} from 'react-native';

import { Profile } from '../Profile/Profile';

let USERS_URL = "https://api.github.com/users";
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    _onPressButton = () => {
        var that = this;
        let url = `${USERS_URL}/${this.state.username}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.navigator.push({
                    title: this.state.username + "'s profile",
                    component: Profile,
                    passProps: { profileData: data }
                });
            }).
            catch((err) => console.log(err));
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="username or email"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input}
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={(input) => this.userDetails = input}
                    onChangeText={(text) => this.setState({ username: text })}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    value={this.state.username}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});