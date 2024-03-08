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
   justifyContent: 'space-around',
  },
   
 butt:{
   alignItems: 'center',
   justifyContent: 'center',

 },
 
 text:{
   fontSize: 18,
   color: colors.white
 },

 textPrincipal:{
  fontSize: 40,
  color: colors.white,
  

},
textPrincipal2:{
  fontSize: 40,
  color: colors.white

}
})