import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { mvs } from '../../../config/metrices'
type props = {
    style?: StyleProp<ViewStyle>
    alignItems?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly'
    children?: JSX.Element | JSX.Element[]
}
export const Row = (props: props) => {
    const { children, style, justifyContent = 'space-between', alignItems = 'center' } = props;
    return (
        <View
            style={[styles.contentContainerStyle, { alignItems: alignItems, justifyContent: justifyContent }, style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
    }
})