export default (props = {}) => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="8"
      fill="none"
      viewBox="0 0 21 8"
    >
      <path
        fill="${props.color}"
        d="M20.354 4.354a.5.5 0 000-.708L17.172.464a.5.5 0 10-.707.708L19.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h20v-1H0v1z"
      ></path>
    </svg>
  `;
}