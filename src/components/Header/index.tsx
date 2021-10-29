import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";
import LogoSvg from '../../assets/logo.svg';

export function Header() {
    return (
        <View style={Styles.container}>
            <LogoSvg />
            <Text>Sair</Text>
        </View>
    );
}