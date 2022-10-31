export default ({color}) => {
  return `
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8333 9.99999C18.8333 14.6 15.1 18.3333 10.5 18.3333C5.89999 18.3333 2.16666 14.6 2.16666 9.99999C2.16666 5.39999 5.89999 1.66666 10.5 1.66666C15.1 1.66666 18.8333 5.39999 18.8333 9.99999Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.5917 12.65L11.0083 11.1083C10.5583 10.8417 10.1917 10.2 10.1917 9.675V6.25833" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="${color}"/>
  </svg>
  `;
};
