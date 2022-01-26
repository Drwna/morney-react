import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';


const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Topbar = styled.header`
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type Params = {
  id: string
  name: string
}
const Label: React.FC = () => {
  const navigate = useNavigate();
  const {findTag, updateTag, deleteTag} = useTags();
  // 获取 URL id
  const {id: idString} = useParams<Params>()!;
  const tag = findTag(parseInt(idString!));

  const onClickBack = () => navigate('/labels');

  const tagContent = () => {
    return (
      <>
        <InputWrapper>
          <Input label="标签名" placeholder="请输入标签名"
                 value={tag.name}
                 onChange={e => {
                   updateTag(tag.id, {name: e.target.value});
                 }}/>
        </InputWrapper>
        <Center>
          <Button onClick={() => {
            deleteTag(tag.id) && navigate('/labels');
          }}>删除标签</Button>
        </Center>;
      </>
    );
  };

  return (
    <Layout>
      <Topbar>
        <Icon name="left"
              onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent() : <Center>tag 不存在</Center>}
    </Layout>
  );
};

export {Label};
