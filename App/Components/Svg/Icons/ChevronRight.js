export default ({ color = '#fff' }) => (
  `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="22"
      fill="none"
      viewBox="0 0 12 22"
    >
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1l10 10L1 21"
      ></path>
    </svg>
  `
)