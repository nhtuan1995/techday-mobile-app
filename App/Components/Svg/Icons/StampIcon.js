import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={33}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28.5 28a1 1 0 0 1-1 1h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Zm0-10v5a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6.762L11.3 6.838A3.999 3.999 0 0 1 15.212 2h2.576A4 4 0 0 1 21.7 6.838L19.738 16H26.5a2 2 0 0 1 2 2Z"
      fill="#213992"
    />
  </Svg>
)

export default SvgComponent
