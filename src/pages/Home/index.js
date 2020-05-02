import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const dimensions = Dimensions.get('screen')

import Modal from 'react-native-modal'

import MainStyle from '../../assets/style/main'

function App(props) {

    const { navigation } = props

    useEffect(() => {

    }, [])

    const [percentage, setPercentage] = useState(null)
    const [modal, setModal] = useState(false)

    return (
        <View style={MainStyle.container}>
            <TouchableOpacity
                style={MainStyle.buttomPrimary}
                onPress={() => setModal(true)}
            >
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Dados do usuário
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={MainStyle.buttomPrimary}
                onPress={() => navigation.navigate('InfoUser')}
            >
                <Text
                    style={MainStyle.textButtomPrimary}
                >
                    Inserir dados do usuário
                </Text>
            </TouchableOpacity>


            <Modal
                isVisible={modal}
                scrollOffset={30}
                scrollTo={null}

                onBackButtonPress={null}
                onModalShow={() => null}
                onModalHide={() => null}
                hideModalContentWhileAnimating
                useNativeDriver
                swipeDirection={'down'}
                swipeThreshold={100}
                style={{
                    margin: 0,
                    justifyContent: 'flex-end'
                }}
                propagateSwipe
                onSwipeComplete={({ swipingDirection }) => {
                    setModal(false)
                    setPercentage(null)

                }}
                onSwipeMove={(percentageShown) => {
                    // console.log(percentageShown)
                    setPercentage(percentageShown)
                }}
                onSwipeCancel={() => setPercentage(1.0)}
                {...props}
            >
                <View style={{
                    height: percentage ? `${percentage * 100}%` : '100%',
                    backgroundColor: 'white',
                    borderTopEndRadius: 15,
                    borderTopStartRadius: 15
                }}>
                    <View
                        style={{
                            borderTopEndRadius: 15,
                            borderTopStartRadius: 15,
                            padding: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <FontAwesome
                            name="angle-down"
                            onPress={() => setModal(false)}
                            size={32}
                            color="#666"
                            style={{
                                padding: 5
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: -42
                            }}
                        >
                            <Text>DADOS DO USUÁRIO</Text>
                        </View>
                    </View>

                    <ScrollView
                        style={{
                            padding: 10
                        }}
                    >

                        <View style={{
                            marginVertical: 25
                        }}>
                            <Image
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 100,
                                    alignSelf: 'center'
                                }}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                        </View>

                        <View style={{
                            marginVertical: 10
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Nome
                            </Text>
                            <Text style={{ fontSize: 20 }}>
                                Marcos Paulo Marçal Garcia
                            </Text>
                        </View>

                        <View style={{
                            marginVertical: 10
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Data de nascimento
                            </Text>
                            <Text style={{ fontSize: 20 }}>
                                25/05/1996(23 anos)
                            </Text>
                        </View>


                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

export default App
