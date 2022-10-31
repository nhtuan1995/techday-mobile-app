export default ({ color }) => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      fill="none"
      viewBox="0 0 23 22"
    >
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 20.167H14c4.583 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417H8.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417z"
      ></path>
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.392 8.488l4.858 2.814 4.822-2.795M11.25 16.289v-4.996"
      ></path>
      <path
        stroke="${color}"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.113 5.766L7.18 7.398c-.66.366-1.21 1.292-1.21 2.053v3.107c0 .761.54 1.687 1.21 2.054l2.933 1.631c.624.349 1.65.349 2.283 0l2.933-1.631c.66-.367 1.21-1.293 1.21-2.054V9.442c0-.761-.54-1.687-1.21-2.054l-2.933-1.631c-.633-.349-1.66-.349-2.283.009z"
      ></path>
    </svg>
  `
}