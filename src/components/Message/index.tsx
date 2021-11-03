import React from "react";
import { View, Text } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { Styles } from "./style";
import { MotiView } from 'moti';


export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type props = {
  data: MessageProps;
}

export function Message({ data }: props) {
    return (
      <MotiView 
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0}}
        transition={{ type: 'timing', duration: 700 }}
        style={Styles.container}>
          
        <Text style={Styles.message}>
          { data.text }
        </Text>

        <View style={Styles.footer}>
          <UserPhoto sizes='SMALL' imageUri={data.user.avatar_url} />

          <Text style={Styles.userName}>
            { data.user.name }
          </Text>
        </View>
      </MotiView>
    );
}