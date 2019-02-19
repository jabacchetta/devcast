import React from 'react'
import Icon from '../../elements/Icon/index'

const Social = ({ type }) => (
  <ul className={type} >
    <li>
      <a href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w" rel="noopener noreferrer" target="_blank">
        <Icon icon="facebook" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w" rel="noopener noreferrer" target="_blank">
        <Icon icon="twitter" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w" rel="noopener noreferrer" target="_blank">
        <Icon icon="youtube" />
      </a>
    </li>
    <style jsx>{`
      ul {
        margin: 0 0 0 auto;
        padding: 0;
        list-style: none;
      }

      .header {
        display: none;
      }

      .footer {
        left: calc(44vw - 88px);
        bottom: 0px;
        display: flex;
        position: absolute;
      }

      @media screen and (min-width: 720px) {
        .header {
          display: flex;
        }

        .footer {
          display: none;
        }
      }

      a {
        display: flex;
        margin: 0 8px 0;
      }
    `}</style>
  </ul>
)

export default Social
