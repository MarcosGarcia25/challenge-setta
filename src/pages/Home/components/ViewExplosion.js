import React, { useEffect, useState } from 'react';
import { Dimensions, Animated } from 'react-native';
const dimensions = Dimensions.get('screen')

function App(props) {

    const {animationCircleValue, animationCircleOpacityValue} = props

    return (
        <Animated.View
            style={{
                backgroundColor: '#666',
                width: animationCircleValue,
                height: animationCircleValue,
                borderRadius: animationCircleValue,
                position: 'absolute',
                opacity: animationCircleOpacityValue,
                alignSelf: 'center',
                bottom: -dimensions.width + (dimensions.width / 1.5)
            }}
        />
    );
}

export default App
