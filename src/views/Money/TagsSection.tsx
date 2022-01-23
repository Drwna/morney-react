import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  // MyLayout
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 16px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: transparent;
    border: none;
    color: #999;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    margin-top: 8px;
  }
`;

const TagsSection: React.FC = () => {
  return (
    <Wrapper>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
