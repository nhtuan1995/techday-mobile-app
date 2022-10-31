export default ({color = '#2563EB'}) => {
  return `
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" fill="${color}"/>
        <path d="M13 8L24 8" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.25 13.75L28.75 13.75" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M15 32.5C18.4518 32.5 21.25 29.7018 21.25 26.25C21.25 22.7982 18.4518 20 15 20C11.5482 20 8.75 22.7982 8.75 26.25C8.75 29.7018 11.5482 32.5 15 32.5Z" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.3125 24.6875V25.85C15.3125 26.2875 15.0875 26.7 14.7 26.925L13.75 27.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="8" cy="8" r="2" fill="${color}"/>
    </svg>
    `;
};
