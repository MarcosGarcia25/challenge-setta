import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ActivityIndicator, Animated, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalData from './components/modal'
import ViewExplosion from './components/ViewExplosion'

import MainStyle from '../../assets/style/main'
const dimensions = Dimensions.get('screen')

function App(props) {

    const navigation = useNavigation()

    const [user, setUser] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const [percentage, setPercentage] = useState(null)
    const [modal, setModal] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [animationValue, setAnimationValue] = useState(new Animated.Value(dimensions.width - 30))
    const [animationCircleValue, setAnimationCircleValue] = useState(new Animated.Value(0))
    const [animationCircleOpacityValue, setAnimationCircleOpacityValue] = useState(new Animated.Value(1))

    function navigateToInfoUser() {
        Animated.timing(animationValue, {
            toValue: 60,
            timing: 500
        }).start(setToggle(true));

        setTimeout(() => {
            Animated.timing(animationCircleValue, {
                toValue: dimensions.width * 2,
                duration: 500
            }).start();

            Animated.timing(animationCircleOpacityValue, {
                toValue: 0,
                duration: 3000
            }).start();

            setTimeout(() => {
                navigation.navigate('InfoUser', { goBackAnimation, userData: user })
            }, 400)
        }, 2000)
    }

    function goBackAnimation() {
        getData()

        Animated.timing(animationCircleOpacityValue, {
            toValue: 1,
            duration: 750
        }).start();

        Animated.timing(animationCircleValue, {
            toValue: 0,
            duration: 750
        }).start();

        Animated.timing(animationValue, {
            toValue: dimensions.width - 30,
            delay: 1000,
            duration: 750
        }).start();

        setTimeout(() => {
            
            setToggle(false)
        }, 1300)
    }

    async function getData() {
        const userData = await AsyncStorage.getItem('user')

        if (userData) {
            const user = JSON.parse(userData)

            let date = user.birthDate.split('/')
            date = `${date[2]}-${date[1]}-${date[0]}`
            const date1 = new Date(date)
            const date2 = new Date()
            const diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 3600 * 24))

            setUser({ ...user, age: Math.floor(diffDays / 365) })
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
                        {!toggle ? <Text style={MainStyle.textButtomPrimary}>Inserir dados do usuário</Text> :
                            <ActivityIndicator size="small" color="#FFF" />}
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
