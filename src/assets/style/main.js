import React from 'react'
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    buttomPrimary: {
        padding: 20,
        backgroundColor: '#666',
        borderRadius: 100,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    textButtomPrimary: {
        fontSize: 16,
        color: '#fff'
    },
    fieldInput: {
        backgroundColor: '#EEE',
        borderRadius: 100,
        padding: 15,
        elevation: 3,
        marginVertical: 5
    },
    placeholderAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center'
    },
    header: {
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -42
    },

});