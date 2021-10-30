import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from "../UserPhoto";

export function Header() {
    return (
        <View style={Styles.container}>
            <LogoSvg />

            <UserPhoto />
            
            <TouchableOpacity>
                <Text style={Styles.logoutText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    );
}