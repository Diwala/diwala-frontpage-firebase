import * as React from 'react';

export default function AnimatedToken(props: any) {
  return(
    <svg viewBox="0 0 700 666" className="AnimatedToken">
    <defs>
      <radialGradient id="smallGradient" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#FFDE7E">
          <animate attributeName="stop-color" values="#FFDE7E;" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop offset="85%" stop-color="#BC41B0"/>
        <stop offset="100%" stop-color="#7C07C9"/>
        <animate attributeName="fx" dur="10s" from="150%" to="0%" repeatCount="indefinite" />
      </radialGradient>
    </defs>
    <g>
      <g>
        <path fill="url(#smallGradient)" d="M337,1c8.7,0,17.3,0,26,0c2.4,0.5,4.9,1,7.3,1.4c31.6,5.3,60.3,18.1,87.2,34.8c64.9,40.2,122.7,88.9,172,147.3
          c25.4,30.1,46,63.2,60.8,100c11,27.3,12.8,54.4,3.7,82.5c-6.4,19.8-15,38.5-25.6,56.3c-17.7,29.8-39.2,56.7-62.3,82.4
          c-31.2,34.6-63.9,67.5-102.4,94.1c-24,16.6-48.3,32.7-74.5,45.8c-21.6,10.8-44.1,18.7-68.3,21.4c-5.3,0-10.7,0-16,0
          c-8.8-1.7-17.8-2.9-26.4-5.3c-37.4-10.4-70.9-28.9-102.5-50.8c-54.6-37.8-102.5-83-144.5-134.2C38.5,436.5,9.6,394,1,341
          c0-7.7,0-15.3,0-23c0.8-3.2,1.5-6.5,2.3-9.7c8.8-35.2,26.4-66.1,47.9-94.8c42.1-56.3,92.3-104.6,148.3-146.8
          C240.8,35.5,284.9,9.7,337,1z"/>
      </g>
    </g>
    </svg>
  );
}
