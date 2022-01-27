import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from 'views/Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from 'hooks/useRecord';
import {useTags} from 'hooks/useTags';


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
  justify-content: space-around;
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

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {/*{JSON.stringify(records)}*/}
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(i => <span>{getName(i)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">￥{r.amount}</div>
          </Item>;
        })
        }
      </div>
    </Layout>
  );
}

export default Statistics;
