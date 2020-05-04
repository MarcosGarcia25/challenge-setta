import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, Image, BackHandler, TextInput, AsyncStorage } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'

import MainStyle from '../../assets/style/main'

function App(props) {

    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState(null)
    const [birthDate, setBirthDate] = useState(null)

    const navigation = useNavigation()

    useEffect(() => {
        getData()

        const handler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleValidateClose,
        );

        return () => handler.remove();
    }, [handleValidateClose]);

    function goBack() {
        getData()

        props.route.params.goBackAnimation()
        navigation.goBack()
    }

    const handleValidateClose = useCallback(() => {
        goBack()
        return true;
    }, []);

    async function getData() {
        const userData = await AsyncStorage.getItem('user')

        console.log(userData)

        if (userData) {
            const user = JSON.parse(userData)
            setPhoto(user.photo)
            setName(user.name)
            setBirthDate(user.birthDate)
        }
    }

    async function pickImage() {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
        })
        console.log(result)
        if (!result.cancelled) {
            setPhoto(result.uri)
        }
    }

    async function saveData() {
        console.log({
            photo,
            name,
            birthDate
        })
        await AsyncStorage.setItem('user', JSON.stringify({
            photo,
            name,
            birthDate
        }))

        goBack()
    }


    return (
        <View style={MainStyle.container}>

            <TouchableOpacity
                style={{
                    marginVertical: 25
                }}
                onPress={() => pickImage()}
            >
                {photo ? <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        alignSelf: 'center'
                    }}
                    source={{
                        uri: photo,
                    }}
                /> :
                    <View
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            alignSelf: 'center',
                            backgroundColor: '#CCC',
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 3
                        }}
                    >
                        <FontAwesome
                            name="camera"
                            size={48}
                            color="#666"
                        />
                    </View>
                }
            </TouchableOpacity>

            <View
                style={MainStyle.fieldInput}
            >
                <TextInput
                    placeholder={"Nome"}
                    placeholderTextColor={"#666"}
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </View>

            <View
                style={MainStyle.fieldInput}
            >
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    placeholder={"Data de nascimento"}
                    placeholderTextColor={"#666"}
                    value={birthDate}
                    onChangeText={value => setBirthDate(value)}
                />
            </View>

            <TouchableOpacity
                style={[MainStyle.buttomPrimary]}
                onPress={() => saveData()}
            >
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Salvar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[MainStyle.buttomPrimary]}
                onPress={() => goBack()}
            >
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Voltar
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default App
