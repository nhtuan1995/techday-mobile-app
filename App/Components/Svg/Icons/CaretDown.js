export default ({ color = '#253645' }) => (
  `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 7.5l5 5 5-5"
      ></path>
    </svg>
  `
)