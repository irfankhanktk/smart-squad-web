import React from 'react'
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { mvs } from '../../../config/metrices'
type props = {
    keyboardShouldPersistTaps?: 'always' | 'never' | 'handled'
    contentContainerStyle?: StyleProp<ViewStyle>
    children?: JSX.Element | JSX.Element[]
}
export const KeyboardAvoidScrollview = (props: props) => {
    const { children, contentContainerStyle, keyboardShouldPersistTaps = 'always' } = props;
    return (
        <ScrollView
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}>
            {children}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: mvs(20)
    }
})