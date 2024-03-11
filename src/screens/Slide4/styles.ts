import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButton: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 500,

  },

  butt: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  quadro: {
    backgroundColor: colors.SoftWite,
    height: 350,
    width: 50,

},

  linha1: {
    backgroundColor: colors.SoftBlack,
    height:70,
    width: 100,
    paddingLeft:460,
    },
  linha2: {
    backgroundColor: colors.SoftBlack,
    height:70,
    width: 100,
    paddingLeft:460,

  },
})
