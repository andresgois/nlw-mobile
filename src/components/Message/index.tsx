import React from "react";
import { View, Text } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { Styles } from "./style";

export function Message() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.message}>
          Texto da imagem
        </Text>

        <View style={Styles.footer}>
          <UserPhoto sizes='SMALL' imageUri='' />

          <Text style={Styles.userName}>
            Nome do usuário
          </Text>
        </View>
      </View>
    );
}