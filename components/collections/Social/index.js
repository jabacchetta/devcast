import React from 'react'
import Icon from '../../elements/Icon/index'

const Social = () => (
  <ul>
    <li>
      <a href="https://www.facebook.com/DevCast-100336178088902/" rel="noopener noreferrer" target="_blank">
        <Icon icon="facebook" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/devcastcode" rel="noopener noreferrer" target="_blank">
        <Icon icon="twitter" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w" rel="noopener noreferrer" target="_blank">
        <Icon icon="youtube" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/devcastcode" rel="noopener noreferrer" target="_blank">
        <Icon icon="linkedin" />
      </a>
    </li>
    <style jsx>{`
      ul {
        margin: 0 0 0 auto;
        padding: 0;
        list-style: none;
        left: 50%;
        transform: translate(-148px);
        bottom: 0px;
        display: flex;
        position: absolute;
      }

      a {
        display: flex;
        margin: 0;
      }

      @media screen and (min-width: 470px) {
        ul {
          transform: translate(-160px);
        }
      }
    `}</style>
  </ul>
)

export default Social
