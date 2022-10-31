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
        strokeWidth="1.5"
        d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88"
      ></path>
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.35 12.65L12 16l-3.35-3.35"
      ></path>
    </svg>
  `
)