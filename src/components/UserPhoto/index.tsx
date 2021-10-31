import React from "react";
import { Image } from "react-native";
import  avatarImg  from "../../assets/avatar.png";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from "../../theme";

const SIZES = {
    SMALL: {
        containerSize: 32,
        avatarSize: 28,
    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 42,
    }
}

type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({imageUri, sizes = 'NORMAL'}: Props){
    const { containerSize, avatarSize} = SIZES[sizes];
    
    return (
        <LinearGradient
            colors={[ COLORS.PINK, COLORS.YELLOW ]}
            style={[
                styles.container,
            ]}
        >
            <Image 
                source={{ uri: imageUri || AVATAR_DEFAULT }} 
                style={[
                    styles.avatar,
                    {
                        width: containerSize,
                        height: containerSize,
                        borderRadius: avatarSize / 2
                    }
                ]}
            />
        </LinearGradient>
    );
}