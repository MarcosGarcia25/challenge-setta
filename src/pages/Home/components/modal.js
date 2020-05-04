import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal'

function ModalData(props) {

    const {user, modal, setModal} = props

    const [percentage, setPercentage] = useState(null)

    return (
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
                                uri: user.photo,
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
                            {user.name}
                        </Text>
                    </View>

                    <View style={{
                        marginVertical: 10
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Data de nascimento
                            </Text>
                        <Text style={{ fontSize: 20 }}>
                            {user.birthDate} ({user.age} anos)
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}

export default ModalData
