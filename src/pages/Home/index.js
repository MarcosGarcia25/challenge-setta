import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import MainStyle from '../../assets/style/main'

function App() {

    return (
        <View style={MainStyle.container}>
            <TouchableOpacity
                style={MainStyle.buttomPrimary}>
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Dados do usuário
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={MainStyle.buttomPrimary}>
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Inserir dados do usuário
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default App
