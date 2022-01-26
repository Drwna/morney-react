import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from 'views/Money/CategorySection';
import {TagsSection} from 'views/Money/TagsSection';
import {NumberPadSection} from 'views/Money/NumberPadSection';
import {NoteSection} from 'views/Money/NoteSection';
import {useRecords} from 'hooks/useRecord';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0',
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const {records, addRecord} = useRecords();

  const submit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);
  };

  return (
    <MyLayout>
      {JSON.stringify(records)}
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>

      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>

      <CategorySection value={selected.category}
                       onChange={(category) =>
                         setSelected({
                           ...selected,
                           category
                         })}/>

      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOK={submit}/>
    </MyLayout>
  );
}

export default Money;
