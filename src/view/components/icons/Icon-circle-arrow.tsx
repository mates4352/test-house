import React, { FC } from 'react';

export const IconCircleArrow: FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle
      cx="20"
      cy="20"
      r="20"
      fill="currentColor"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4697 14.9697C10.7626 14.6768 11.2374 14.6768 11.5303 14.9697L20 23.4393L28.4697 14.9697C28.7626 14.6768 29.2374 14.6768 29.5303 14.9697C29.8232 15.2626 29.8232 15.7374 29.5303 16.0303L20.5303 25.0303C20.2374 25.3232 19.7626 25.3232 19.4697 25.0303L10.4697 16.0303C10.1768 15.7374 10.1768 15.2626 10.4697 14.9697Z"
      fill="white"
    />
  </svg>
);
