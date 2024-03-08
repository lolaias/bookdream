import { ImageBackground, Image, View, StyleSheet, Text} from "react-native";
import {styleContainer, colors} from "../../styles/GlobalStyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import{ ButtonSlide} from "../../components/ButtonSlide"


export function Slide3 ({setPageI}:IPagina){
    const slide = require('../../assets/fundo1.png')
    const privs = require('../../assets/privs.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container} >
            <Image source={privs} style={styles.container}></Image>
            <View style={styles.containerButton}>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)}/>
            <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)}/>            


            
           
           </View>
      </ImageBackground>
      
 )}