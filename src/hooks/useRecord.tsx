import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: string;
  createdAt: string // ISO 8601
}

type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (parseFloat(newRecord.amount) <= 0) {
      alert('金额不能为 0');
      return false;
    }
    if (newRecord.tagIds.length < 1) {
      alert('请至少选择一个标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};

export {useRecords};
