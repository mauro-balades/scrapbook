export const ClubsIcon = ({ size, fill = 'currentcolor' }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 24 24`}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.414"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 2 22 0 12 0C2 0 0 2 0 12C0 15.7671 0.283817 18.3989 1.1722 20.2162L5.6673 3.66876C5.69798 3.55428 5.75091 3.44697 5.82306 3.35296C5.89522 3.25894 5.98519 3.18006 6.08784 3.12082C6.19048 3.06158 6.30379 3.02314 6.42129 3.00769C6.5388 2.99225 6.65819 3.00011 6.77266 3.03081C6.88713 3.06149 6.99444 3.11442 7.08846 3.18657C7.18248 3.25873 7.26136 3.3487 7.3206 3.45134C7.37984 3.55399 7.41828 3.6673 7.43372 3.7848C7.44917 3.9023 7.44131 4.0217 7.41061 4.13617L2.55019 22.0275C4.33602 23.5535 7.27498 24 12 24C22 24 24 22 24 12ZM14.798 6.72225C9.78735 2.02652 8.48167 4.46642 6.92335 10.7196C6.18253 13.6891 6.2484 13.709 7.62536 14.1205C8.57913 14.4047 10.1618 14.8775 12.5422 16.6479C18.3595 20.9755 19.9467 15.5922 21.1143 11.2339C21.6863 9.09949 21.3851 9.10079 20.339 9.1053L20.3383 9.1053L20.3379 9.1053C19.2488 9.10981 17.354 9.11766 14.798 6.72225Z"
      fill={fill}
    />
    <mask
      id="mask0_1150_11"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={24}
      height={24}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C22 0 24 2 24 12C24 22 22 24 12 24C2 24 0 22 0 12C0 2 2 0 12 0Z"
        fill={fill}
      />
    </mask>
    <g mask="url(#mask0_1150_11)"></g>
  </svg>
)
