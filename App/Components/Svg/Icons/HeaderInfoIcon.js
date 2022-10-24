import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke="#101828"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.25 11.25H12v5.25h.75"
      stroke="#101828"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.875 7.875a1.063 1.063 0 1 1-2.125 0 1.063 1.063 0 0 1 2.125 0Z"
      fill="#000"
      stroke="#101828"
      strokeWidth={0.125}
    />
  </Svg>
)

export default SvgComponent
