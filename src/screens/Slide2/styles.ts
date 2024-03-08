import { StyleSheet} from "react-native";
import { colors } from "../../styles/GlobalStyle";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },

containerButton:{
   flexDirection: "row",
   justifyContent: 'space-around'
  
  },
   
 butt:{
   alignItems: 'center',
   justifyContent: 'center',
   width: 2,

 },

 imagem:{
  width: 160,
  height: 160,
  justifyContent: 'center',
  alignItems: 'center',
  
},

textPrincipal:{
   color: colors.text,
   fontSize: 27,

}

 
})
  