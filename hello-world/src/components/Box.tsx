import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native"
import React from 'react'

export default function Box({ children, style }: { children: string, style: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.box, style]}>
            <Text>{children}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'green',
        padding: 10,
        margin : 5
    },
})