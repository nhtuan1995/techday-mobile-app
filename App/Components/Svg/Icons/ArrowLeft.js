export default ({color = '#22313F'}) => {
  return `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.9166 16.0833C14.2499 16.4167 14.2499 16.9167 13.9166 17.25C13.7499 17.4167 13.4999 17.5 13.3333 17.5C13.1666 17.5 12.9166 17.4167 12.7499 17.25L6.08325 10.5833C5.74992 10.25 5.74992 9.75 6.08325 9.41667L12.7499 2.75C13.0833 2.41667 13.5833 2.41667 13.9166 2.75C14.2499 3.08333 14.2499 3.58333 13.9166 3.91667L7.83325 10L13.9166 16.0833Z" fill="${color}"/>
  </svg>  
    `;
};