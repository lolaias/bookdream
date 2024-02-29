import { ImageBackground, Image, View, StyleSheet, Text} from "react-native";
import {styleContainer} from "../../styles/GlobalStyle"
import{ ButtonSlide} from "../../components/ButtonSlide"

export function Slide1(){
    const slide = require('../../assets/fundo1.png')
    const logo = require('../../assets/logo.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={style.container}>
            <Image source={logo}>
            </Image>
           <ButtonSlide/>
           <ButtonSlide/>
           <ButtonSlide/>
           </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

})
