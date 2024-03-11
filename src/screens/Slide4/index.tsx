import { ImageBackground, Image, View, StyleSheet, Text } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide4({ setPageI }: IPagina) {
    const slide = require('../../assets/fundo1.png')
    const quadro = require('../../assets/quadro.png')
    const linha = require('../../assets/linha.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.quadro}>
                <View style={styles.linha1}>
                    <View style={styles.linha2}>
                        
                    </View>
                </View>
            </View>
            <View style={styles.containerButton}>
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)} />
            </View>
        </ImageBackground>


    )
}