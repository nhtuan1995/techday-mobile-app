export default ({ color = '#fff' }) => (
  `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8 2v3M16 2v3M3.5 9.09h17M18 23a4 4 0 100-8 4 4 0 000 8zM19.07 20.11L16.95 18M19.05 18.02l-2.12 2.12"
      ></path>
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5"
      ></path>
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
      ></path>
    </svg>
  `
)