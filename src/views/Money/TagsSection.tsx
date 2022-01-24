import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

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

      &.selected {
        background: #737373;
        color: white;
      }
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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;

  const onAddTag = () => {
    let tagName = window.prompt('请输入标签名');
    if (tagName === null) return;
    if (tagName) tagName = tagName.trim();
    if (!tagName) {
      return window.alert('标签名不能为空！');
    } else {
      setTags([...tags, {id: Math.random(), name: tagName}]);
    }
  };

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已被选中，就复制所有 没有被选中的 tag, 作为新的 selectedTag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
