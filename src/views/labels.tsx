import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e6e6e6;

    > svg {
      width: 16px;
      height: 16px;
      color: #333333;
      margin-right: 16px;
    }
  }
`;

const Button = styled.button`
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  height: 40px;

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;


function Tags() {
  const {tags, setTags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right"/>
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
