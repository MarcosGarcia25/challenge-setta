import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal'

import MainStyle from '../../../assets/style/main'

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
                    style={MainStyle.header}
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
                        style={MainStyle.headerContent}
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
                            style={MainStyle.avatar}
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
