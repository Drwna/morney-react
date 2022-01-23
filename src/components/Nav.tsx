import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  line-height: 24px;
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;

      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 32px;
          height: 32px;
        }

        &.active {
          color: red;

          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/labels"
                   className={({isActive}) => (isActive ? 'active' : 'inactive')}>
            <Icon name="labels"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money"
                   className={({isActive}) => (isActive ? 'active' : 'inactive')}>
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics"
                   className={({isActive}) => (isActive ? 'active' : 'inactive')}>
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
