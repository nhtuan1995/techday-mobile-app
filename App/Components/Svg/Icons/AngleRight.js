export default ({width = 24, height = 24}) => {
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.866587 1.13333C0.59992 0.866666 0.59992 0.466666 0.866587 0.199998C0.99992 0.0666651 1.19992 -4.83722e-07 1.33325 -4.73206e-07C1.46659 -4.6269e-07 1.66659 0.0666652 1.79992 0.199998L7.13325 5.53333C7.39992 5.8 7.39992 6.2 7.13325 6.46667L1.79992 11.8C1.53325 12.0667 1.13325 12.0667 0.866586 11.8C0.599919 11.5333 0.599919 11.1333 0.866586 10.8667L5.73325 6L0.866587 1.13333Z" fill="#22313F"/>
</svg>
  `;
}