import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  line-height: 24px;
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
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/labels">
            <Icon name="labels"/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
