import { Animated } from "react-native";

export default function AnimatedScreen({
  children,
  fadeAnim,
  scale,
  style = {},
}) {
  return (
    <Animated.View style={[ style, {
      opacity: fadeAnim || 1,
      transform: [{ scale }],
    }]}>
      {children}
    </Animated.View>
  )
}