import { useState } from "react";

const AL = ({ header }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    width={header ? "3rem" : "172"}
    height={header ? "3rem" : "172"}
    viewBox="0 0 150 150"
  >
    <defs>
      <style>{`
              .cls-1 {
                fill: #02a9ff;
              }

              .cls-1,
              .cls-2 {
                fill-rule: evenodd;
              }

              .cls-2 {
                fill: #fefefe;
              }
            `}</style>
    </defs>
    <g>
      <path
        d="M111.322,111.157 L111.322,41.029 C111.322,37.010 109.105,34.792 105.086,34.792 L91.365,34.792 C87.346,34.792 85.128,37.010 85.128,41.029 C85.128,41.029 85.128,56.337 85.128,74.333 C85.128,75.271 94.165,79.626 94.401,80.547 C101.286,107.449 95.897,128.980 89.370,129.985 C100.042,130.513 101.216,135.644 93.267,132.138 C94.483,117.784 99.228,117.812 112.869,131.610 C112.986,131.729 115.666,137.351 115.833,137.351 C131.170,137.351 148.050,137.351 148.050,137.351 C152.069,137.351 154.286,135.134 154.286,131.115 L154.286,117.394 C154.286,113.375 152.069,111.157 148.050,111.157 L111.322,111.157 Z"
        className="cls-1"
      />
      <path
        d="M54.365,34.792 L18.331,137.351 L46.327,137.351 L52.425,119.611 L82.915,119.611 L88.875,137.351 L116.732,137.351 L80.836,34.792 L54.365,34.792 ZM58.800,96.882 L67.531,68.470 L77.094,96.882 L58.800,96.882 Z"
        className="cls-2"
      />
    </g>
  </svg>
);

const Settings = ({ color, size }) => {
  return (
    <svg
      data-v-a679b1ba=""
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="sliders-h"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className="icon svg-inline--fa fa-sliders-h fa-w-16"
    >
      <path
        data-v-a679b1ba=""
        fill={color}
        d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
        className=""
      ></path>
    </svg>
  );
};

export { AL, Settings };
