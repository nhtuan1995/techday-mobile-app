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
      opacity={0.2}
      d="M19.875 3.375H4.125a.75.75 0 0 0-.75.75v15.75c0 .414.336.75.75.75h15.75a.75.75 0 0 0 .75-.75V4.125a.75.75 0 0 0-.75-.75Z"
      fill="#213992"
    />
    <Path
      d="M19.875 3.375H4.125a.75.75 0 0 0-.75.75v15.75c0 .414.336.75.75.75h15.75a.75.75 0 0 0 .75-.75V4.125a.75.75 0 0 0-.75-.75ZM11.25 10.5v6M8.25 10.5v6"
      stroke="#213992"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.25 13.125a2.625 2.625 0 0 1 5.25 0V16.5"
      stroke="#213992"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.25 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      fill="#213992"
    />
  </Svg>
)

export default SvgComponent
