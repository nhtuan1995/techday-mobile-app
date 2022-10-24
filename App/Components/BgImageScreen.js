import { StyleSheet, ImageBackground } from "react-native";
import DEFAULT_BG from '../Images/bg-gradient.png'
export default React.useMemo(function ImageScreen({
  children,
  source,
}) {
  return (
    <ImageBackground style={styles.imageBg} source={source ? source : DEFAULT_BG}>
      {children}
    </ImageBackground>
  )
})
var styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    zIndex: -1,
  },
})