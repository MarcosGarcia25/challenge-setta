import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import AnimalService from '../../services/animal.service'
import { Animal } from '../../models/animal.model'


const dimensions = Dimensions.get('screen')

import Modal from 'react-native-modal'

import MainStyle from '../../assets/style/main'

function App(props) {

    useEffect(() => {

    }, [])

    const [percentage, setPercentage] = useState(null)
    const [modal, setModal] = useState(false)

    return (
        <View style={MainStyle.container}>

        </View>
    );
}

export default App
