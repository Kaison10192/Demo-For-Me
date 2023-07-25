import * as React from "react"
const UserIcon = ({ className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    className="h-[30px] w-[30px] ${className}"
    {...rest}
  >
    <circle
      cx={16}
      cy={9.5}
      r={7.5}
      style={{
        opacity: 1,
        vectorEffect: "none",
        fill: "#373737",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 2,
        strokeLinecap: "butt",
        strokeLinejoin: "bevel",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 3.20000005,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M16 19c6.648 0 12 2.899 12 6.5V32H4v-6.5C4 21.899 9.352 19 16 19z"
      style={{
        opacity: 1,
        vectorEffect: "none",
        fill: "#373737",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 2,
        strokeLinecap: "butt",
        strokeLinejoin: "bevel",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 3.20000005,
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default UserIcon