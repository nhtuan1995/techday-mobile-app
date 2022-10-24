import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.424 1.647A6.438 6.438 0 0 1 7 .562 6.45 6.45 0 0 1 13.438 7 6.438 6.438 0 1 1 3.424 1.647ZM7 7.562h3.5a.563.563 0 1 0 0-1.125H7.562V3.5a.563.563 0 1 0-1.125 0V7A.563.563 0 0 0 7 7.563Z"
      fill="#344054"
      stroke="#344054"
      strokeWidth={0.125}
    />
  </Svg>
)

export default SvgComponent
