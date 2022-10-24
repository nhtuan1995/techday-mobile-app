import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={12}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.157 1.657A5.444 5.444 0 0 1 6 .062 5.444 5.444 0 0 1 11.438 5.5c0 2.331-1.24 4.383-2.512 5.874a15.833 15.833 0 0 1-2.674 2.487.456.456 0 0 1-.504 0c-.11-.077-1.405-1-2.674-2.487C1.801 9.883.563 7.831.563 5.5a5.444 5.444 0 0 1 1.594-3.843Zm4.989 2.128a2.062 2.062 0 1 0-2.292 3.43 2.062 2.062 0 0 0 2.292-3.43Z"
      fill="#344054"
      stroke="#344054"
      strokeWidth={0.125}
    />
  </Svg>
)

export default SvgComponent
