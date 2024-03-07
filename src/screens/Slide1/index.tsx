import { ImageBackground, Image, View, StyleSheet, Text} from "react-native";
import {styleContainer, colors} from "../../styles/GlobalStyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import{ ButtonSlide} from "../../components/ButtonSlide"

export function Slide1({setPageI}:IPagina){
    const slide = require('../../assets/fundo1.png')
    const logo = require('../../assets/logo.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style ={styles.container}>
            <Image source={logo}></Image>
            <Text style={styles.text}>Book Dream</Text>
            <View style={styles.containerButton}>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)}/>            


            </View>
           
           </View>
        </ImageBackground>
    )
}

