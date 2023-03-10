import React, { FC } from 'react';

export const IconPlus: FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect
      width="15"
      height="15"
      rx="7.5"
      fill="currentColor"
    />

    <path
      d="M7.4999 2.92847C7.81549 2.92847 8.07132 3.1843 8.07132 3.4999V6.92847H11.4999C11.8155 6.92847 12.0713 7.1843 12.0713 7.4999C12.0713 7.81549 11.8155 8.07132 11.4999 8.07132H8.07132V11.4999C8.07132 11.8155 7.81549 12.0713 7.4999 12.0713C7.1843 12.0713 6.92847 11.8155 6.92847 11.4999V8.07132H3.4999C3.1843 8.07132 2.92847 7.81549 2.92847 7.4999C2.92847 7.1843 3.1843 6.92847 3.4999 6.92847H6.92847V3.4999C6.92847 3.1843 7.1843 2.92847 7.4999 2.92847Z"
      fill="white"
    />
  </svg>
);
