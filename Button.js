import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressed, text }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPressed} style={buttonStyle}>
            <Text style={textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
};

export { Button };
