import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from "../UserPhoto";

export function Header() {
    return (
        <View style={Styles.container}>
            <LogoSvg />

            <View style={Styles.logoutButton}>
                <TouchableOpacity>
                    <Text style={Styles.logoutText}>
                        Sair
                    </Text>
                </TouchableOpacity>

                <UserPhoto imageUri='https://avatars.githubusercontent.com/u/39030819?v=4' />
            </View>

        </View>
    );
}