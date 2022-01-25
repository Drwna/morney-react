import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from '../components/Center';


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
}
const Label: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  let tag;
  if (id !== undefined) tag = findTag(parseInt(id));

  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>

      <InputWrapper>
        <Input label="标签名" placeholder="请输入标签名"
               value={tag?.name}/>
      </InputWrapper>

      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {Label};
