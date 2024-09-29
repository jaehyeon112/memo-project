import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { useCallback, useState } from 'react';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);
  const [selectMemoIndex, setSelectMemoIndex] = useState(0);
  const setMemo = useCallback(
    (newMemo) => {
      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectMemoIndex] = newMemo;
        debounceSetItem('memo', newMemos);
        return newMemos;
      });
    },
    [selectMemoIndex],
  ); // setMemo end

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        { title: 'Untitled', content: '', createdAt: now, updatedAt: now },
      ];
      debounceSetItem('memo', newMemos);
      return newMemos;
    });
    setSelectMemoIndex(memos.length);
  }, [memos]); // addMemo end

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debounceSetItem('memo', newMemos);
        return newMemos;
      });
      if (index === selectMemoIndex) {
        setSelectMemoIndex(0);
      }
    },
    [selectMemoIndex],
  ); // deleteMemo end

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectMemoIndex={setSelectMemoIndex}
        selectMemoIndex={selectMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
