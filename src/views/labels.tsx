import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {NavLink} from 'react-router-dom';
import {Button} from 'components/Button';

const TagList = styled.ol`
  background: white;
  font-size: 16px;

  > li {
    line-height: 20px;
    margin-left: 16px;
    border-bottom: 2px solid #e6e6e6;
    min-height: 44px;

    > a {
      padding: 10px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

function Tags() {
  const {tags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <NavLink to={'/labels/' + tag.id}>
              <span className="oneLine">{tag.id}: {tag.name} </span>
              <Icon name="right"/>
            </NavLink>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
