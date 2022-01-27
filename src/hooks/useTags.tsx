import React, {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    let _tags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (_tags.length === 0) {
      _tags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(_tags);
  }, []); // 组件挂在时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };

  const deleteTag = (id: number) => {
    if (window.confirm('确认删除？')) {
      setTags(tags.filter(tag => tag.id !== id));
      return true;
    } else {
      return false;
    }
  };

  const addTag = () => {
    let tagName = window.prompt('请输入标签名');
    if (tagName === null) return;
    tagName = tagName.trim();
    if (tagName === '') return window.alert('标签名不能为空！');
    const names = tags.map(tag => tag.name);
    if (names.includes(tagName)) {
      window.alert('标签已存在');
      return;
    }
    setTags([...tags, {id: createId(), name: tagName}]);
  };

  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };

  return {tags, setTags, getName, findTag, updateTag, findTagIndex, deleteTag, addTag};
};

export {useTags};
