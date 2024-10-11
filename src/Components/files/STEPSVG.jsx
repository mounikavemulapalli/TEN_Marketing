import React from "react";
import "./StepStyles.css"; // Ensure this path is correct
const STEPSVG = () => {
  return (
    <div className='svg-container'>
      <svg
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 47 116'
        height='130'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        role='presentation'
        aria-hidden='true'
      >
        <g>
          <defs>
            <filter
              filterUnits='userSpaceOnUse'
              height='95'
              width='25'
              y='0'
              x='11'
              id='e8a3e2a2-9680-4516-824c-a36c9fdcc4a9_comp-kezlqg44'
            >
              <feOffset dy='3' />
              <feGaussianBlur result='blur' stdDeviation='3' />
              <feFlood floodOpacity='.161' />
              <feComposite in2='blur' operator='in' />
              <feComposite in='SourceGraphic' />
            </filter>
            <filter
              filterUnits='userSpaceOnUse'
              height='45'
              width='47'
              y='71'
              x='0'
              id='b68a4615-f117-4948-a625-c4eb722d64ed_comp-kezlqg44'
            >
              <feOffset dy='3' />
              <feGaussianBlur result='blur-2' stdDeviation='3' />
              <feFlood floodOpacity='.161' />
              <feComposite in2='blur-2' operator='in' />
              <feComposite in='SourceGraphic' />
            </filter>
          </defs>
          <g>
            <g filter='url(#e8a3e2a2-9680-4516-824c-a36c9fdcc4a9_comp-kezlqg44)'>
              <path
                strokeWidth='7'
                strokeLinecap='round'
                stroke='#f3bc1d'
                fill='none'
                d='M23.5 9.5v70'
              />
            </g>
            <g filter='url(#b68a4615-f117-4948-a625-c4eb722d64ed_comp-kezlqg44)'>
              <g>
                <path
                  d='M9.836 77.5h27.328L23.5 102.943 9.836 77.5z'
                  fill='#f3bc1d'
                />
                <path
                  d='M23.5 101.886L36.328 78H10.672L23.5 101.886m0 2.114L9 77h29l-14.5 27z'
                  fill='#f3bc1d'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default STEPSVG;
