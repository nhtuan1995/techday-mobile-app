export default ({backgroundColor = '#F57E25' }) => (
  `
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_322_21260)">
  <circle cx="21" cy="20" r="10" transform="rotate(-180 21 20)" fill="${backgroundColor}"/>
  </g>
  <rect width="10" height="10" transform="translate(27 25) rotate(-180)" fill="${backgroundColor}"/>
  <path d="M20.0416 16.9583C19.8749 16.7917 19.8749 16.5417 20.0416 16.375C20.1249 16.2917 20.2499 16.25 20.3333 16.25C20.4166 16.25 20.5416 16.2917 20.6249 16.375L23.9583 19.7083C24.1249 19.875 24.1249 20.125 23.9583 20.2917L20.6249 23.625C20.4583 23.7917 20.2083 23.7917 20.0416 23.625C19.8749 23.4583 19.8749 23.2083 20.0416 23.0417L23.0833 20L20.0416 16.9583Z" fill="white"/>
  <defs>
  <filter id="filter0_d_322_21260" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="1" dy="2"/>
  <feGaussianBlur stdDeviation="6"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.626406 0 0 0 0 0.72909 0 0 0 0 0.879167 0 0 0 0.3 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_21260"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_21260" result="shape"/>
  </filter>
  </defs>
  </svg>
  `
)