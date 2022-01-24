import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberSection} from './Money/NumberSection';
import {NoteSection} from './Money/NoteSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberSection/>
    </MyLayout>
  );
}

export default Money;
