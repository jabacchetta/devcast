import React from 'react';

const Icon = ({ icon }) => (
  <svg>
    <use xlinkHref={`/static/icons/map.svg#${icon.toLowerCase()}`} />
    <style jsx>{`
      svg {
        margin: 20px;
        height: 20px;
        width: 20px;
        fill: var(--color-primary);
        border: 1px solid transparent;
        border-radius: 50%;
        padding: 6px;
        transition: var(--hover-duration-fast);
      }

      @media screen and (min-width: 470px) {
        svg {
          height: 24px;
          width: 24px;
        }

      svg:hover {
        fill: #44fa8d;
        border: 1px solid #44fa8d;
      }
    `}</style>
  </svg>
);

export default Icon;
