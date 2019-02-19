import React from 'react'

const Icon = ({ icon }) => (
  <svg>
    <use xlinkHref={`/static/icons/map.svg#${icon.toLowerCase()}`} />
    <style jsx>{`
      svg {
        height: 5vw;
        width: 5vw;
        margin: 12px;
        max-height: 24px;
        max-width: 24px;
        fill: var(--color-primary);
        border: 1px solid transparent;
        border-radius: 50%;
        padding: 6px;
        transition: var(--hover-duration-fast);
      }

      svg:hover {
        fill: #44fa8d;
        border: 1px solid #44fa8d;
      }
    `}</style>
  </svg>
)

export default Icon
