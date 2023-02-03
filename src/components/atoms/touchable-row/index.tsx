import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { mvs } from '../../../config/metrices'
type props = {
    style?: StyleProp<ViewStyle>
    alignItems?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly'
    onPress: () => void
    children?: JSX.Element | JSX.Element[]
}
export const TouchableRow = (props: props) => {
    const { children, onPress, style, justifyContent = 'space-between', alignItems = 'center' } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.contentContainerStyle, { alignItems: alignItems, justifyContent: justifyContent }, style]}>
            {children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
    }
})