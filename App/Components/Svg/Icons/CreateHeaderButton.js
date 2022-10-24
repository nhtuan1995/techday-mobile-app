import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={32} height={32} rx={8} fill="#213992" />
    <Path
      d="M9.125 16h13.75M16 9.125v13.75"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
