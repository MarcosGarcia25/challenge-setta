import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

const dimensions = Dimensions.get('screen')

import Modal from 'react-native-modal'

import MainStyle from '../../assets/style/main'

function App(props) {

    const [percentage, setPercentage] = useState(0)

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

            <Modal
                scrollOffset={30}
                scrollTo={null}
                isVisible={true}
                onBackButtonPress={null}
                onModalShow={null}
                onModalHide={null}
                hideModalContentWhileAnimating
                useNativeDriver
                swipeDirection={'down'}
                style={{backgroundColor: 'white'}}
                propagateSwipe
                onSwipeComplete={({ swipingDirection }) => console.log(swipingDirection)}
                onSwipeMove={(percentageShown) => {
                    console.log(percentageShown)
                    setPercentage(percentageShown)
                }}
                {...props}
            >
                <View style={{ height: (dimensions.height-125) - percentage }}>
                    <Text>I am the modal content!</Text>
                </View>
            </Modal>
        </View>
    );
}

export default App
