import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={179}
    height={163}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m43.917 135.13 82.345-51.94 17.735 18.579-100.08 33.361Z"
      fill="#EAEEFA"
    />
    <Path
      d="M140.465 154.494h-25.488a2.02 2.02 0 1 1 0-4.033h25.488a2.022 2.022 0 0 1 1.512 3.49 2.022 2.022 0 0 1-1.512.543Z"
      fill="url(#a)"
      fillOpacity={0.5}
    />
    <Path
      d="M27.638 74.136H2.15a2.023 2.023 0 0 1-1.984-2.82 2.02 2.02 0 0 1 1.984-1.213h25.488a2.021 2.021 0 1 1 0 4.033Z"
      fill="url(#b)"
      fillOpacity={0.5}
    />
    <Path
      d="M22.879 87.106h-5.844a2.023 2.023 0 0 1-1.984-2.82 2.02 2.02 0 0 1 1.984-1.213h5.844a2.021 2.021 0 1 1 0 4.033Z"
      fill="url(#c)"
      fillOpacity={0.5}
    />
    <Path
      d="M154.86 143.426H70.447a2.037 2.037 0 1 1 0-4.074h84.413a2.038 2.038 0 1 1 0 4.074Z"
      fill="url(#d)"
      fillOpacity={0.5}
    />
    <Path
      d="M39.333 132.374 73.59 38.076a5.094 5.094 0 0 1 8.405-1.846l59.978 59.979a5.094 5.094 0 0 1-1.846 8.404l-94.298 34.256a5.032 5.032 0 0 1-6.495-6.495v0ZM122.171 45.844s0-15.282 15.281-15.282 15.281-15.28 15.281-15.28M80.402 126.325 51.877 97.8M106.889 10.188v15.28M152.733 71.313 162.921 81.5M152.733 50.938l15.281-5.094M64.103 64.182 114.02 114.1"
      stroke="#213992"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={147.057}
        y1={154.869}
        x2={140.271}
        y2={138.883}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3453B0" />
        <Stop offset={0} stopColor="#D8E2FF" stopOpacity={0.78} />
        <Stop offset={1} stopColor="#8AA1E3" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={34.23}
        y1={74.51}
        x2={27.444}
        y2={58.525}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3453B0" />
        <Stop offset={0} stopColor="#D8E2FF" stopOpacity={0.78} />
        <Stop offset={1} stopColor="#8AA1E3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={26.541}
        y1={87.48}
        x2={17.333}
        y2={80.094}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3453B0" />
        <Stop offset={0} stopColor="#D8E2FF" stopOpacity={0.78} />
        <Stop offset={1} stopColor="#8AA1E3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={170.094}
        y1={143.8}
        x2={167.41}
        y2={125.168}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3453B0" />
        <Stop offset={0} stopColor="#D8E2FF" stopOpacity={0.78} />
        <Stop offset={1} stopColor="#8AA1E3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
