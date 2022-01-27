import Layout from 'components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from 'views/Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from 'hooks/useRecord';
import {useTags} from 'hooks/useTags';
import dayjs from 'dayjs';
import {Center} from 'components/Center';


const CategoryWrapper = styled.div`
  background: #c4c4c4;

  .selected {
    background: white;

    &::after {
      display: none;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  padding: 10px 16px;
  line-height: 24px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName, beautify} = useTags();

  type HashType = { [k: string]: RecordItem[] }
  const hash: HashType = {}; // {'2022-01-26':[item,item], '2022-1-27':[item,item] }
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.map(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  const hasRecords = (
    array.map(([date, records]) =>
      <div>
        <Title>{beautify(date)}</Title>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds
                .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                .reduce((result, span, index, array) =>
                  result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
              }
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">￥{r.amount}</div>
          </Item>;
        })}
      </div>)
  );

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {array.length > 0 ? hasRecords : <Center>没有记录</Center>}
    </Layout>
  );
}

export default Statistics;
