import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ActivityIndicator, Animated, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ModalData from './components/modal'
import ViewExplosion from './components/ViewExplosion'

import MainStyle from '../../assets/style/main'
import Functions from '../../utils/functions'
const dimensions = Dimensions.get('screen')

function App(props) {

    const [user, setUser] = useState(null)
    const [modal, setModal] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [animationValue, setAnimationValue] = useState(new Animated.Value(dimensions.width - 30))
    const [animationCircleValue, setAnimationCircleValue] = useState(new Animated.Value(0))
    const [animationCircleOpacityValue, setAnimationCircleOpacityValue] = useState(new Animated.Value(0))
    
    const navigation = useNavigation()

    useEffect(() => {
        getData()
    }, [])

    function navigateToInfoUser() {
        Animated.timing(animationValue, {
            toValue: 60,
            duration: 500
        }).start(setToggle(true));

        setTimeout(() => {
            Animated.timing(animationCircleValue, {
                toValue: dimensions.width * 2,
                duration: 500
            }).start();

            Animated.timing(animationCircleOpacityValue, {
                toValue: 1,
                duration: 300
            }).start();

            setTimeout(() => {
                navigation.navigate('InfoUser', { goBackAnimation, userData: user })
            }, 400)
        }, 2000)
    }

    function goBackAnimation() {
        getData()

        Animated.timing(animationCircleOpacityValue, {
            toValue: 0,
            duration: 750
        }).start();

        Animated.timing(animationCircleValue, {
            toValue: 0,
            duration: 750
        }).start();

        Animated.timing(animationValue, {
            toValue: dimensions.width - 30,
            delay: 100,
            duration: 750
        }).start();

        setTimeout(() => setToggle(false), 600)
    }

    async function getData() {
        const userData = await AsyncStorage.getItem('user')

        if (userData) {
            const user = JSON.parse(userData)

            const days = Functions.dateDifference(user.birthDate)

            setUser({ ...user, age: Math.floor(days / 365) })
        }
    }

    return (
        <>
            <View style={MainStyle.container}>
                {user && <TouchableOpacity
                    style={[MainStyle.buttomPrimary]}
                    onPress={() => setModal(true)}
                >
                    <Text
                        style={MainStyle.textButtomPrimary}
                    >
                        Dados do usuário
                </Text>
                </TouchableOpacity>}


                <TouchableOpacity
                    onPress={() => !toggle ? navigateToInfoUser() : null}
                >
                    <Animated.View
                        style={[MainStyle.buttomPrimary, { width: animationValue, alignSelf: 'center', }]}
                    >
                        {!toggle ? 
                            <Text style={MainStyle.textButtomPrimary}>{user ? 'Editar' : 'Inserir'} dados do usuário</Text> :
                            <ActivityIndicator size="small" color="#FFF" />
                        }
                    </Animated.View>
                </TouchableOpacity>


                {user && <ModalData
                    user={user}
                    modal={modal}
                    setModal={setModal}
                />}

            </View>

            <ViewExplosion 
                animationCircleValue={animationCircleValue}
                animationCircleOpacityValue={animationCircleOpacityValue}
            />
        </>
    );
}

export default App
